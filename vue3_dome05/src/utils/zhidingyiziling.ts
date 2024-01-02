import type { Directive, DirectiveBinding } from 'vue'

const vRole: Directive = (el: HTMLElement, binding: DirectiveBinding) => {
  console.log(el, binding)
}
export default vRole
