<script setup lang="ts">
import { createCancelableTask } from '@lib/CreateCancelableTask/index.ts'

let num = 0
function fetchData(url: string): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve(`data from ${url} ${num}`), 1000))
}

const { execute, cancel } = createCancelableTask(fetchData)

function send() {
  num++
  execute('http://example.com/api/data1').then(res => alert(res))
}
</script>

<template>
  <Button @click="send">
    发送
  </Button> &nbsp;
  <Button @click="cancel">
    取消
  </Button>
</template>

<style scoped>

</style>
