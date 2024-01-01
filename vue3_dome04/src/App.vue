<script setup lang="ts">
import layout from "./layout/index.vue";
import moment from 'moment'
import cryptojs from 'crypto-js'
import axios from "axios";
function md5(address: any) {
  const datetime = moment().format('YYYYMMDD')
  const sign = cryptojs
    .MD5(address + '.' + datetime)
    .toString()
    .substring(0, 10) // md5加密，取前10位
  return sign
}
// console.log(md5('0x0d1d4e623d10f9fba5db95830f7d3839406c6af2'))
// let { data } = await axios.post('/api/User/login', {
//   address: '0x0d1d4e623d10f9fba5db95830f7d3839406c6af2',
//   sign: md5('0x0d1d4e623d10f9fba5db95830f7d3839406c6af2'),
//   code: ''
// })
axios({
  method: 'post',
  url: 'api/User/loging',
  headers: {
    // 'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: {
    address: '0x0d1d4e623d10f9fba5db95830f7d3839406c6af2',
    sign: md5('0x0d1d4e623d10f9fba5db95830f7d3839406c6af2'),
    code: ''
  }
}).then(resp => {
  console.log(resp)
}).catch(err => {
  console.log(err.response.data)
})
// console.log("🚀 ~ file: App.vue:19 ~ data:", data)

// let { data: { content: title } } = await axios.get('http://api-ranch.nnmm666.com/h5')
</script>

<template>
  <layout></layout>
</template>

<style lang="scss" scoped></style>
