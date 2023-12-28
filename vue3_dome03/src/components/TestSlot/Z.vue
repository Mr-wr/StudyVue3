<template>
    <div class='Z'>
        <slot name="one" :zdata="data">我是默认的内容</slot>
        <button @click="set">修改默认内容</button>
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'Z',
}
</script>
<script  setup lang='ts'>
import { ref } from 'vue'
let data = ref('我是子组件的数据')
function set() {
    data.value += '~'
}
</script>
<style lang='scss' scoped></style>