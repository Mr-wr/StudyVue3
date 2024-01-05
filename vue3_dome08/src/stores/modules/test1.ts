// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore1 = defineStore(
  'counte1',
  () => {
    const test1 = ref(0)
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment() {
      count.value++
    }

    return {
      test1,
      count,
      doubleCount,
      increment
    }
  },
  {
    persist: true
  }
)
