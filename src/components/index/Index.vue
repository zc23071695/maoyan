<template>
  <div id="index">
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#E54847">
      <van-tabbar-item icon="home-o" :to="{ name: 'movie' }">电影</van-tabbar-item>
      <van-tabbar-item icon="video-o" :to="{ name: 'cinema' }">影院</van-tabbar-item>
      <van-tabbar-item icon="friends-o" :to="{ name: 'user' }">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    let active = this.$route.meta.tabNumver
    return {
      active: active
    }
  }
}
</script>

