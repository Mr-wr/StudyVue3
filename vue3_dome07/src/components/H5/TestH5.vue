<!--
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-03 21:04:11
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-03 21:49:26
 * @FilePath: \vue3_dome07\src\components\H5\TestH5.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <header>
            <div>left</div>
            <div>center</div>
            <div>right</div>
        </header>
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: 'H5',
}
</script>
<script  setup lang='ts'>
</script>
<style lang='scss' scoped>
header {
    display: flex;
    justify-content: space-between;

    div {
        height: 50px;
        color: white;
        text-align: center;
        line-height: 50px;
        border:1px solid #000;
    }

    div:nth-child(1) {
        width: 100px;
        background: red;
    }

    div:nth-child(2) {
        flex: 1;
        background: green;
    }

    div:nth-child(3) {
        width: 100px;
        background: blue;
    }
}
</style>