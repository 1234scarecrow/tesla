<template>
    <div id="reg">
        <!-- 返回键 -->
        <header>
            <a href="">
                <img src="icon/back.png">
            </a>
        </header>
        <!-- 标题 -->
        <div class="title">
            <h3>欢迎</h3>
            <h3>来到Tesla</h3>
        </div>
        <!-- 注册信息 -->
        <div class="regInfo">
            <mt-field v-model="uname" placeholder="username" class="inputs"></mt-field>
            <mt-field v-model="upwd" placeholder="password" class="inputs"></mt-field>
            <mt-button class="btn" @click="login">登录</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            uname:"xiaoming",//双向绑定
            upwd:"123456",//用户名密码
        }
    },
    methods:{
        login(){
            console.log("1. 进入登录函数")
            // 1. 创建验证用户名和密码的正则表达式
            var reg=/^[a-zA-Z0-9]{3,12}$/;
            // 2. 获取用户名和密码
            var u = this.uname;
            var p = this.upwd;
            console.log(`2. 获取用户名和密码：${u}  ${p}`)
            //3. 验证用户名不正确显示出错信息
            if(!reg.test(u)){
                this.$messagebox("信息","用户名格式不正确");
                return;     //4. 返回
            }
            // 5. 验证用户密码不正确显示出错信息
            if(!reg.test(p)){
                this.$messagebox("信息","用户密码格式不正确");//10:35
                return;     // 6. 返回
            }
            console.log("3. 验证完毕");
            // 7. 发送ajax请求!!
            var url = "login";
            // http://127.0.0.1:4000/login?uname=xiaoming&upwd=123456
            var obj={uname:u,upwd:p};
            console.log(obj);
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res);   // 打印返回结果
                if(res.data.code==-1){
                    this.$toast("用户名或密码错误");    // 7.1 登录失败
                }else{
                    this.$toast("登陆成功");    // 7.2 登录成功
                    this.$router.push("/personalCenter")
                }
            })
        }
    }
}
</script>
<style scope>
    /* 去除默认内外边距 */
    *{
        margin: 0;
        padding: 0;
    }
    /* 顶部返回键 */
    header{
        width: 100%;
        height: 60px;
    }
    header img{
        width: 37px;
        margin-top: 20px;
        margin-left: 20px;
    }
    /* 标题 */
    .title{
        width: 100%;
        height: 100px;
        padding: 27px 30px;
        box-sizing: border-box;
    }
    .title h3{
        font-size: 20px;
        color: #4f4f4f;
        margin: 10px 0;
    }
    /* 注册信息 */
    .regInfo{
        margin-top: 30px;
    }
    .inputs{
        width: 80%;
        margin: 20px auto;
        border: 1px solid #4f4f4fe5;
        border-radius: 3px;
    }
    #reg .btn{
        display: block;
        height: 50px;
        width: 80%;
        margin: 20px auto 0;
        background: #4f4f4fcc;
        font-size: 20px;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
</style>