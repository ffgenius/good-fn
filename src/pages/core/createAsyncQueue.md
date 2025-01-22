# CreateAsyncQueue

### 描述
创建一个异步队列函数，保证异步函数的顺序执行。

### 示例
发送五个请求，每个请求的响应时间随机，保证请求的顺序执行。<br />
<CreateAsyncQueueDemo />

```vue
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

```

### 使用
```ts
/**
 * @author: 远方
 * @date: 2025-01-10 09:19:36
 * @description: 异步队列函数
 */

export function createAsyncQueue<R extends Promise<any>>(fn: (...args: any[]) => R) {
  let running = false
  const queue: any[] = []
  return function asyncFn(...args: any[]) {
    return new Promise((..._args) => {
      const cb = () => {
        running = true
        return fn(...args)
          .then(..._args)
          .finally(() => {
            running = false
            const _fn = queue.shift()
            _fn?.()
          })
      }
      queue.push(() => cb())
      if (running)
        return
      const _fn = queue.shift()
      _fn?.()
    })
  }
}
```
<div mt-6 />
