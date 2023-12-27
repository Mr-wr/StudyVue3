<template>
    <div class="detail">
        {{ a }}
    </div>
</template>
<script lang="ts">
export default {
    //eslint-disable-next-line
    name: 'Detail',

}
</script>

<script lang="ts" setup name="HomeView">
import { RouterView } from 'vue-router'
defineProps(["a"])

</script>


<style scoped lang="scss"></style>