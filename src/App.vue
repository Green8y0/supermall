<template>
  <div id="nav">
    <span>helloworld</span>
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
  <!-- <router-view/> -->
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
  
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>
        MainTabBar

<style lang="scss">
  @import "assets/css/base.css";
</style>
