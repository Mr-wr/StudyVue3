<template>
    <div class='F'>
        我是父亲的
        <button @click="get($refs)">获取儿子</button>
        <Z ref="z" />
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'F',
}
</script>
<script  setup lang='ts'>
import Z from './Z.vue'
// import { ref } from 'vue'
function get(zs: any) {
    for (const key in zs) {
        console.log(zs[key].zname)
    }
}
</script>
<style lang='scss' scoped>
.F {
    background-color: rgba($color: #888, $alpha: 0.7);
}
</style>