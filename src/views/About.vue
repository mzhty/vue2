<template>
  <div class="about-wrapper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgs" :key="item">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
  export default {
    data() {
      return {
        imgs: [
          require('@/assets/cat1.jpg'),
          require('@/assets/cat.jpg'), 
          require('@/assets/cat2.jpg'), 
          require('@/assets/cat3.jpg'), 
          require('@/assets/cat4.jpg'),
          require('@/assets/cat5.jpg'), 
          require('@/assets/cat6.jpg'), 
          require('@/assets/cat7.jpg'),
        ]
      }
    },
    mounted() {
      this.initSwiper();
    },
    methods: {
      initSwiper() {
        this.mySwiper = new Swiper('.swiper-container', {
          autoplay: 5000,//可选选项，自动滑动
          loop: true,
          effect : 'cube',
          cube: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 100,
            shadowScale: 0.6
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.about-wrapper {
  .swiper-container {
    width: 100%;
    max-width: 500px;
    height: 500px;
    border-radius: 6px;
    text-align: center;
    background: #eee;
    line-height: 500px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
