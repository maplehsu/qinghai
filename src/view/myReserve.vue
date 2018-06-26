<template>
  <div class="list-box">
    <div v-for="item in list" class="list">
      <img :src="item.routeImg" alt="">
      <ul>
        <li>日期：{{item.startTime}} ~ {{item.endTime}}</li>
        <li>{{item.title}}</li>
      </ul>
      <div class="p">￥{{item.price}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        list: null
      };
    },
    mounted() {
      this.init(this.getCookie('openID'))
    },
    methods: {
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
      init: function (id) {
        this.axios.post(this.api.getUserReserve, {userID: id}).then(res => {
          this.list = res.data
        })
      }
    }
  };
</script>
<style scoped>
html {
  background: #f8f8f8;
}

.list-box {
  padding: 20px;
  font-size: 14px;
  text-align: left;
}

.list {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #eeeff0;
  display: flex;
}

.list img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;
}

.list ul {
  width: 70%;
}

.list ul li:first-child {
  color: #afb0b5;
  font-size: 14px;
  margin-bottom: 10px;
}

.list ul li:last-child {
  font-size: 15px;
  overflow : hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
}

.list .p {
  color: #02c3e2;
  line-height: 40px;
}
</style>