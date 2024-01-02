<template>
    <div class=''>
        {{ tta.a }}
    </div>
</template>
<script lang='ts'>
export default {
    //eslint-disable-next-line
    name: '',
}
</script>
<script  setup lang='ts'>
// import type { Directive, DirectiveBinding } from 'vue'

// const vRole: Directive = (el: HTMLElement, binding: DirectiveBinding) => {
//   console.log(el, binding)
// }

// import type { DirectiveBinding } from 'vue';
const tta = reactive({
    a: 1,
    b: 2
})


// const vRole: Directive = (el: HTMLElement, binding: DirectiveBinding) => {


// }

</script>
<style lang='scss' scoped></style>