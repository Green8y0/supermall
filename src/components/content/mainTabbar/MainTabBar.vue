<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item activeColor="#fc587e" path="/home">
        <!-- icon-item的插槽 -->
        <template v-slot:icon-item>
          <img src="~assets/img/tabbar/home.png" alt=""/>
        </template>

        <!-- icon-item-active的插槽 -->
        <template v-slot:icon-item-active>
          <img src="~assets/img/tabbar/home_active.png" alt="">
        </template>

        <!-- icon-text的插槽 -->
        <template v-slot:icon-text>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item activeColor="#fc587e" path="/category">
        <template v-slot:icon-item>
          <img src="~assets/img/tabbar/category.png" alt=""/>
        </template>

        <template v-slot:icon-item-active>
          <img src="~assets/img/tabbar/category_active.png" alt="">
        </template>

        <template v-slot:icon-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item activeColor="#fc587e" path="/shoppingcart">
        <template v-slot:icon-item>
          <img src="~assets/img/tabbar/shoppingcart.png" alt=""/>
        </template>

        <template v-slot:icon-item-active>
          <img src="~assets/img/tabbar/shoppingcart_active.png" alt="">
        </template>

        <template v-slot:icon-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item activeColor="#fc587e" path="/me">
        <template v-slot:icon-item>
          <img src="~assets/img/tabbar/me.png" alt=""/>
        </template>

        <template v-slot:icon-item-active>
          <img src="~assets/img/tabbar/me_active.png" alt="">
        </template>

        <template v-slot:icon-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar"
  import TabBarItem from "components/common/tabbar/TabBarItem"

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style lang='scss' scoped>
</style>