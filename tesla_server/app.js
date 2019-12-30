//tesla 项目服务器
//1:下载四个第三方模块
//express           web服务器
//mysql             mysql驱动
//express-session   会话对象
//cors              跨域
//[8080脚手架   4000服务器]
//npm i express mysql express-session cors
//2:引入第三方模块
const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const cors = require("cors");
//3:创建数据库连接池
var pool = mysql.createPool({
  //  host:"127.0.0.1",
  //  user:"root",
  //  password:"",
  //  port:3306,
  //  connectionLimit:15,
  //  database:"tesla"
  // 3.X 新浪云配置
  host     : process.env.MYSQL_HOST,
  port     : process.env.MYSQL_PORT,
  user     : process.env.ACCESSKEY,
  password : process.env.SECRETKEY,
  database : 'app_' + process.env.APPNAME,
  connectionLimit: 5
})
//4:创建web服务器
var server = express();
//5:配置跨域
//允许跨域程序端口
server.use(cors({
    //允许哪个程序列表 脚手架
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"],
    //每次请求验证
    credentials:true
}));
//6:配置session对象
server.use(session({
   secret:"128位安全字符串",//加密条件
   resave:true,            //请求更新数据
   saveUninitialized:true  //保存初始化数据
}))
//7:指定静态目录  public
server.use(express.static("public")); 
//8:启动监听端口  4000
server.listen(5050);
console.log("listening on 5050");

// 登录接口
server.get("/login",(req,res)=>{
  console.log(req);
  var $uname=req.query.uname;
  var $upwd=req.query.upwd;
  console.log($uname,$upwd);
  var sql="SELECT uname,upwd FROM tesla_user WHERE uname=? AND upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
      if(err) throw err;
      console.log(result);
      if(result.length>0){
          res.send({code:1,msg:"登录成功！",data:result});
      }else{
          res.send({code:-1,msg:"登录失败，请查证用户名和密码是否正确"});
      }
  })
})

// 以下是课上项目的路由
//功能一;完成用户登录验证
server.get("/login",(req,res)=>{
  //1:获取参数 uname upwd
  var n = req.query.uname;
  var p = req.query.upwd;
  //2:创建sql
  var sql =" SELECT id FROM xz_login WHERE uname = ? AND upwd = md5(?)";
  //3:发送sql并且结果返回脚手架
  pool.query(sql,[n,p],(err,result)=>{
     //4:如果发生严重错误抛出
     if(err)throw err;
     //5:登录成功用户名密码有错
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"})
     }else{
       //6:登录成功
       //7:将登录成功用户id保存
       //session对象作为登录成功凭据
       //result=[{id:1}]
       //不写req.session.id error
       req.session.uid=result[0].id;
       res.send({code:1,msg:"登录成功"});
     }
  })
})
//测试   68~72   16:52
//1:启动服务器 node app.js
//2:启动mysql 3006
//3:http://127.0.0.1:4000/login?uname=tom&upwd=122
//3:http://127.0.0.1:4000/login?uname=tom&upwd=123


//功能二:商品列表分页显示
server.get("/product",(req,res)=>{
  //1:参数  页码  一页几行
  var pno = req.query.pno;
  var ps = req.query.pageSize;
  //2:默认指定页码一页几行
  if(!pno){pno=1}
  if(!ps){ps=20}
  //x:sql
  var offset = (pno-1)*ps;
  ps = parseInt(ps);
  var sql = " SELECT lid,lname,price,pic FROM xz_laptop LIMIT ?,?";
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
  //x:json
})
//测试  15:47
//复制db_01.sql 复制
//SELECT lid,pid FROM xz_laptop;
//启动服务器  node app.js
//打开浏览器  
//http://127.0.0.1:4000/product
//http://127.0.0.1:4000/product?pno=2
//http://127.0.0.1:4000/product?pno=3

//http://127.0.0.1:4000/01.png
//http://127.0.0.1:4000/02.png
//http://127.0.0.1:4000/03.png

//功能三:添加购物车109~151
//1:get /addcart
server.get("/addcart",(req,res)=>{
//2:获取当前登录用户uid
var uid = req.session.uid;
//3:如果用户没登录返回错误信息
//  并且返回此函数
if(!uid){
  res.send({code:-2,msg:"请登录"});
  return;
}
//4:获取参数 编号/价格/名称
var lid = req.query.lid;
var lname = req.query.lname;
var price = req.query.price;
//5:查询指用户是否购买过此商品
var sql = "SELECT id FROM xz_cart WHERE uid = ? AND lid = ?";
//6:执行sql
pool.query(sql,[uid,lid],(err,result)=>{
  if(err)throw err;
 //7:在回调函数中(模拟同步)
 //8:如果没有买过此商品
 if(result.length==0){
  var sql = `INSERT INTO xz_cart VALUES(null,${lid},${price},1,'${lname}',${uid})`;
 }else{
  var sql = `UPDATE xz_cart SET count=count+1 WHERE uid=${uid} AND lid=${lid}`;
 }
 pool.query(sql,(err,result)=>{
   if(err)throw err;
   res.send({code:1,msg:"添加成功"})
 })
 //9:添加
 //10:如果买过此商品
 //11:更新
 //12:返回结果给客户端
})//sql end 
})//addcar end 

//添加
//http://127.0.0.1:4000/addcart?lid=1&price=99&lname=apple
//http://127.0.0.1:4000/login?uname=tom&upwd=123
//http://127.0.0.1:4000/addcart?lid=1&price=99&lname=apple
//http://127.0.0.1:4000/addcart?lid=1&price=99&lname=apple

// 功能：查看购物车
server.get("/checkcart",(req,res)=>{
  // 1. 获取登录凭证id
  var uid=req.session.uid;
  // 2. 如果id不存在，跳转至登录
  if(!uid){
    res.send({code:-2,msg:"请登录"});
    return;
  }
  // 3. 创建sql语句
  var sql="select id,lid,lname,price,count from xz_cart where uid=?";
  // 4. 执行sql语句
  pool.query(sql,[uid],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
  // 5. 将服务器返回结果发送至脚手架
})
// 测试
// http://127.0.0.1:4000/checkcart
// http://127.0.0.1:4000/login?uname=tom$upwd=123
// http://127.0.0.1:4000/checkcart

// 功能5： 删除一条记录
server.get("/del",(req,res)=>{
  // 1. 获取用户登陆信息
  var uid=req.session.uid;
  // 2. 如果用户未登录退出
  if(!uid){
    res.send({code:-2,msg:"请登录"});
  }
  // 3. 获取参数id
  var id=req.query.id;
  console.log(id);
  // 4. 创建sql
  var sql="delete from xz_cart where id=?"
  // 5. 执行sql
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"删除成功",data:result})
  })
  // delete 条件 affectedRows 影响行数
})
// 测试
// http://127.0.0.1:4000/del?id=1
// http://127.0.0.1:4000//login?uname=tom$upwd=123
// http://127.0.0.1:4000/del?id=1

// 功能6：删除多条记录
server.get("/delm",(req,res)=>{
  var uid=req.session.uid;
  if(!uid){
    res.send({code:1,msg:"请登录"});
    return
  }
  // 2. 获取参数ids  
  var ids=req.query.id;
  var sql=`delete from xz_cart where id in(${ids})`;
  // 3. 删除
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
});
//测试
//http://127.0.0.1:4000/delm?id=4,5
//http://127.0.0.1:4000/login?uname=tom&upwd=123
//http://127.0.0.1:4000/delm?id=4,5