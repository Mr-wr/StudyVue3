<template>
    <div :style="`position: fixed;
    top: 0;z-index: ${data.index};width:${data.width}px;height:${data.height}px;background-color:${data.color}`">
        <template v-if="data.ary">
            <template v-for="(item, index) in data.ary" :key="index">
                <Home :data="item"></Home>
            </template>
        </template>
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'Home',
}
</script>
<script lang="ts" setup>
import { usePermission } from '@/stores/modules/permission';
import { defineProps } from 'vue';

defineProps({
    data: {
        type: Object,
        default: () => {
            return {
                color: {
                    type: String,
                    default: 'blue'
                },
                width: {
                    type: String,
                    default: '700'
                },
                height: {
                    type: String,
                    default: '700'
                }
            }
        },
    }
})
</script>
<style lang="scss" scoped >
// .home {
//     position: fixed;
//     top: 0;
//     // background: rgba($color: #000000, $alpha: 0.5);
//     // opacity: 0.5;

// }
</style>