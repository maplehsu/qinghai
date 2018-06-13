<template>
  <div>
    <group label-width="4.5em" label-margin-right="2em" label-align="left">
      <x-input title="姓名" v-model="name" is-type="china-name" placeholder="必填"></x-input>
      <x-input title="手机号" v-model="phone" is-type="china-mobile" mask="999 9999 9999" placeholder="必填"></x-input>
      <x-number title="几人团" v-model="number" align="right" button-style="round" :min="1" :max="5"></x-number>
      <datetime title="出发时间" v-model="today" value-text-align="right"></datetime>
      <datetime title="到达时间" v-model="endTime" value-text-align="right"></datetime>
      <x-textarea title="备注" v-model="remark" placeholder="有什么要求可以告诉我们" :show-counter="false" :rows="3"></x-textarea>
      <x-button type="primary" @click.native="showHint">预约</x-button>
    </group>
    <div>
      <x-dialog v-model="hint" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
        <div style="color:#fff;text-align:center;" @click="hint = false">
          <span style="font-size:30px;">您已预约成功</span>
          <br>
          <br>
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import {
    GroupTitle,
    Group,
    Cell,
    XInput,
    XDialog,
    Selector,
    PopupPicker,
    Datetime,
    XNumber,
    ChinaAddressData,
    XAddress,
    XTextarea,
    XSwitch,
    XButton
  } from 'vux'

  export default {
    components: {
      Group,
      GroupTitle,
      Cell,
      XDialog,
      XInput,
      Selector,
      PopupPicker,
      XAddress,
      Datetime,
      XNumber,
      XTextarea,
      XButton,
      XSwitch
    },
    data() {
      return {
        name: '',
        number: 1,
        phone: '',
        today: '',
        endTime: null,
        remark: null,
        hint: false
      }
    },
    created() {
      this.init()
    },
    mounted() {

    },
    methods: {
      init: function () {
        let date = new Date()
        this.today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        this.endTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() + 6)
      },
      showHint: function () {
        this.hint = true
      }
    }
  }
</script>