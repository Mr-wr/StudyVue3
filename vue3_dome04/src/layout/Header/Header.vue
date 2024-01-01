<template>
    <div class='xie-header'>
        header
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'Header',
}
</script>
<script  setup lang='ts'>
</script>
<style lang='scss' scoped>
.xie-header {
    @include text-center(flex);
    border: 1px solid red;
    height: 20%;
}
</style>