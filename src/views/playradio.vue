<template>
    <div class="playbox">
        <audio controls src="http://m8.music.126.net/20230918220304/5d693cf5bb54e287988626a31855b602/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3">
        </audio>
       <div class="radios">
            <img src="" alt="">
       </div>
       <div class="musicname">
            <div class="name">
                <span>雨爱(抖音版)</span>
                <span class="Spanbottom">横滑切换上下首</span>
            </div>
            <div class="play">
                <van-icon name="play-circle-o" size="35px" v-if="true"/>
                <van-icon name="pause-circle-o" v-else/>
            </div>
       </div>
       <div class="liebiao">
            <van-icon name="wap-nav" size="35px"/>
       </div>
    </div>
    
</template>
<script setup>
import {getSongUrl} from '@/request/home/home'
import { onMounted } from 'vue';
import { useStore } from 'vuex';
onMounted(async()=>{
    const res=await getSongUrl('33894312')
    console.log('getSongUrl',res);
})
const store=useStore()
const song=store.state.songList
console.log('songList',song);
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.playbox{
   width: 100%;
   height: 100%;
   padding: 8px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-size: 28px;
   .radios{
    width: 60PX;
    height: 60PX;
    background-color: pink;
    border-radius: 50%;
   }
   .musicname{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 35px;
    .name{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .Spanbottom{
            margin-top: 10px;
        }
    }
   }
   .liebiao{
    margin-left: 40px;
   }
}
</style>