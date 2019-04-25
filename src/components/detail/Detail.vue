<template>
  <div id="detail">
    <h2><span @click="goBack()">&lt;</span>{{ list.nm }}</h2>
    <div class="detail">
      <div class="left">
        <img :src="list.img.replace(/w.h/,'110.150')" alt="">
      </div>
      <div class="right">
        <h3>{{ list.nm }}</h3>
        <p>{{ list.enm }}</p>
        <h4><span>{{ list.sc }}</span>(26.8万人评)</h4>
        <h5>{{ list.cat }}</h5>
        <h6>{{ list.src }}/181分钟</h6>
        <h1>{{ list.pubDesc }}</h1>
      </div>
      </div>
        <van-tabs class="tabbar" title-active-color="#E54847" >
          <van-tab title="今天04月25日">
            <CinemaList/>
          </van-tab>
          <van-tab title="明天04月26日">
            <CinemaList/>
          </van-tab>
          <van-tab title="后天04月27日">
            <CinemaList/>
          </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import CinemaList from '../index/CinemaList.vue'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    CinemaList
  },
  methods: {
    requestData(){
      let id = this.$route.params.id
      let api = '/maoyan/ajax/detailmovie?movieId=' + id;
      this.$http.get(api).then(response => {
      console.log(response);
      this.list = response.body.detailMovie;
    }, response => {
        console.log(err)
      });
    },
    goBack () {
      this.$router.go(-1);
    }
  },
  created () {
    this.requestData();
  }
}
</script>


<style lang="scss" scoped>
  #detail{
    h2{
      font-size: 18px;
      line-height: 50px;
      font-weight: 400;
      text-align: center;
      background: #e54847;
      display: block;
      height: 50px;
      color: #fff;
      width: 100%;
      position: relative;
      span{
        position: absolute;
        left: 15px;
        font-size: 35px;
      }
    }
    .detail{
      height: 190px;
      width: 100%;
     background:#1A1F40;
      padding: 15px 20px 15px 15px;
      .left{
        width: 110px;
        height: 150px;
        margin-right: 10px;
        float: left;
      }
      .right{
        float: left;
        width: 210px;
        height: 150px;
        // background: #652525;
        h3{
          color: #fff;
          font-weight: 600;
          font-size: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p{
          font-size: 12px;
          line-height: 25px;
        }
        h4{
          font-size: 12px;
          span{
            color: #fc0;
            font-size: 18px;
            font-weight: 700;
          }
        }
        h5{
          font-size: 12px;
          line-height: 25px;
        }
        h6{
          font-size: 12px;
          line-height: 25px;
        }
        h1{
          font-size: 12px;
        }
      }
    }
  }
</style>
