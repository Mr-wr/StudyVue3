<script setup lang="ts">
import { useCounterStore } from "./stores/counter"
let aa = ref("app")
let counter = useCounterStore()
counter.count++
let app = getCurrentInstance()
</script>

<template>
  <div class="app">
    {{ aa }}
    {{ counter.count }}
  </div>
</template>

<style scoped>
.app {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
