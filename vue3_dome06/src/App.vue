<!--
 * @Author: xie 1434687824@qq.com
 * @Date: 2024-01-03 16:46:47
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2024-01-03 17:38:41
 * @FilePath: \vue3_dome06\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
let testa = ref(0)
</script>

<template>
  <div class="max-w-md text-ellipsis  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class=""></div>
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" src="http://n.sinaimg.cn/translate/20170815/OoVn-fyixtym5144510.jpg"
          alt="Man looking at item at a store">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers
          for your new business</a>
        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas
          you can use to find your first customers.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
