<template>
    <div class='xie-menu'>
        <div v-for="item in 100" :key="item" class="xie-menu__item">{{ item }}</div>
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'Menu',
}
</script>
<script  setup lang='ts'>
</script>
<style lang='scss' scoped>
.xie-menu {
    width: 40%;
    border: 1px solid #000;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // height: 100%;
    height: 100vh;
    overflow: auto;
    scrollbar-width: none;
    /* 对于Firefox */
    -ms-overflow-style: none;
    /* 对于Internet Explorer和Edge */

    &::-webkit-scrollbar {
        display: none;
    }

    /* 对于Internet Explorer和Edge */
    /* 或者你可以设置一个具体的高度 */
}
</style>