<script setup lang="ts">
import { toggleDark } from '@/layout/theme.ts'
import { templateRef, useElementSize, useWindowScroll } from '@vueuse/core'
import { ref, watch } from 'vue'

function github() {
  window.open('https://github.com/ffgenius/good-fn')
}

const header = templateRef('header')
const scroll = ref(false)

const { y } = useWindowScroll({ behavior: 'smooth' })
const { height } = useElementSize(header)
watch(y, (val) => {
  scroll.value = val > height.value
}, { immediate: true })
</script>

<template>
  <div
    ref="header" :class="{ scroll }"
    class="px40 lt-md:px-20 rounded-b-2 z-99 flex justify-between items-center py2 sticky top-0 left-0 w-full"
  >
    <img src="@/assets/logo.png" alt="" class="w-12 h-12">
    <div class="flex">
      <div class="cursor-pointer flex-center mr1 p3 dark:hover:bg-[#fff]/40 hover:bg-[#000]/5 rounded-3" @click="toggleDark">
        <div class="h-4.5 w-4.5 i-lucide-sun dark:hidden" />
        <div class="h-4.5 w-4.5 hidden dark:block i-lucide-moon" />
      </div>
      <div class="p3 flex-center hover:bg-[#000]/5 dark:hover:bg-[#fff]/40 rounded-3">
        <div class="h-4.5 w-4.5 cursor-pointer i-lucide-github" @click="github" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll {
  transition: 0.5s;
  box-shadow: 0 1px 2px 0 var(--vt-c-white);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.dark .scroll {
  background: var(--vt-c-black);
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 1px 2px 0 var(--vt-c-black);
}
</style>
