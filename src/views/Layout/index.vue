<template>
  <div>
    <router-view></router-view>

    <van-tabbar router v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="search" dot>找房</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="information" badge="5"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item icon="manager-o" to="my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
