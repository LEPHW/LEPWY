<template>
  <div class="home">
    <!--顶部导航 -->
    <home-top></home-top>  
    <!-- 轮播图 -->
    <HomeSwiper></HomeSwiper>
    <!-- 列表 -->
    <home-list></home-list>
    <!-- 发现好歌单 -->
    <home-music></home-music>
    
  </div>
</template>
<script setup>
  import HomeTop from '@/components/home/homeTop.vue'
  import HomeSwiper from '@/components/home/homeSwiper.vue'
  import HomeList from '@/components/home/homeList.vue'
  import HomeMusic from '@/components/home/homeMusic.vue'
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">

</style>