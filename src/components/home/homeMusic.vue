<template>
    <div class="Music">
        <div class="findsong">
            <h5>发现好歌单</h5>
            <button>查看更多</button>
        </div>
        <!-- 音乐盒子 -->
        <music-box></music-box>
    </div>
</template>
<script setup>
import MusicBox from './musicbox.vue'
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.Music {
    margin: 30px 10px;
    // 发现歌单
    .findsong {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 46px;

        button {
            background-color: #fff;
            border-radius: 60px;
            height: 70px;
            width: 180px;
            font-size: 32px;
            text-align: center;
            line-height: 32px;
            border: 2px solid #DDD;
            // border：width style #DDD
        }
    }
}
</style>