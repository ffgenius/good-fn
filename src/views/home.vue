<script setup lang="ts">
import RadiantText from '@/components/ui/radiantText/RadiantText.vue'
</script>

<template>
  <div class="h-[calc(100vh-64px)]">
    <div class="h-full flex items-center justify-between">
      <div>
        <RadiantText
          class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
          :duration="5"
        >
          <span class="text-3xl font-bold">👋 Hi，欢迎来到 <i class="hyperlink">GOOD-FN</i></span>
        </RadiantText>
        <h3>
          我们收集了
          <i class="hyperlink">JS</i> &nbsp;
          <i class="hyperlink">TS</i> &nbsp;
          <i class="hyperlink">CSS</i> &nbsp;
          以及 <i class="hyperlink">Vue</i> 的代码片段
        </h3>
        <h3>期待加入我们，提供优秀代码片段，来者不拒！！！</h3>
        <h5 class="mt3">
          本项目并不提供第三方包方式使用，你可以 copy 适合你的代码片段
        </h5>

        <h2 class="mt20">
          <i class="hyperlink">
            OK, LET WE GO <i class="i-carbon-arrow-right mb1" />
          </i>
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
