<template>
    <div class="APP home">
      
       <router-view></router-view>
       <div class="playradio">
          <play-radio></play-radio>
       </div>
    </div>
</template>
<script setup>
  import PlayRadio from "./views/playradio.vue";
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.APP{
  height: 100vh;
  position: relative;
  .playradio{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    border-top: 1px solid #999;
    background-color:#fff;
  }
}
</style>