<template>
  <div id="cinema">
    <h2 class="banner">影院</h2>
    <div class="gray-bg">
      <div class="city-entry">
        <span>深圳</span>
      </div>
      <div class="search-entry">
        <span><a href="">搜影院</a></span>
      </div>
    </div>
    <div class="nav-warp">
      <div class="item">全城</div>
      <div class="one">｜</div>
      <div class="item">品牌</div>
      <div class="one">｜</div>
      <div class="item">特色</div>
    </div>
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
      // var gray=document.querySelector('.gray-bg');
      // var nav=document.querySelector('.nav-warp');
      // var banner=document.querySelector('.banner');
      // window.onscroll=function(){
      //   var sTop=document.documentElement.scrollTop || document.body.scrollTop;
      //   if(sTop>1){
      //     banner.style.position="fixed";
      //     banner.style.top = 0;
      //     gray.style.position="fixed";
      //     gray.style.top =51+'px';
      //     nav.style.position="fixed";
      //     nav.style.top = 95+'px';
      //   }
      //   else{
      //     banner.style.position="static";
      //     gray.style.position="static";
      //     nav.style.position="static";
      //   }
      // }
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
      width: 100%;
      background: #e54847;
      border-bottom: 1px solid #e54847;
      display: block;
      height: 51px;
      color: #fff;
      z-index: 10;
      position: fixed;
      top: 0;
    }
    a{
      text-align: none;
      color: #b2b2b2;
    }
    .gray-bg{
      border-bottom: 1px solid #e6e6e6;
      background: #f5f5f5;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: 44px;
      -webkit-box-pack: justify;
      justify-content: space-between;
      z-index: 10;
      width:100%;
      position: fixed;
      top: 51px;
    }
    .city-entry{
      padding-left: 15px;
      font-size: 15px;
      color: #666;
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
    }
    .search-entry{
      -webkit-box-flex: 1;
      flex-grow: 1;
      display: -webkit-box;
      background-color: #fff;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      height: 28px;
      font-size: 13px;
      color: #b2b2b2;
      margin-left: 18px;
      border: .5px solid #e6e6e6;
      border-radius: 5px;
      margin-right: 15px;
    }
    .nav-warp{
      display: -webkit-box;
      display: flex;
      width: 100%;
      height: 40px;
      z-index: 10;
      background-color: #fff;
      position: fixed;
      top: 95px;
    }
    .item{
      -webkit-box-flex: 1;
      flex: 1;
      text-align: center;
      line-height: 40px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      font-size: 13px;
      text-overflow: ellipsis;
      border-bottom: 1px solid #e6e6e6;
    }
    .one{
      margin-top: 10px;
      border-bottom: 1px solid #e6e6e6;
      color:#e8e8e8;
    }
  }
</style>
