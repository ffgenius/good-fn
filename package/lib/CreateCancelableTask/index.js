/**
 * @author: 远方os
 * @date: 2025-01-08 11:56:12
 * @description: 创建取消标签任务
 */
export const createCancelableTask = (fn) => {
    let _cancel;
    const NOOP = () => { };
    return {
        cancel: () => _cancel(),
        execute: (...args) => {
            return new Promise((resolve, reject) => {
                _cancel?.();
                _cancel = (e) => {
                    resolve = NOOP;
                    reject = NOOP;
                };
                fn(...args).then((res) => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
            });
        },
    };
};
