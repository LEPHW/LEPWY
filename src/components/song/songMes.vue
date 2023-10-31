<template>
<div class="songbox">
    <div class="songMes">
            <div class="left">
                <img :src="props.SongPlayList.coverImgUrl" alt="">
                <span>
                    <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gl-play-copy"></use>
                    </svg>
                    {{ playNum }}
                </span>
            </div>
            <div class="right">
            <h5 class="toptext">{{props.SongPlayList.name}}</h5>
                <div class="center">
                    <img :src="props.SongPlayList.creator.backgroundUrl" alt="">
                    <span>{{props.SongPlayList.creator.nickname  }}</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youjiantou1"></use>
                    </svg>
                </div>
                <div class="btmtext">
                    <span>{{props.SongPlayList.description}}</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youjiantou1"></use>
                    </svg>
                </div>
            </div>
    </div> 
    <!-- <div class="itemTopFooter">
            <div class="footerItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
                </svg>
                <span>{{ props.SongPlayList.commentCount }}</span>
            </div>
            <div class="footerItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
                <span>{{ props.SongPlayList.shareCount }}</span>
            </div>
            <div class="footerItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
                </svg>
                <span>下载</span>
            </div>
            <div class="footerItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-show_duoxuan"></use>
                </svg>
                <span>多选</span>
            </div>
    </div> -->
</div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store=useStore()
const props=defineProps({
    SongPlayList:Object
})
console.log(props.SongPlayList);
const playNum=computed(()=>store.state.playNum)
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.songMes{
    display: flex;
    margin-top: 30px;
    .left{
        position: relative;
        img{
            width: 250px;
            height: 250px;
            border-radius: 30px;
        }
        span{
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 32px;
        }
    }
    .right{
        margin-left: 15px;
        .toptext{
                color: rgb(255, 254, 254);
                font-size: 34px;
            }
        .center{
            margin-top: 15px; 
            color: rgb(243, 243, 243);
            img{
                width: 65px;
                height: 65px;
                border-radius: 50%;
                // 基于中线对齐
                vertical-align: middle;
            }
            span{
                font-size: 36px;
                margin-left: 10px;
            }
            .icon{
                width: 0.5rem;
                height: 0.5rem;
            }
        }
        .btmtext{
            margin-top: 10px;
            font-size: 32px;
            color: rgb(201, 201, 201);
            display: flex;
            align-items: center;
            span{
                display: -webkit-box; //使多行文本显示为弹性盒子
                -webkit-box-orient: vertical; //弹性盒子垂直排列
                -webkit-line-clamp: 2; //使弹性盒子只显示指定的行数
                overflow: hidden;
                text-overflow:clip;
                width: 98%;
            }
        }
    }
}

.itemTopFooter{
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 36px;
    .footerItem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon{
            width: 0.9rem;
            height: 0.9rem;
            margin-bottom: 10px;
        }
    }
}
</style>