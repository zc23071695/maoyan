<template>
    <div>
           <div id="myMovie">
               <h2 class="banner"><span @click="goBack()">&lt;</span>猫眼电影</h2>
               <div class="search-box">
                   <div class="inp">
                       <input class="search-input" type="text" placeholder="搜影院">
                   </div>
                   <div class="miss">取消</div>
               </div>
           </div>
    </div>
</template>

<script>
export default {
    methods:{
      goBack () {
        this.$router.go(-1);
    }
    }
}
</script>


<style lang="less">
@import "../../css/mixins.less";
#myMovie {
  .banner {
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
    position: relative;
    span{
        position: absolute;
        left: 15px;
        font-size: 25px;
    }
  }
  .search-box{
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 8px 0 8px 10px;
        background-color: #f5f5f5;
        border-bottom: 1px solid #e5e5e5;
        z-index: 1;
  }
  .inp{
        padding: 0 10px;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        background-color: #fff;
        -webkit-box-flex: 1;
        flex-grow: 1;
  }
  .search-input{
        -webkit-box-flex: 1;
        flex: 1;
        border: none;
        font-size: 13px;
        color: #333;
        line-height: 20px;
        padding: 4px 0;
        width: calc(100% - 40px);
  }
  .miss{
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        font-size: 16px;
        color: #f03d37;
  }
}
</style>



