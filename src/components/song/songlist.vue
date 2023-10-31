<template>
    <div class="songlist">
        <div class="playTop">
            <div class="allPlay">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofanganniu"></use>
                </svg>
                <h5>播放全部</h5>
                <span>(共{{songList.tracks.length}}首)</span>
            </div>
            <div class="collect">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiahao"></use>
                </svg>
                <span>收藏({{songList.subscribedCount}})</span>
            </div>
        </div>
        <div class="musicRudio">
            <template v-for="(item,key,index) in songList.tracks">
                <div class="musiclist">
                    <span class="num">{{ key+1 }}</span>
                    <div class="musicItem">
                        <div class="musicName">
                            <span class="music">{{item.name}}</span>
                            <div class="autor">
                                <template v-for="autor in item.ar">
                                    <span>{{autor.name+" "}}</span>
                                </template>
                            </div>
                        </div>
                        <template v-if="item.mv">
                            <div class="mv">
                                <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shipin"></use>
                                </svg>
                            </div>
                        </template>
                    </div>
                    <div class="liebiao">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-31liebiao"></use>
                        </svg>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

//   从vuex的store中获取数据
const store=useStore()
const songList=computed(()=>store.state.songList)
console.log('hhhhh',songList.value);
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.songlist{
    width: 100%;
    background-color: #fff;
    margin-top: -80px;
    border-radius: 45px 45px 0 0;
    z-index: 999;
    padding: 15px;
    .playTop{
        display: flex;
        justify-content:space-between;
        align-items: center;
        .allPlay{
            display: flex;
            align-items: center;
            justify-content: center;
            h5{
                margin-left: 25px;
                font-size: 36px;
            }
            .icon{
                width: .8rem;
                height: .8rem;
            }
            span{
                font-size: 26px;
                color: rgb(150, 150, 150);
            }
        }
        .collect{
            width: 300px;
            height: 80px;
            background-color: rgb(254, 24, 24);
            border-radius: 45px;
            font-size: 36px;
            color: #fff;
            text-align: center;
            line-height: 80px;
            span{
                margin-left: 8px;
            }
            .icon{
                fill: rgb(255, 255, 255);
                width: .6rem;
                height: .6rem;
            }
        }
    }
    .musicRudio{
        // 此处的加减乘除符号必须左右两边必须要有空格，否则不生效
        // 设置浮动必须现加高度
    // height: calc(100vh - 8rem - 90px);
    height: calc(100vh - 8rem - 150px);
    overflow: auto;
    overflow-y: scroll;
    .musiclist{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px;
        margin-bottom: 30px;
        .num{
            font-size: 34px;
            color: rgb(103, 103, 103);
        }
        .musicItem{
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 30px;
            margin-right: 30px;
            .musicName{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: left;
                font-size: 28px;
                .music{
                    font-weight: 600;
                    color: rgb(88, 87, 87);
                    font-size: 36px;
                    margin-bottom: 8px;
                }
                .autor{
                        color:rgb(138, 137, 137); 
                    }
            }
        }
    }
}
}
</style>