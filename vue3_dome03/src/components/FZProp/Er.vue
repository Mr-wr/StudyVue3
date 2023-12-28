<template>
    <div class='er'>
        <div>我是儿子</div>
        这是父亲传过来的:
        <div class="fater_data">{{ test }}</div>
        <input @input="femits('test1', ($event.target as HTMLInputElement).value)" type="text" :value="erinputdata">
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'Er',
}
</script>
<script  setup lang='ts'>
import { onMounted, ref } from 'vue';
import emitter from '@/utils/emitter'
let ename = ref('我是儿子')
// 使用mitt
onMounted(() => {
    emitter.emit('send-toy', '我是儿子传给父亲的数据emitter')
    femits('sendToy', '我是儿子传给父亲的数据defineEmits')
})
defineProps({
    test: {
        type: String,
        default: '我是儿子的默认数据',
        required: false // 必传
    },
    erinputdata: String,
})
let femits = defineEmits(['test1', 'sendToy', 'getToy'])
// femits('sendToy', '我是儿子传给父亲的数据defineEmits')

defineExpose({
    ename
})






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