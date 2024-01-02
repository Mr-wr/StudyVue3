<script setup lang="ts">
// import { ref, reactive, shallowRef, markRaw } from 'vue'
import A from '@/components/A.vue'
import B from '@/components/B.vue'
import C from '@/components/C.vue'
let activeIndex = ref(0)
let component = shallowRef(A)
const data = reactive([
    { name: 'A', component: markRaw(A) },
    { name: 'B', component: markRaw(B) },
    { name: 'C', component: markRaw(C) }
])

const toComp = (item: any, index: any) => {
    activeIndex.value = index
    console.log(item.component)
    component.value = item.component
}
</script>

<template>
    <div class="xie-content" style="display: flex;">
        <div style="margin: 0 20px;background-color: blueviolet; width: 100px;text-align: center; font-size: 20px;"
            @click="toComp(item, index)" class="item" :class="[activeIndex == index ? 'active' : '']"
            v-for="(item, index) in data" :key="index">{{ item.name }}</div>
    </div>
    <div class="com">
        <component :is='component'></component>
    </div>
</template>
<style lang="scss" scoped>
.active {
    color: red;
}
</style>