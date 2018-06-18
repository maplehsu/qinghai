<template>
  <div class="card-box">
      <div class="card" v-for="item in route">
        <router-link :to="{name: 'info', params:{id: item._id}}">
          <div class="card-img">
            <div class="title">{{item.title}}</div>
          　<div v-for="img in item.cover">
        　　　　<img :src="img.url">
        　　 </div>
          </div>
          <div class="card-info">
            <div class="footprint">
              <img src="../assets/images/user-photo.jpg">
              <img src="../assets/images/user-photo.jpg">
              <img src="../assets/images/user-photo.jpg">
              <span>67位小伙伴刚刚预定过</span>
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
        url: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect'
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init: function () {
        // this.axios.get(this.api.getPath).then( res => {
        //   this.route = res.data          
        // }) 
        this.axios.get(this.url).then (res => {
          console.log(res)
        })
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