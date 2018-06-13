<template>
  <div class="info">
    <div class="banner">
      <img src="../assets/images/banner.jpg">
      <div class="TuT"></div>
      <i class="title">青海湖 拉萨布达拉宫9日7晚</i>
    </div>
    <div class="content">
      <div class="card">
        <div class="t"><i class="play"></i>商家将在2个工作小时内核实是否有位。</div>
        <div class="c">本产品同样适用于公司单位独立成团，如您的出行人数大于9人，又或者您有特殊的订制需求，那么请将您的详细需求发送到指定邮箱：xxxxxxxxxxx@xxx.com，稍后将有专业的产品旅游规划师亲自为您处理，感谢选择与信赖！</div>
      </div>
      <div class="card mt-15">
        <p>1.【黄河风情线】是中国有名的城市滨河绿色长廊，融山水、人文胜迹于一体；</p>
        <p>2.【黄河母亲像】全国诸多表现中华民族母亲河的黄河雕塑艺术品之一，曾在全国首届城市雕塑方案中获奖；</p>
        <img src="../assets/images/banner.jpg">
        <p>2.【黄河母亲像】全国诸多表现中华民族母亲河的黄河雕塑艺术品之一，曾在全国首届城市雕塑方案中获奖；</p>
      </div>
    </div>
    <router-link :to="{path: 'reseve'}"> <i class="GO">预定</i></router-link>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {};
    },
    mounted() {
      this.init();
    },
    methods: {
      init: function () {}
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