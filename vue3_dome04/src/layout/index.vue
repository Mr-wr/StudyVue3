<template>
    <div class='xie-layout'>
        <Menu></Menu>
        <div class='xie-layout-right-main'>
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'layout',
}
</script>
<script  setup lang='ts'>
import Menu from './Menu/Menu.vue'
import Header from './Header/Header.vue'
import Content from './Content/Content.vue'
</script>
<style lang='scss' scoped>
.xie-layout {
    display: flex;

    .xie-layout-right-main {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>