<template>
  <div id="willbe">
    <div class="swiper">
      <p>近期受到期待</p>
      <div class="ullist">
        <div class="ulli" v-for="item in slist" :key="item.id">
          <dl>
            <dt>
              <img :src="item.img.replace(/w.h/,'85.115')" alt="">
            </dt>
            <dd>
              <h2>{{ item.nm }}</h2>
              <span>{{ item.comingTitle }}</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="bg"></div>
    <div class="movie_list">
      <div class="film-list-content">
        <div class="nowPlayingList-wrap">
          <van-list>
            <ul>
            <li class="item"
            v-for="item in mlist"
            :key="item.id">
            <!-- <router-link :to="'/film/' + item.filmId"> -->
              <div class="img">
                <img :src="item.img.replace(/w.h/,'64.90')" alt />
              </div>
              <div class="info">
                <div class="film-name info-col">
                  <span class="name">{{ item.nm }}</span>
                  <!-- <span class="item">{{ item.version }}</span> -->
                </div>
                <div class="film-grade info-col" style="visibility: visible;">
                  <span class="label">{{ item.wish }}</span>
                  <span class="grade">想看</span>
                </div>
                <div class="film-actors info-col">
                  <span class="label">主演：{{ item.star }}</span>
                </div>
                <div class="film-detail info-col">
                  <span class="label">{{ item.showInfo }}</span>
                </div>
              </div>
              <div class="buy">预售</div>
            <!-- </router-link> -->
          </li>
        </ul>
      </van-list>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slist: [],
      mlist: []
    }
  },
  methods: {
    requestSdata(){
      let api = '/maoyan/ajax/mostExpected?ci=30&limit=10&offset=0&token='
      this.$http.get(api).then(response => {
      console.log(response);
      this.slist = response.body.coming;
    }, response => {
        console.log(err)
      });
    },
    requestMdata(){
      let api = '/maoyan/ajax/comingList?ci=30&token=&limit=10'
      this.$http.get(api).then(response => {
      console.log(response);
      this.mlist = response.body.coming;
    }, response => {
        console.log(err)
      });
    }
  },
  created () {
    this.requestSdata();
    this.requestMdata();
  }
}
</script>


<style lang="less" scoped>
@import '../../css/mixins.less';
  #willbe{
    display: flex;
    flex: 1;
    flex-direction:column;
    overflow: auto;
    .swiper{
      width: 100%;
      height: 215px;
      padding: 10px;
      p{
        color: #000;
      }
      .ullist{
        margin-top: 10px;
        width: 100%;
        height: 100%;
        // display: flex;
        // flex-direction: row;
        // overflow: auto;
        overflow: scroll;
        white-space: nowrap;
        .ulli{
          width: 85px;
          height: 175px;
          margin-right: 15px;
          overflow: hidden;
          display: inline-block;
          dl{
            width: 85px;
            height: 100%;
            dt{
               width: 100%;
                height: 115px;
              img{
                width: 100%;
                height: 100%;
                display: block;
              }
            }
            dd{
              overflow: hidden;
              h2{
                margin-top: 8px;
                width: 100%;
                height: 20px;
                font-size: 14px;
                color: #000;
                text-overflow:ellipsis;
                overflow:hidden;
              }
              span{
                font-size: 12px;
              }
            }
          }
        }
      }
    }
    .bg{
      width: 100%;
      height: 12px;
      background: #F5F5F5;
    }
    .movie_list{
      height: 600px;
      width: 100%;
      .film-list-content {
      ul {
        margin-left: 15px;
        display: flex;
        flex-direction:column;
      li {
        // .border-1-bottom;
        padding: 15px 15px 15px 0;
        height: 94px;
        position: relative;
        box-sizing: content-box;
        display: flex;
      > a {
        display: flex;
        align-items: center;
      }

      .img {
        flex-shrink: 0;
        width: 66px;
        height: 94px;
        background: rgb(249, 249, 249);
        img {
          width: 100%;
          border-radius: 2px;
        }
      }

      .info {
        flex: 1;
        padding: 0 10px;
        overflow: hidden;

        .info-col {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }

        .film-name {
          .name {
            max-width: calc(100% - 25px);
            color: #191a1b;
            font-size: 16px;
            font-weight: 700;
            height: 22px;
            line-height: 22px;
            margin-right: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .item {
            font-size: 9px;
            color: #fff;
            background-color: #d2d6dc;
            height: 14px;
            line-height: 14px;
            padding: 0 2px;
            border-radius: 2px;
          }
        }

        .film-grade {
          .label {
            font-size: 14px;
            font-weight: 600;
            margin-top: 4px;
            color: #ffb232;
          }
          .grade {
            color: #797d82;
            font-size: 12px;
          }
        }

        .film-actors {
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
        }

        .film-detail {
          .label {
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
        }
      }

      .buy {
        // .border-1;
        flex-shrink: 0;
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #fff;
        background: #3C9FE6;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: relative;
        margin-top: 30px;
      }
    }
  }
}

    }

  }
</style>

