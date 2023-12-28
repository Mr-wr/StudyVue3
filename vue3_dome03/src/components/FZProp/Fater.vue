<template>
    <div class='fater'>
        我是父亲
        <button @click="clickProp">传</button>
        我是儿子传给父亲的数据:
        <div class="data">
            {{ erdata }}
        </div>
        <div>{{ erinputdata }}</div>
        <Er :erinputdata="erinputdata" @test1="erinputdata = $event" :test="Fadata" :getToy="getToy" @sendToy="saveToy" />
        <!-- <Er></Er>
        <Er></Er>
        <Er></Er> -->
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'Fater',
}
</script>
<script  setup lang='ts'>
import { ref } from 'vue'
import emitter from '@/utils/emitter'
import Er from './Er.vue'
let Fadata = ref('我是父亲传给儿子的数据')
let erdata = ref('')
let erinputdata = ref('我是父亲传给儿子的input数据')
function clickProp() {
    console.log('我是父亲')
}
function getToy(data: string) {
    erdata.value = data
}
function saveToy(data: string) {
    console.log(2)
    console.log("🚀 ~ file: Fater.vue:36 ~ saveToy ~ data:", data)
    erdata.value = data
}
// 使用mitt
// emitter.on('send-toy', (value: string) => {
//     erdata.value = value

// })
// 使用mitt
emitter.on('send-toy', (value: string) => {
    console.log(1)
    erdata.value = value
})

</script>
<style lang='scss' scoped>
.fater {
    background-color: rgba($color: #888, $alpha: 0.7);

    .data {
        color: red;
    }
}
</style>