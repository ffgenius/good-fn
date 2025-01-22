# CreateCancelableTask

### 描述
同一时间段内发送多个重复异步请求，仅最后发送的异步请求返回数据，确保数据的准确性。<br />

使用场景：在一个分页器中，获取数据时，如果用户快速翻页，则只获取最后一次请求的数据，避免多次请求数据。

### 示例
设置了一个 num 计数器，每次发送请求时，num 都会加 1，所以最后发送的请求的数据是最新的。
cancel 在请求相应回来之前取消，则不会返回任何数据。


<CreateCancelableTaskDemo />

```vue
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

```

### 使用
```ts
/**
 * @author: 远方os
 * @date: 2025-01-08 11:56:12
 * @description: 重复可取消的异步任务
 */

export function createCancelableTask<P extends any[], R extends Promise<any>>(fn: (...args: P) => R) {
  let _cancel: () => void
  const NOOP = () => {}
  return {
    cancel: () => _cancel(),
    execute: (...args: P) => {
      return new Promise<R>((resolve, reject) => {
        _cancel?.()
        _cancel = () => {
          resolve = NOOP
          reject = NOOP
        }
        fn(...args).then(
          (res) => {
            resolve(res)
          },
          (err) => {
            reject(err)
          },
        )
      })
    },
  }
}
```

<div mt-6 />
