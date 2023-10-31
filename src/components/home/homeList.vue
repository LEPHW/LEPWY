<template>
    <div class="navList">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tuijian"></use>
            </svg>
            <span>每日推荐</span>
         </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhibo"></use>
            </svg>
            <span>私人FM</span>
         </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
            <span>歌单</span>
         </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
         </div>
        
    </div>
</template>
<script setup>
  
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.navList{
    width: 98%;
    display: flex;
    margin-top: 15px;
    justify-content: space-around;
    align-items: center;
    .iconItem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        color: rgb(117, 115, 116);
        .icon{
            width: 1.3rem;
            height: 1.3rem;
        }
    }
}
</style>