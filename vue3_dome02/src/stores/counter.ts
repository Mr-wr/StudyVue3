import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      talkList.push('我本已百毒不侵，偏偏你是第101种，而且无药可解。')
      count.value++
    }

    return { count, doubleCount, talkList, increment }
  },
  {
    persist: true
  }
)
