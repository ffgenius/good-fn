import { useAutoRefresh } from '../index'

const { open, pause, close, onStateChange } = useAutoRefresh(1000, () => {
  console.log('1秒刷新一次')
})

open()
