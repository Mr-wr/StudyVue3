<template>
    <div class='z'>
        我是儿子
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
let zname = ref('zhangsan')

defineExpose({
    zname,
})

</script>
<style lang='scss' scoped>
.z {
    background-color: rgba($color: blue, $alpha: 0.7);
}
</style>