<template>
  <div id="movie">
    <!-- <div class="nian"> -->
      <div class="nian">
         <h2>猫眼电影</h2>
      </div>

        <van-tabs class="tabbar" title-active-color="#E54847" >
          <van-tab title="正在热映">
            <NowHot />
          </van-tab>
          <van-tab title="即将上映">
            <WillBe />
          </van-tab>
        </van-tabs>
    <!-- </div> -->
  </div>
</template>

<script>
import NowHot from './NowHot.vue'
import WillBe from './WillBe.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    NowHot,
    WillBe
  },
  methods: {
    onScroll () {
      let top = document.documentElement.scrollTop;
      if (top >= 52) {

      }else {

      }
      console.log(document.documentElement.scrollTop)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  }
}
</script>


<style lang="scss" scoped>
  #movie{
    overflow: auto;
      .nian{
        width: 100%;
        height: 51px;
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
          width: 100%;
          position: fixed;
          top: 0;
          z-index: 999;
        }
        a{
          display: block;

        }
      }

  }
</style>
