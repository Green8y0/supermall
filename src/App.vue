<template>
  <div id="nav">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
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
