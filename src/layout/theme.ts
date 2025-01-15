import { useDark } from '@vueuse/core'

export const isDark = useDark()

export function toggleDark() {
  document.startViewTransition(async () => {
    isDark.value = !isDark.value
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  })
}
