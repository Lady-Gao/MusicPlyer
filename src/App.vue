<style scoped lang='stylus'>
header {
    height: 50px;
    background: #C20C0C;
    color: #fff;
    ul {
        overflow: hidden;
        width: 60%;
        margin: 0 auto;
        li {
            float: left;
            width: 33.33%;
            font-size: 26px;
            line-height: 50px;
            height: 50px;
            text-align: center;
        }
        li.cur{
            color: #ff8383;
        }
    }
    .caidan{
        top: 0;left: 0;height: 50px;line-height: 50px;font-size: 26px;text-align: center;width: 50px;
    }
    .guangpan{
        top: 0;right: 0;height: 50px;line-height: 50px;font-size: 26px;text-align: center;width: 50px;
    }
}

</style>
<template>
    <div id="app">
        <header class="por">
            <p class="iconfont icon-caidan poa caidan"></p>
            <ul>
                <li class="iconfont" v-for="item in tabNav" :class="[item.addClass,{cur : $route.name == item.title}]" @click="routerGo(item.url)"></li> 
            </ul>
            <p class="iconfont icon-zhuanjiguangpan guangpan poa" @click="showPlayer"></p>
        </header>
        <div class="content">
            <router-view></router-view>
        </div>
        <transition name="slide">
            <album-page v-if="$store.state.isShowAlbum"></album-page>
        </transition>
        <transition name="slide">
            <audio-player v-show="$store.state.isShowPlayer" :player="player"></audio-player>
        </transition>
    </div>
</template>
<script>
import albumPage from "./components/album.vue"
import audioPlayer from "./components/audioplayer.vue"
export default {
    name: 'app',
    data() {
        return {
            tabNav:[{
                addClass:"icon-music",
                url:"/indexmusic",
                title:"音乐首页"
            },{
                addClass:"icon-wangyiyunyinlezizhi-copy",
                url:"/mymusic",
                title:"我的音乐"
            },{
                addClass:"icon-diantai",
                url:"/radiomusic",
                title:"我的电台"
            }]
        }
    },
    computed: { 
        player(){
            return this.$store.state.player
        }
    },
    methods:{
        routerGo(url){
            this.$router.push({path:url})
        },
        showPlayer(){
            this.$store.commit("SHOWPLAYER",{
                isShowPlayer : true
            })
        }
    },
    components:{
        audioPlayer,albumPage
    }
}

</script>
