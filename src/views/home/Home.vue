<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        banner: [],
        recommend: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    }
  }
</script>

<style lang="css" scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>