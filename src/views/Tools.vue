<template>
    <div class="content">
        <!--<Back></Back>-->
        <div class="toolsList">
            <div v-for="(item,index) in toolsList" :key="index" class="item animated fadeInUp" :class="item.delay">
                <img :src="item.bgc"/>
                <div class="bgc"></div>
                <div class="box">
                    <span class="title">{{item.title}}</span>
                    <span class="tips">{{item.tips}}</span>
                    <div :url="item.src" class="link animated ">
                        {{item.goTo}}
                        <span class="iconfont iconicon-right"></span>
                    </div>
                </div>
            </div>
        </div>

        <!--底部操作栏-->
        <Footer :color="color"></Footer>
        <!--底部操作栏-->
    </div>
</template>

<script>
    import Footer from '../component/Footer'
    export default {
        components:{Footer},
        name: "Tools",
        data(){
            return {
                color:'#111',
                delay:3,
                flag:true,
                toolsList: [{
                    title: '欢喜如你',
                    tips: '斯人如彩虹，遇上方知有',
                    bgc: 'https://hq-one-stand.oss-cn-shenzhen.aliyuncs.com/one-stand/photo/20200611/icon11.jpg',
                    src: 'enjoy?type=default',
                    goTo: '进入',
                    delay:''
                },
                    {
                        title: '猜你所享',
                        tips: '猜你所想，分享日常',
                        bgc: 'https://hq-one-stand.oss-cn-shenzhen.aliyuncs.com/one-stand/photo/20200611/icon6.jpg',
                        src: 'enjoy?type=friendly',
                        goTo: '进入',
                        delay:'delay-200ms'
                    },
                    {
                        title: '心灵鸡汤',
                        tips: '你在鸡汤里下毒。。',
                        bgc: 'https://hq-one-stand.oss-cn-shenzhen.aliyuncs.com/one-stand/photo/20200611/icon10.jpg',
                        src: 'enjoy?type=sad',
                        goTo: '进入',
                        delay:'delay-200ms'
                    },
                    {
                        title: '今夕何年',
                        tips: '故乡今夜思千里，霜鬓明朝又一年',
                        bgc: 'https://hq-one-stand.oss-cn-shenzhen.aliyuncs.com/one-stand/photo/20200611/icon9.jpg',
                        src: 'newYear',
                        goTo: '进入',
                        delay:'delay-400ms'
                    },
                    {
                        title: '心如止水',
                        tips: '让身心回归自然的拥抱',
                        bgc: 'https://hq-one-stand.oss-cn-shenzhen.aliyuncs.com/one-stand/photo/20200611/icon1.jpg',
                        src: 'photoShop',
                        goTo: '进入',
                        delay:'delay-600ms'
                    },
                    {
                        title: '初音未来',
                        tips: '动次打次~你能找到彩蛋嘛~',
                        bgc: 'https://hq-one-stand.oss-cn-shenzhen.aliyuncs.com/one-stand/photo/20200611/icon60.jpg',
                        src: 'game',
                        goTo: '进入',
                        delay:'delay-600ms'
                    },
                    {
                        title: '敬请期待',
                        tips: '不如给程序猿小哥哥资助点硬币',
                        bgc: 'https://hq-one-stand.oss-cn-shenzhen.aliyuncs.com/one-stand/photo/20200611/icon52.png',
                        src: 'more',
                        goTo: '可怜',
                        delay:'delay-600ms'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        padding: 20px 0;
        background: linear-gradient(to bottom, rgb(35, 37, 38), rgb(65, 67, 69));

        .toolsList {
        .item {
            width: 94%;
            height: 200px;
            position: relative;
            left: 3%;
            border-radius: 15px;
            margin-bottom: 20px;

            &:last-of-type{
                margin-bottom: 0;
        }

            img{
                width: 100%;
                height: 100%;
                position: absolute;
                border-radius: 15px;
                top: 0;
                left: 0;
                z-index: 1;
        }

            .bgc{
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 100%;
                opacity: 0.4;
                    background-color: #000;
                border-radius: 15px;
        }
            .box{
                position: absolute;
                z-index: 3;
                width: 100%;
                height: 100%;

                span{
                    color: #fff;
                    display: block;
                    margin-left: 8%;
                    font-weight: lighter;
                    margin-bottom: 10px;
            }

                .title{
                    font-size: 60px;
                    margin-top: 10%;
            }

                .tips{
                    font-size: 26px;
            }

                .link {
                    position: absolute;
                    right: 8%;
                    top: 50%;
                    transform: translate(0,-50%);
                    font-size: 38px;
                    color: #fff;
                    z-index: 2;
                    width: 175px;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 15px;
                    text-align: center;
                    border: 1px solid #fff;
                    border-radius: 60px;

                    span{
                        display: inline-block;
                        margin-left: 0;
                        margin-bottom: 0;
                }
            }
        }
    }
    }
    }
</style>
