# UseAutoRefresh

### 描述
注册定时任务自动刷新

### 使用
```ts
/**
 * @author: 小左ovo
 * @date: 2025-01-10 09:19:36
 * @description: 注册定时任务自动刷新
 */

import { onBeforeUnmount, ref, type Ref } from 'vue'

// 定义状态类型
type TimerStatus = 'inactive' | 'active' | 'paused'

// 定义定时器存储类型
interface TimerEntry {
  timer: ReturnType<typeof setInterval> | null
  callbacks: Set<() => void>
  start: () => void
  stop: () => void
}

// 定时器存储
const timerStore: Record<number, TimerEntry> = {}

// 定义 Hook 的类型
interface UseAutoRefreshReturn {
  status: Ref<TimerStatus>
  open: () => void
  pause: () => void
  close: () => void
  onStateChange: (callback: (newState: TimerStatus) => void) => void
}

export function useAutoRefresh(interval: number, callback: () => void): UseAutoRefreshReturn {
  if (interval <= 0) {
    throw new Error('The interval must be a positive number.')
  }

  const status = ref<TimerStatus>('inactive')
  const stateChangeCallbacks = new Set<(newState: TimerStatus) => void>()

  if (!timerStore[interval]) {
    timerStore[interval] = {
      timer: null,
      callbacks: new Set(),
      start() {
        if (this.timer)
          return
        this.timer = setInterval(() => {
          for (const cb of this.callbacks) {
            try {
              cb()
            }
            catch (err) {
              console.error('Timer callback error:', err)
            }
          }
        }, interval)
      },
      stop() {
        if (this.timer) {
          clearInterval(this.timer)
          this.timer = null
        }
      },
    }
  }

  const currentTimer = timerStore[interval]

  // 注册回调
  currentTimer.callbacks.add(callback)

  const notifyStateChange = (newState: TimerStatus) => {
    status.value = newState
    stateChangeCallbacks.forEach(cb => cb(newState))
  }

  const open = () => {
    if (status.value === 'active')
      return
    notifyStateChange('active')
    currentTimer.start()
  }

  const pause = () => {
    if (status.value !== 'active')
      return
    notifyStateChange('paused')
    currentTimer.stop()
  }

  const close = () => {
    if (status.value === 'inactive')
      return
    notifyStateChange('inactive')
    currentTimer.callbacks.delete(callback)

    if (currentTimer.callbacks.size === 0) {
      currentTimer.stop()
      delete timerStore[interval]
    }
  }

  const onStateChange = (callback: (newState: TimerStatus) => void) => {
    stateChangeCallbacks.add(callback)
  }

  onBeforeUnmount(() => {
    close()
  })

  if (currentTimer.timer) {
    notifyStateChange('active')
  }
  else {
    open()
  }

  return {
    status,
    open,
    pause,
    close,
    onStateChange,
  }
}

```

<div mt-6 />
