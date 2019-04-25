<template>
  <div id="cinema">
    <h2>影院</h2>
    <CinemaList/>
  </div>
</template>

<script>
import CinemaList from './CinemaList.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    CinemaList
  },
  methods: {
    onScroll () {
      let top = document.documentElement.scrollTop;
      // if (top >= 52) {

      // }else {

      // }
      // console.log(document.documentElement.scrollTop)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss" scoped>
  #cinema{
    h2{
      font-size: 18px;
      line-height: 50px;
      font-weight: 400;
      text-align: center;
      background: #e54847;
      border-bottom: 1px solid #e54847;
      display: block;
      height: 51px;
      color: #fff;
    }
  }
</style>
