import { useDark } from '@vueuse/core'
import { nextTick } from 'vue'

export const isDark = useDark()

export function toggleDark() {
  document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
}
