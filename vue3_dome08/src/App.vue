<!--
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-04 19:28:14
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-05 20:59:47
 * @FilePath: \vue3_dome08\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
// 批量导入
import modules from '@/hooks'
let a = modules.a
// pinia使用======================================pinia使用
// import { storeToRefs } from "pinia";
import storeMo from "./stores";
const { useUser, usePermission, } = storeMo
const user = useUser()

const counter1 = usePermission()
counter1.test++
// pinia使用==========================================pinia使用end
const add = () => {
  a.value++
  // console.log(a)
}
// window.requestAnimationFrame
</script>

<template>
  <RouterView />
  <div class="app">
    {{ counter1.test }}
    {{ a }}
    <button @click="add">++</button>
  </div>
</template>

<style scoped>
.app {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>