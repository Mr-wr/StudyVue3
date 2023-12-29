import { customRef } from 'vue'
export default function useMsgRef(testtx: any) {
  const msg = customRef((track, trigger) => {
    let testtxt = testtx
    return {
      get() {
        track()
        return testtxt
      },
      set(value) {
        testtxt = value
        trigger()
      }
    }
  })
  return msg
}
