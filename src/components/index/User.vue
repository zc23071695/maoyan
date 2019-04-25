<template>
  <div id="my">
    <div class="me">我的</div>
    <div class="my"><img src="@/assets/banner.png" alt="" /></div>
    <div class="my"><img src="@/assets/main.png" alt="" /></div>
  </div>
</template>
<style lang="scss" scoped>
#my {
  .my {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .me {
    width: 100%;
    height: 50px;
    background: #e54847;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
}
</style>

<script>
export default {
  name: 'user'
}
</script>
