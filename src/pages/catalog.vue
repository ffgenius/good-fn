<script setup lang="ts">
import catalog from '@/lib/core.ts'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="scroll-m-20 mb5 text-2xl font-bold tracking-tight">
    Core
  </div>
  <div v-for="item in catalog" :key="item.vest">
    <div class="text-xl mb2">
      {{ item.vest }}
    </div>
    <div class="text-3">
      {{ item.comment }}
    </div>
    <div v-for="fn in item.fns" :key="fn.name">
      <span cursor-pointer @click="router.push(fn.url)"> &nbsp; &nbsp; - {{ fn.name }}: {{ fn.comment }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
