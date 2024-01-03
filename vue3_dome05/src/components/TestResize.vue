<template>
    <div v-resize="tst" class='resize'>
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: '',
}
</script>
<script  setup lang='ts'>
const tst = (e: any) => {
    console.log(e)
}
</script>
<style lang='scss' scoped>
.resize {

    width: 100px;
    height: 100px;
    resize: both;
    overflow: auto;
    border: 1px solid #000;
}
</style>