<template>
    <!--底部操作栏-->
    <div class="container_bottom" :style="'backgroundColor:'+color">
        <div class="border_progress" :style="'width:'+videoProcess+'%'"></div>
        <div class="bottom_tab" :class="getTabIndex==0?'tab_active':''" @click="changeTab(0)">
            <span class="bottom_tab_span ">首页</span>
        </div>
        <div class="bottom_tab" :class="getTabIndex==1?'tab_active':''" @click="changeTab(1)">
            <img src="http://oss.jishiyoo.com/images/file-1575427746903.png" alt="" class="bottom_tab_icon">
        </div>
        <div class="bottom_tab" :class="getTabIndex==2?'tab_active':''" @click="changeTab(2)">
            <span class="bottom_tab_span">我的</span>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'vant';
    import {mapGetters} from 'vuex'
    export default {
        name: "Footer",
        props:{
            videoProcess:{
                type:Number,
                default:0
            },
            color:{
                default: ''
            }
        },
        computed:{
            ...mapGetters(['getTabIndex'])
        },
        data(){
            return {
                tabIndex:0
            }
        },
        methods:{
            //改变菜单
            changeTab(index) {
                this.$store.commit('setTabIndex',index)
                switch (index) {
                    case 0:this.$router.replace({path:'/'})
                        break;
                    case 1: Toast('敬请期待哦~')
                        break;
                    case 2:this.$router.replace({name:'Tools'})
                        break;
                }
            },
        }
    }
</script>

<style scoped>
    .container_bottom {
        position: fixed;
        bottom: 0;
        width: 100%;
        /*background: rgba(0, 0, 0, 0.85);*/
        height: 48px;
        /*border-top: 1px solid rgba(255, 255, 255, 0.7);*/
        max-width: 550px;
    }

    .border_progress {
        width: 0;
        height: 1px;
        background: #bababa;
        position: absolute;
        top: 0;
        transition: .1s all;
    }

    .bottom_tab {
        width: 33%;
        text-align: center;
        float: left;
        color: #c9c9c9;
        padding: 10px 0;
    }

    .bottom_tab_icon {
        width: 44px;
    }

    .bottom_tab_span {
        line-height: 28px;
        border-bottom: 2px solid transparent;
        font-weight: 600;
        font-size: 16px;
        display: inline-block;
        padding: 0 4px;
        transition: .5s all;
    }

    .tab_active .bottom_tab_span {
        border-bottom: 2px solid #fff;
        color: #fff;
    }
</style>
