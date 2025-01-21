# CreateAsyncQueue

### Usage
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

---
