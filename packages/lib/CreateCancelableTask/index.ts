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
