<template>
    <div class="song">
        <div class="nav">
            <img :src="SongPlayList.coverImgUrl" alt="">
            <song-nav></song-nav>
            <song-mes :SongPlayList="SongPlayList"></song-mes>
        </div>
        <song-list></song-list>
    </div>
</template>
<script setup>
import SongNav from './songNav.vue'
import SongMes from './songMes.vue'
import SongList from './songlist.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';
const store=useStore()
const SongPlayList=computed(()=>store.state.songList)
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.song{
    .nav{
        position: relative;
        height: 600px;
        // 字体填充色
        color: #f8f8f8;
        font-size: 50px;
        padding:20px 10px;
        img{
            width: 100%;
            height: 600px;
            // filter:blur(”模糊的半径0|px|rem“) contrast(”透明度0~1“)
            filter:blur(80px) ; 
            position: absolute;
            top: 0;
            left: 0;
            z-index: -99;
        }
    }
}
</style>