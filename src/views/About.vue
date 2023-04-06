<template>
  <div class="about-wrapper">
    <div v-for="item in imgs" :key="item">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgs: [
          require('@/assets/cat.jpg'), 
          // require('@/assets/1132354.jpg')
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.about-wrapper {
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
