<!--
 * @Author: xie 1434687824@qq.com
 * @Date: 2023-12-25 17:36:05
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2023-12-26 18:43:31
 * @FilePath: \vue3_dome01\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div class="testdiv">niaho</div>
        <h1>jslafk</h1>
        <Person />
    </div>
</template>
<script lang="ts">
import Person from './components/Person.vue';
export default {
    components: {
        Person
    }
}
</script>
<style scoped>
.testdiv {
    width: 100px;
    height: 100px;
    background-color: blue;
    color: red;
}
</style>