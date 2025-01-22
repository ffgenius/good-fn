<script setup lang="ts">
import { createAsyncQueue } from '@lib/CreateAsyncQueue/index.ts'

function mockAsyncFn(id: number): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve(`Response from ${id}`), Math.random() * 2000))
}

const asyncFn = createAsyncQueue(mockAsyncFn)

function send() {
  asyncFn(1).then((res) => { alert(res) })
  asyncFn(2).then((res) => { alert(res) })
  asyncFn(3).then((res) => { alert(res) })
  asyncFn(4).then((res) => { alert(res) })
  asyncFn(5).then((res) => { alert(res) })
}
</script>

<template>
  <Button @click="send">
    发送
  </Button>
</template>

<style scoped>

</style>
