<template>
    <div id="self">
        <!-- 顶部返回键 -->
        <header id=header>
            <a href="">
                <img src="icon/back.png">
            </a>
        </header>
        <!-- 个人信息及背景 -->
        <section id="info">
            <img src="icon/photo.png" class="photo">
            <span class="uid">oo00OO</span>
            <img src="images/selfbg1.jpg" class="selfbg">
        </section>
        <section id="">

        </section>
    </div>
</template>
<style scope>
    *{
        margin: 0;
        padding: 0;
    /* 返回键样式 */
    }
    #header{
        position: relative;
    }
    #header a{
        display: block;
        position: absolute;
        top: 30px;
        left: 7%;
    }
    #header a img{
        width: 37px;
    }
    /* 个人信息样式 */
    /* #self{
        position: relative;
    }
    #info{
        width: 100%; */
        /* position: absolute; */
        /* top: 125px; */
        /* left: 12%; */
    /* }
    #info img:first-child{
        width: 74px;
        display: block;
        margin-bottom: 10px;
    }
    .selfbg{
        position: fixed;
        right: 0;
        top: 64px;
        width: 204px;
    }
    #info span{
        position: absolute;
        left: 10px;
        color: #4f4f4f;
        font-size: 14px;
    } */
</style>