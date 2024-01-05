<!--
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-04 19:28:14
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-05 12:05:11
 * @FilePath: \vue3_dome08\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
// 批量导入
import modules from '@/hooks'
let { a, } = modules
// pinia使用======================================pinia使用
// import { storeToRefs } from "pinia";
import useStore from "./stores";
const { useCounterStore, useCounterStore1 } = useStore
const counter = useCounterStore()
const counter1 = useCounterStore1()
counter1.test1++
// pinia使用==========================================pinia使用end
const add = () => {
  a.value++
  console.log(a)
}
// window.requestAnimationFrame
</script>

<template>
  <div class="app">
    <button @click="add">++</button>
    counter1.test1 = {{ counter1.test1 }}
    <!-- counter1.doubleCount {{ counter1.doubleCount }} -->
    <br>/
    counter.doubleCount {{ counter.doubleCount }}
    <br>
    a {{ a }}
    <br>
    <!-- counter.count {{ counter.count }} -->
  </div>
</template>

<style scoped>
.app {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
./stores/modules/counter