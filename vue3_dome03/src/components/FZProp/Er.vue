<template>
    <div class='er'>
        <div>我是儿子</div>
        这是父亲传过来的:
        <div class="fater_data">{{ test }}</div>
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'Er',
}
</script>
<script  setup lang='ts'>
import { onMounted } from 'vue';
onMounted(() => {
    fprop.getToy("我是儿子传给父亲的数据")
})
let fprop = defineProps(['test', 'getToy'])
let femits = defineEmits(['send-toy'])
femits('send-toy', '我是儿子传给父亲的数据defineEmits')
</script>
<style lang='scss' scoped>
.er {
    height: 80%;
    width: 80%;
    margin: 0 auto;
    background-color: rgba($color: #0438f4, $alpha: 0.7);

    .fater_data {
        color: red;
    }
}
</style>