<template>
  <div>
    <div>
      <a-button>我代表了一排公共按钮</a-button>
    </div>
    <div>
      <a-breadcrumb>
        <a-breadcrumb-item v-for="item in breads" :key="item.route">
          <router-link :to="{name: item.route, query: item.query}">{{item.title}}</router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <router-view style="padding: 40px;"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        breads: [{
          title: 'list1',
          route: 'index'
        }]
      }
    },
    watch: {
      '$route.name': {
        handler(newVal) {
          const id = this.$route.query.id, id2 = this.$route.query.id2;
          let bread1 = {title: 'list1', route: 'tables'},
              bread2 = {title: 'list2', route: 'list2', query: {id}},
              bread3 = {title: 'list3', route: 'list3', query: {id, id2}};
          if(newVal == 'list2') {
            this.breads = [bread1, bread2]
          } else if(newVal == 'list3') {
            this.breads = [bread1, bread2, bread3]
          }
        },
        immediate: true
      }
    },
    methods: {
      jump(data) {
        console.log(data)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>