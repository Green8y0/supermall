<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="icon-item"></slot></div>
    <div v-else><slot name="icon-item-active"></slot></div>
    <div :style="activeStyle"><slot name="icon-text" ></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#fc587e'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        // console.log(this.path);
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style lang="scss">
  .tab-bar-item{
    height: 49px;
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

  .active{
    color: #fc587e;
  }
</style>>
