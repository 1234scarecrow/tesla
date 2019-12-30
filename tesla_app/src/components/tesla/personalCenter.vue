<template>
    <div id="self">
        <header>
            <a href="">
                <img src="icon/back.png">
            </a>
        </header>
        <section id="info">
            <div>
                <!-- 头像需要传递路径 -->
                <img src="icon/photo.png" class="photo">
                <!-- 传递用户名 -->
                <p class="uid">oo00OO</p>
                <!-- 签到天数 -->
                <p>已签到1天</p>
            </div>
            <img src="images/selfbg1.jpg" class="selfbg">
        </section>
        <div class="mycar">
            <span>我的 Dream Car</span>
            <!--  -->
            <img src="images/dcar.png" alt="">
        </div>
        <div class="myitem">
            <span>我的收藏</span>
            <span>0</span>
        </div>
        <div class="myitem">
            <span>我的活动</span>
            <span>0</span>
        </div>
    </div>
</template>
<style scoped>
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
    /* 个人信息栏 */
    #info{
        width: 100%;
        height: 200px;
    }
    #info div{
        width: 30%;
        margin-left: 30px;
        text-align: center;
        display: inline-block;
    }
    #info div img{
        width: 74px;
        height: 74px;
        border-radius: 50%;
        display: block;
        margin: 0 auto;
        padding: 20px 0;
    }
    #info div p:last-child{
        margin: 15px;
        padding: 3px 0;
        border: 1px solid #6e727f;
        border-radius: 12px;
    }
    #info>img{
        float: right;
        width: 200px;
        opacity: .8;
    }
    /* 项目 */
    .mycar,.myitem{
        width: 85%;
        height: 60px;
        margin: 0 auto;
        border-top: 1px solid #6e727f47;
        line-height: 60px;
        font-size: 16px;
        color: #4f4f4f;
    }
    .myitem:last-child{
        border-bottom: 1px solid #6e727f47;
    }
    .mycar{
        height: 80px;
        line-height: 80px;
    }
    .mycar span{
        margin-left: 10px;
    }
    .myitem span:first-child{
        margin-left: 10px;
    }
    .mycar img{
        height:46px;
        float: right;
        margin: 15px 0;
    }
    .myitem>span:last-child{
        float: right;
        margin-right: 40px;
        font-size: 16px;
        font-weight: 600;
        color: #4f4f4f
    }
</style>