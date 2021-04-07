<template>
  <div>
    <swiper class="home-swiper">
      <swiper-item v-for="item in banners" :key="item">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: 'HomeSwiper',
    props: {
      banners: Array,
      dafault() {
        return []
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style lang='scss' scoped>
  .home-swiper img{
    height: 20%;
    width: 100%;
  }
</style>