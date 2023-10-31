<template>
  <div class="swiperTop">
    <van-swipe :autoplay="3000" :lazy-render="true" lazy-render indicator-color="orange">
      <van-swipe-item v-for="image in images" :key="image">
        <div class="divImg">
          <img :src="image.pic" />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script setup>
import { getSwiper } from '@/request/home/home.js'
import { onMounted, ref } from 'vue';
const images = ref([])
onMounted(async () => {
  const res = await getSwiper()
  images.value = res.data.banners
})
</script>
<!--scoped脱离此作用域，style中的css将不生效，防止其它组件继承样式 -->
<style scoped lang="less">
.swiperTop {
  width: 96%;
  height: 300px;
  margin: 0 auto;

  .divImg {
    width: 96%;
    height: 300px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.2rem;
    }
  }
}

:deep .van-swipe__indicators {
  margin-bottom: 20px;
}

:deep .van-swipe__indicator {
  width: 15px;
  height: 15px;
}
</style>