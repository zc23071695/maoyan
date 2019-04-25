<template>
  <div class="film-list-content">
    <div class="nowPlayingList-wrap">
      <van-list
        finished-text="没有更多了">
        <ul>
          <li class="item"
            v-for="item in list"
            :key="item.id">
            <router-link :to="'/movie/' + item.id">
              <div class="img">
                <img :src="item.img.replace(/w.h/,'64.90')" alt />
              </div>
              <div class="info">
                <div class="film-name info-col">
                  <span class="name">{{ item.nm }}</span>
                  <!-- <span class="item">{{ item.version }}</span> -->
                </div>
                <div class="film-grade info-col" style="visibility: visible;">
                  <span class="label">观众评分</span>
                  <span class="grade">{{ item.sc }}</span>
                </div>
                <div class="film-actors info-col">
                  <span class="label">主演：{{ item.star }}</span>
                </div>
                <div class="film-detail info-col">
                  <span class="label">{{ item.showInfo }}</span>
                </div>
              </div>
              <div class="buy">购票</div>
            </router-link>
          </li>
        </ul>
      </van-list>
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
      let api = '/maoyan/ajax/movieOnInfoList?token='
      this.$http.get(api).then(response => {
      console.log(response);
      this.list = response.body.movieList;
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

.film-list-content {

  ul {
    margin-left: 15px;
    display: flex;
    flex-direction:column;
    li {
      .border-1-bottom;
      padding: 15px 15px 15px 0;
      height: 94px;
      position: relative;
      box-sizing: content-box;
      display: flex;
      > a {
        display: flex;
        align-items: center;
        width: 100%;
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
            font-size: 13px;
            margin-top: 4px;
            color: #797d82;
          }
          .grade {
            color: #ffb232;
            font-size: 14px;
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
        .border-1;
        flex-shrink: 0;
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #fff;
        background: #F03D37;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: relative;
        margin-top: 30px;
      }
    }
  }
}
</style>
