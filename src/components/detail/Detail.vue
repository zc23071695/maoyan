<template>
  <div id="detail">
    <h2><span>&lt;</span>复仇者联盟4:终局之战</h2>
    <div class="detail">
      <div class="left">
        <img src="" alt="">
      </div>
      <div class="right">
        <h3>复仇者联盟4:终局之战</h3>
        <p>Avengers: Endgame</p>
        <h4><span>9.3</span>(26.8万人评)</h4>
        <h5>动作,冒险,奇幻</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    requestData(){
      let api = `/maoyan/ajax/detailmovie?movieId=${this.$router.params.id}`;
      this.$http.get(api).then(response => {
      console.log(response);
      // this.list = response.body.movieList;
    }, response => {
        console.log(err)
      });
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
      background: #ccc;
      padding: 15px 20px 15px 15px;
      .left{
        width: 110px;
        height: 150px;
        background: #000;
        margin-right: 10px;
        float: left;
      }
      .right{
        float: left;
        width: 210px;
        height: 150px;
        background: #652525;
      }
    }
  }
</style>
