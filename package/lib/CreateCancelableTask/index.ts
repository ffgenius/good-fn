/**
 * @author: 远方os
 * @date: 2025-01-08 11:56:12
 * @description: 重复可取消的异步任务
 */

export const createCancelableTask = <P extends any[], R extends Promise<any>>(
  fn: (...args: P) => R,
) => {
  let _cancel: Function
  const NOOP = () => {}
  return {
    cancel: () => _cancel(),
    execute: (...args: P) => {
      return new Promise<R>((resolve, reject) => {
        _cancel?.()
        _cancel = (e?: unknown) => {
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
