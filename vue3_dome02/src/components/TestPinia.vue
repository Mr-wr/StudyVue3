<template>
    <div class="home_view">
        <div class="home_content">
            <div class="left">TestPinia </div>
            {{ doubleCount }}{{ count }}{{  }}
            <button @click="increment">加</button>
            <div class="right"></div>
        </div>
    </div>
</template>


<script lang="ts" setup name="TestPinia">
// defineExpose
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia';

let { increment } = useCounterStore()
let { count, doubleCount } = storeToRefs(useCounterStore())

</script>


<style scoped lang="scss">
.home_content {
    display: flex;
    justify-content: space-between;

    .left {
        width: 200px;
        height: 300px;
        border: 1px solid #666;
        background-color: rgba($color: #666, $alpha: 0.7);
    }

    .right {
        flex-grow: 1;
        width: 200px;
        height: 300px;
        border: 1px solid #666;
        background-color: rgba($color: #666, $alpha: 0.7);
    }
}
</style>