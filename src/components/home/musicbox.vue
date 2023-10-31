<template>
    <div class="box">
        <div class="listMusic">
            <van-swipe width="130" :loop="false" :show-indicators="false">
                <van-swipe-item v-for="image in listMusic" :key="image">
                    <div class="musicbox" @click=PlayMusic(image.id) >
                        <div class="bgcMusic">
                            <img :src="image.picUrl" alt="">
                        </div>
                        <span class="playCount">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-gl-play-copy"></use>
                            </svg>
                            {{ changeCount(image.playCount) }}
                        </span>
                        <div class="name">
                            <span>{{ image.name }}</span>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>

        </div>
    </div>
</template>
<script setup>
import { getMusicList,getMusicItemList } from '@/request/home/home.js'
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const listMusic = ref([])
function changeCount(num) {
    if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
    } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
    }
}
onMounted(async () => {
    const res = await getMusicList()
    listMusic.value = res.data.result
})
const store=useStore()
const router=useRouter()
async function PlayMusic(id){
    const {data}=await getMusicItemList(id)
    const playCount=changeCount(data.playlist.playCount)
    store.commit("getplayNum",playCount)
    store.commit("getSonglist",data.playlist)
    router.push('/homesong')
}
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
 .musicbox {
        width: 240px;
        display: flex;
        position: relative;
        margin: 28px 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .bgcMusic {
            img {
                width: 100%;
                border-radius: 25px;
            }
        }

        .playCount {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 26px;
            color: #fff;
        }

        .name {
            width: 240px;
            height: 45px;
            font-size: 32px;
            color: rgb(156, 156, 156);

            display: -webkit-box; //使多行文本显示为弹性盒子
            -webkit-box-orient: vertical; //弹性盒子垂直排列
            -webkit-line-clamp: 2; //使弹性盒子只显示指定的行数
            // white-space: nowrap;//防止文字换行
            text-overflow: ellipsis; //超出显示省略号
        }
    }
</style>