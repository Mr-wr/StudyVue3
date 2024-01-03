<script setup lang="ts">
import TestResize from './components/TestResize.vue';
const app = getCurrentInstance();
// import Lazy from './components/Lazy.vue';
// import ZhiDingYiMingLin from './components/ZhiDingYiMingLin.vue';
// import SwitchComponent from './components/SwitchComponent.vue';
onMounted(() => {
  app?.proxy?.$loading.show()
  setTimeout(() => {
    app?.proxy?.$loading.hide()
  }, 2000);
})
</script>

<template>
  <TestResize></TestResize>
  <!-- <Lazy></Lazy> -->
  <!-- <SwitchComponent></SwitchComponent> -->
  <!-- <ZhiDingYiMingLin></ZhiDingYiMingLin> -->
</template>
<style lang="scss" scoped>
.active {
  color: red;
}
</style>