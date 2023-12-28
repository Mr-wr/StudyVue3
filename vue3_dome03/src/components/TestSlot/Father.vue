<template>
    <div class='father'>
        <Z>
            <template #one="{ zdata }">
                {{ zdata }}
            </template>
        </Z>
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'Father',
}
</script>
<script  setup lang='ts'>
import Z from './Z.vue'
</script>
<style lang='scss' scoped></style>