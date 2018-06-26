<template>
  <div class="card-box">
    <div class="card" v-for="item in route">
      <router-link :to="{path: 'info', query:{id: item._id, userID: userID, userPhoto: userPhoto, price: item.price}}">
        <div class="card-img">
          <div class="title">{{item.title}}</div>
          <div v-for="img in item.cover">
            <img :src="img.url"> 　　 
          </div>
        </div>
        <div class="card-info">
          <div class="footprint">
            <img v-for="(item, index) in item.reserve_docs" v-if="index < 3" :src="item.userPhoto">
            <span v-if="item.reserve_docs.length > 0">{{item.reserve_docs.length}}位小伙伴刚刚预定过</span>
            <span v-else>热门线路火热预约中...</span>
          </div>
          <i class="price">￥{{item.price}}</i>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        route: null,
        code: null,
        userID: null,
        userList: null,
        number: null,
        userPhoto: null
      };
    },
    created() {      
      if (!this.getQueryString('code')) {
        window.location.replace(this.api.getOauth)
      } else {
        this.code = this.getQueryString('code')
        this.axios.post(this.api.getToken, {
          code: this.code
        }).then(res => {
          this.setCookie('code', this.getQueryString('code'))
          this.setCookie('openID', res.data.openid)
          this.userID = res.data.openid
          this.userPhoto = res.data.headimgurl
        })
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      setCookie: function (c_name, value, expiredays) {
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie = c_name + "=" + escape(value) +
          ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
      },
      getCookie: function (c_name) {
        if (document.cookie.length > 0) {
          let c_start = document.cookie.indexOf(c_name + "=")
          if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            let c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
          }
        }
        return ""
      },
      init: function () {
        this.axios.get(this.api.getPath).then(res => {
          this.route = res.data
        })
      },
      getQueryString(name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        let r = window.location.search.substr(1).match(reg)
        if (r != null) {
          return unescape(r[2])
        } else {
          return null
        }
      }
    }
  };
</script>
<style scoped>
  .card-box {
    padding: 15px;
  }

  .card-box .card {
    height: 180px;
    margin-top: 30px;
  }

  .card-box .card:first-child {
    margin-top: 15px;
  }

  .card-box .card img {
    width: 100%;
    height: 150px;
    border-radius: 5px;
    margin-top: -25px;
  }

  .card-img {
    position: relative;
  }

  .card-img .title {
    position: absolute;
    color: #fff;
    font-size: 14px;
    padding: 0 65px;
    text-align: center;
    line-height: 20px;
    margin-top: 30px;
    width: 100%;
  }

  .card-info {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }

  .card-info .footprint {
    padding-left: 10px;
  }

  .card-info .footprint img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-left: -10px;
    border: 1px solid #fff;
  }

  .card-info .footprint span {
    color: #979797;
    font-size: 12px;
    vertical-align: text-top;
  }

  .card-info .price {
    color: #02c3e2;
    font-size: 16px;
  }
</style>