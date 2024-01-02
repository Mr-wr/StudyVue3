<template>
    <div class=''>
        <!-- 懒加载 -->
        <img width="500" v-for="(item, index) in arr" :key="index" v-lazy="item" alt="">
        <!-- <img width="500" v-for="(item, index) in arr" :key="index" v-lazy="item" alt="">
        <img width="500" v-for="(item, index) in arr" :key="index" v-lazy="item" alt="">
        <img width="500" v-for="(item, index) in arr" :key="index" v-lazy="item" alt=""> -->
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line  
    name: '',
}
</script>
<script  setup lang='ts'>
import type { Directive, DirectiveBinding } from 'vue';
let imageList = import.meta.glob("@/assets/*.png", { eager: true })
let arr = Object.values(imageList).map((item: any) => item.default)
// // console.log(arr)
// const vLazy: Directive = async (el: HTMLImageElement, binding: DirectiveBinding) => {
//     const imgdef = await import('./icons/test.svg')
//     // console.log(imgdef)
//     el.src = imgdef.default
//     const observer = new IntersectionObserver((entries) => {
//         // console.log("🚀 ~ file: Lazy.vue:23 ~ observer ~ entries:", entries)
//         const realSrc = binding.value
//         console.log("🚀 ~ file: Lazy.vue:25 ~ observer ~ realSrc", entries)
//         if (entries[0].isIntersecting) {
//             setTimeout(() => {
//                 el.src = realSrc
//                 observer.unobserve(el)
//             }, 2000);
//         }
//         // if (entries[0].intersectionRatio > 0) {
//         //     console.log("🚀 ~ file: Lazy.vue:25 ~ observer ~ realSrc", entries)
//         //     setTimeout(() => {
//         //         el.src = realSrc
//         //     }, 2000);
//         //     observer.unobserve(el)
//         // }
//     })
//     observer.observe(el)
// }

</script>
<style lang='scss' scoped></style>