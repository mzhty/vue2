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
          autoplayDisableOnInteraction : false,
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
  width: calc(100vw);
  height: calc(100vh);
  background: url('~@/assets/back1.jpg') center no-repeat;
  background-size: cover;
  .swiper-container {
    border: 1px solid #e8e8e8;
    padding: 20px;
    width: 100%;
    // max-width: 500px;
    // height: 600px;
    border-radius: 6px;
    text-align: center;
    line-height: 600px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    .swiper-slide {
      width: 90%;
      height: 90%;
      img {
        max-width: 80%;
        max-height: 80%;
        border-radius: 10px;
      }
    }
  }
}
</style>
