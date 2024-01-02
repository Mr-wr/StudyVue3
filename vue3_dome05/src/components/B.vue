<template>
    <div class='B'>
        <h1>Basdf</h1>
        <h2>{{ count }}</h2>
        <div v-for="(item, index) in count" :key="index">{{ item }}</div>
        <button @click="add">+</button>
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'B',
}
</script>
<script  setup lang='ts'>
import { ref } from 'vue'
// let instace = getCurrentInstance()
// instace?.proxy
let count = ref(0)
const add = () => {
    count.value++
    console.log('add')
}
</script>
<style lang='scss' scoped></style>