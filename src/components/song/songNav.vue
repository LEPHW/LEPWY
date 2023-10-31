<template>
    <div class="navtop">
        <div class="left" @click="btnBack">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
        </div>
        <div class="center">
            <span>歌单</span>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
        <div class="right">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-31liebiao"></use>
            </svg>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router=useRouter()
function btnBack(){
    router.back()
}
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.song{
        .icon{
            width: 0.8rem;
            height: 0.8rem;
        }
        .center{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 70px;
            margin-right: 70px;
            flex: 1;
        }
        .navtop{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>