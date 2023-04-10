<template>
  <div id="app">
    <div style="height: 50px;line-height: 50px;text-align: center;">
      <router-link :to="{name: 'About'}" style="margin-right: 20px;">首页</router-link>
      <router-link :to="{name: 'Home'}">第二页</router-link>
      <router-link :to="{name: 'wedding'}">第三页</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
