<script setup lang="ts">
import BlurReveal from '@/components/ui/blurReveal/BlurReveal.vue'
import ConfettiButton from '@/components/ui/confettiButton/ConfettiButton.vue'
import ParticlesBg from '@/components/ui/particlesBg/ParticlesBg.vue'
import { isDark } from '@/layout/theme.ts'
</script>

<template>
  <div class="h-[calc(100vh-64px)]">
    <div class="h-full flex items-center justify-between">
      <BlurReveal
        :delay="0.2"
        :duration="0.75"
      >
        <h2 class="text-2xl font-bold tracking-tighter xl:text-5xl/none sm:text-2xl">
          👋 Hi，欢迎来到 <ConfettiButton><i class="hyperlink">GOOD-FN</i></ConfettiButton>
        </h2>
        <h3 class="mt5 text-xl font-bold tracking-tighter xl:text-4xl/none sm:text-xl">
          我们收集了
          <i class="hyperlink">JS</i> &nbsp;
          <i class="hyperlink">TS</i> &nbsp;
          <i class="hyperlink">CSS</i> &nbsp;
          以及 <i class="hyperlink">Vue</i> 的代码片段
        </h3>
        <h3 class="mt5 text-xl font-bold tracking-tighter xl:text-4xl/none sm:text-xl">
          期待加入我们，提供优秀代码片段，来者不拒！！！
        </h3>
        <h5 class="mt4 text-5">
          本项目并不提供第三方包方式使用，你可以 copy 适合你的代码片段
        </h5>
        <h2 class="mt20">
          <i class="hyperlink">
            OK, LET US GO
          </i>
        </h2>
      </BlurReveal>
    </div>
    <ParticlesBg
      class="absolute inset-0 z--1"
      :quantity="100"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
  </div>
</template>

<style scoped>

</style>
