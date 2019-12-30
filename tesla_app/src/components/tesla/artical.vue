<template>
    <div id="artical">
        <!-- 顶部返回键 -->
        <header>
            <a href="">
                <img src="icon/back.png">
            </a>
        </header>
        <!-- 用户信息栏 -->
        <div class="aHeader">
            <img src="icon/photo02.png">
            <span class="userId">Emliy</span>
            <a href="">关注</a>
        </div>
        <!-- 文章题目 -->
        <div class="aTitle">
            一颗墙头草的坚定进化历程
        </div>
        <!-- 文章头图 -->
        <div class="headImage">
            <img src="images/headimage01.png">
        </div>
        <!-- 文章内容 -->
        <div class="aContent">
            先解释一下为什么说自己是一颗墙头草，我真的是一个重度选择困难症+深度耳根子软，用我男朋友的话说就是实在太难弄了 0.0
            <br>
            <br>
            回归正题。我是一个95后小教师，阴差阳错到了离家20公里外的地方上班，之前开家里已经 11 年的旧车代步，本来想着结婚前再买新车，无奈结婚还未提上日程，旧车却气数将尽，频繁抛锚，导致现在就需要买车。然而……
            <br>
            <br>
            示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字。
            <br>
            <br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero aspernatur quos exercitationem iste dolorum magnam. Itaque obcaecati recusandae, odit, ut dolorem iusto amet possimus quidem unde quisquam, illo eaque voluptates?
        </div>
        <!-- 评论区 -->
        <div class="remark">
            <span>精选评论</span>
            <div class="userinfo">
                <img src="icon/photo02.png">
                <span>Nobody</span>
                <a href="">
                    <img src="icon/thumbup.png">
                </a>
                <div class="content">
                    真心佩服这么用心记录的车友。真心佩服这么用心记录的车友。真心佩服这么用心记录的车友。真心佩服这么用心记录的车友。
                </div>
            </div>
        </div>
        <!-- 底部评论栏 -->
        <div class="dRemark">
            <input type="text">
        </div>
    </div>
</template>
<style scoped>
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
    /* 设置整体页面宽度 */
    #artical{
        width: 100%
    }
    
    .aHeader{
        width: 100%;
        height: 86px;
        /* line-height: 86px; */
        padding-left: 5%;
        position: relative;
    }
    .aHeader>img{
        height: 60px;
        margin: 13px 0;
        border-radius: 50%;
    }
    .userId{
        margin-left: 5%;
        font-size: 1.7rem;
        position: absolute;
        top: 34%;
        left: 20%;
    }
    .aHeader>a{
        display: inline-block;
        text-decoration: none;
        color: #4f4f4f;
        position: absolute;
        font-size: 1.3rem;
        color: #fff;
        top: 34%;
        right: 10%;
        height: 24px;
        line-height: 24px;
        text-align: center;
        width: 13%;
        border-radius: 12px;
        background-color: #4f4f4f57;
    }
    .aTitle{
        margin: 5%;
        font-size: 1.7rem;
        font-weight: 700;
    }
    .headImage>img{
        width: 90%;
        margin: 3% 5%;
    }
    .aContent{
        padding: 0 5%;
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
        text-indent: 2rem;
        line-height: 29px;
    }
    .remark{
        border-top: 1px solid #4f4f4f;
        width: 90%;
        margin: 10% 5%;
        padding-top: 10%;
        position: relative;
    }
    .remark>span{
        font-size: 1.0rem;
        color: #4f4f4f;
        
    }
    .userinfo{
        position: absolute;
    }
    .userinfo img{
        height: 50px;
        margin: 13px 0;
        border-radius: 50%;
    }
    .userinfo span{
        font-size: 1.5rem;
        color: #4f4f4f;
        position: absolute;
        top: 34%;
        left: 19%;
    }
    .userinfo>a>img{
        margin: 0;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 34%;
        right: 6%;
    }
    .content{
        font-size: 1.5rem;
        color: #4f4f4f;
        position: absolute;
        top: 85%;
        left: 19%;
    }
    .dRemark{
        width: 90%;
        margin: 0 5%;
        position: fixed;
        bottom: 0%;
        background: #fff;
    }
    .dRemark input{
        width:50%;
        height:30px;
        background: #f8f8f8;
        border:1px solid #f8f8f8;
        outline:none;
        font-size:20px;
        text-indent:10px;
    }
</style>