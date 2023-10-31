<template>
    <div class="top">
          <div class="topLeft">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-31liebiao"></use>
            </svg>
          </div>
          <div class="topCenter">
            <div class="mine">
              <span>我的</span>
            </div>
            <div class="discover active">
              <span>发现</span>
            </div>
            <div class="yuncun">
              <span>云村</span>
            </div>
            <div class="radio">
              <span>视频</span>
            </div>
          </div>
          <div class="topRight">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sousuo"></use>
            </svg>
          </div>
    </div>
</template>
<script setup>
  
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  .topCenter{
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 32px;
    .active{
      font-weight: 900;
      color: black;
      font-size: 36px;
    }
  }
  .icon{
    width: 0.8rem;
    height: 0.8rem;
  }
}
</style>