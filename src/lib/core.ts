export default [
  {
    vest: 'css',
    comment: '仅通过简洁、高效的 CSS 代码，提供一系列实用且交互性强的组件和样式解决方案，而无需依赖 JavaScript 或任何其他框架。',
    fns: [
      {
        name: 'AutoSkeletonScreen',
        comment: '通过 css 样式实现简单易用的骨架屏',
        url: '/core/autoSkeletonScreen',
      },
    ],
  },
  {
    vest: 'hooks',
    comment: '提供 vue3 简洁、高效的 hooks 工具。',
    fns: [
      {
        name: 'useAutoRefresh',
        comment: '自动刷新队列',
        url: '/core/useAutoRefresh',
      },
    ],
  },
  {
    vest: 'lib',
    comment: 'JS / TS 实现的常用场景工具函数。',
    fns: [
      {
        name: 'AutoUtils',
        comment: '易用工具集',
        url: '/core/autoUtils',
      },
      {
        name: 'CreateAsyncQueue',
        comment: '创建一个重复可取消的异步任务',
        url: '/core/createAsyncQueue',
      },
      {
        name: 'CreateCancelableTask',
        comment: '创建一个重复可取消的异步任务',
        url: '/core/createCancelableTask',
      },
    ],
  },
] as vestItem[]

export type vestType = 'css' | 'hooks' | 'lib'
export interface vestItem {
  vest: vestType
  comment: string
  fns: {
    name: string
    comment: string
    url: string
  }[]
}
