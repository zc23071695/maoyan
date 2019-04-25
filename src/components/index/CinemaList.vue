<template>
  <div class="box-three">
      <ul>
          <li v-for="item in list" :key="item.id">
              <div class="title-block">
                  <div class="line-ellipsis">
                    <span>{{ item.nm }}</span>
                  <span class="price-block">
                    <span class="price">{{ item.sellPrice }}</span>
                    <span class="p">元起</span>
                  </span>
                  </div>
              </div>
              <div class="location-block">
                  <div class="line">{{ item.addr }}</div>
                  <div class="distance">{{ item.distance }}</div>
                  </div>
              <div class="label">
                    <span class="refound">退</span>
                    <span class="rechose">改签</span>
                    <span class="snack">小吃</span>
                    <span class="snack">折扣卡</span>
              </div>
              <div class="discount">
                  <div class="normal">卡</div>
                  <div class="discountCard">开卡特惠，首单2张立减4元</div>
              </div>
          </li>
      </ul>
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
      let api = '/maoyan/ajax/cinemaList?day='
      this.$http.get(api).then(response => {
      console.log(response);
      this.list = response.body.cinemas;
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

<style lang="less">
@import '../../css/mixins.less';

.box-three{
    box-sizing: border-box;
    margin-top:135px;
}
ul{
    margin-left: 15px;
    display: flex;
    flex-direction:column;
    li{
        padding: 13px 15px 13px 0;
        margin-left: 15px;
        background-color: #fff;
        position: relative;
        overflow: hidden;

        .title-block{
            display: block;
            -webkit-box-align: center;
            align-items: center;
            line-height: 1.5;
        }
        .line-ellipsis{
            width: 100%;
            height: 23px;
            line-height: 23px;
            font-size: 16px;
            color: #000;
        }

        .price-block{
            padding-top: 9px;
            padding-left: 3px;
        }
        .price{
            padding-left: 3px;
            font-size: 18px;
            color: #f03d37;
        }

        .p{
            color: #f03d37;
            margin-left: 3px;
            font-size: 11px;
        }

        .location-block{
            display: -webkit-box;
            display: flex;
            width: 100%;
            margin-top: 6px;
            font-size: 13px;
            color: #666;
        }

        .line{
            -webkit-box-flex: 1;
            flex: 1;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        
        .distanse{
            margin-left: 5px;
        }
        
        .label{
            width: 100%;
            height: 20px;
            line-height: 17px;
            margin-top: 4px;
            margin-bottom: 4px;
            overflow: hidden;
            flex-shrink: 0;
        }
        .refound{
            color: #589daf;
            border: 1px solid #589daf;
            position: relative;
            display: inline-block;
            padding: 0 3px;
            height: 18px;
            line-height: 15px;
            border-radius: 2px;
            font-size: .6rem;
        }

        .rechose{
            margin-left: 5px;
            color: #589daf;
            border: 1px solid #589daf;
            position: relative;
            display: inline-block;
            padding: 0 3px;
            height: 18px;
            line-height: 15px;
            border-radius: 2px;
            font-size: .6rem;
        }

        .snack{
            margin-left: 5px;
            color: #f90;
            border: 1px solid #f90;
            position: relative;
            display: inline-block;
            padding: 0 3px;
            height: 18px;
            line-height: 15px;
            border-radius: 2px;
            font-size: .6rem;
        }

        .discount{
            width: 100%;
            color: #999;
            margin-bottom: 4px;
            line-height: 1.5;
        }

        .normal{
            display: -webkit-inline-box;
            display: inline-flex;
            width: 15px;
            height: 14px;
            font-size: 1px;
            line-height: 13px;
            color: white;
            position: relative;
            background: rgb(44, 79, 236);
            border: 1px solid rgb(44, 79, 236);
        }

        .discountCard{
            margin-left: 0;
            margin-left: 3px;
            display: inline-block;
        }
    }
}
</style>

