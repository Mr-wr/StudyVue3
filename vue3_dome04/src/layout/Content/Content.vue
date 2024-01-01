<template>
    <div class='xie-content'>
        <div v-for="item in 100" :key="item" class="xie-content__item">{{ item }}</div>
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'Content',
}
</script>
<script  setup lang='ts'>
</script>
<style lang='scss' scoped>
.xie-content {
    height: 100vh;
    overflow: auto;
    // @include text-center(flex);
    border: 1px solid red;

    .xie-content__item {
        border: 1px solid #000;
    }
}
</style>