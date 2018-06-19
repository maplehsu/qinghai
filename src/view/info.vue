<template>
  <div class="info">
    <div class="banner"  v-for="item in info">
      <div v-for="img in item.cover">
        <img :src="img.url">
      </div>
      <div class="TuT"></div>
      <i class="title">{{item.title}}</i>
    </div>
    <div class="content" v-for="item in info">
      <div class="card">
        <div class="t"><i class="play"></i>商家将在2个工作小时内核实是否有位。</div>
        <div class="c">{{item.notice}}</div>
      </div>
      <div class="card mt-15" v-html="item.content">
      </div>
    </div>
    <router-link :to="{path: 'reserve', query:{id: id, userID: userID, title: title, userPhoto: userPhoto}}"> <i class="GO">预定</i></router-link>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        info: null,
        id: null,
        userID: null,
        title: null,
        userPhoto: null
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init: function () {
        this.id = this.$route.query.id
        this.userID = this.$route.query.userID
        this.userPhoto = this.$route.query.userPhoto
        this.axios.post(this.api.getInfo, {
          _id: this.$route.query.id
        }).then( res => {
          this.info = res.data
          this.title = res.data[0].title
        }) 
      }
    }
  };
</script>
<style scoped>
  .info {
    padding: 1px;
  }
  .banner {
    overflow: hidden;
    position: relative;
  }
  .banner img {
    width: 100%;
    height: 205px;
  }
  .TuT {
    height: 0;
    border-bottom: 130px solid #fff;
    border-left: 0px solid transparent;
    border-right: 420px solid transparent;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .title {
    position: absolute;
    left: 15px;
    bottom: 10px;
    width: 150px;
    font-size: 20px;
    line-height: 28px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 50px;
  }
  .content {
    padding: 15px;
  }
  .content .card {
    padding: 15px;
  }
  .content .t {
    font-size: 14px;
    color: #a0a0a0;
    padding-bottom: 7px;
    border-bottom: 1px solid #f5f5f5;
  }
  .content .c {
    margin-top: 10px;
    line-height: 26px;
  }
  .content .play {
    width: 20px;
    height: 16px;
    display: inline-block;
    background: url(../assets/images/play.png) no-repeat;
    background-size: 100%;
    vertical-align: text-top;
    margin-right: 10px;
  }
  .content .card p {
    margin-bottom: 15px;
    line-height: 24px;
  }
  .content .card p:last-child {
    margin-bottom: 0;
  }
  .content .card img {
    width: 100%;
    margin-bottom: 10px;
  }
  .GO {
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-radius: 50%;
    background: #02c3e2;
    color: #fff;
    box-shadow: 5px 0 20px rgba(2, 195, 226, .5);
    position: fixed;
    bottom: 30px;
    right: 10px;
    font-size: 14px;
  }
</style>