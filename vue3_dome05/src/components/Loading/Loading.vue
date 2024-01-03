<!--
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-03 10:53:19
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-03 10:53:27
 * @FilePath: \vue3_dome05\src\components\Loading\Loading.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div v-show="isShow" class='loading'>
        loading....
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: '',
}
</script>
<script  setup lang='ts'>
let isShow = ref(false)
const show = () => {
    isShow.value = true
}
const hide = () => {
    isShow.value = false
}
defineExpose({
    isShow,
    show,
    hide
})
</script>
<style lang='scss' scoped>
.loading {
    // 加载界面
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
}
</style>