# AutoSkeletonScreen

### 描述
完全使用 css 创建的骨架屏。

### 示例

<AutoSkeletonScreenDemo />

```vue
<template>
  <div loading="true">
    <div w-300px mb2 />
    <div w-600px mb2 />
    <div w-600px mb2 />
    <div w-600px mb2 rounded-xl />
    <div w-900px mb2 rounded-2xl />
    <div w-900px mb2 rounded-3xl />
  </div>
</template>

<style>
@import "@css/AutoSkeletonScreen/index.css";
</style>

```

### 使用
```css
/**
 * @author: 德莱厄斯
 * @date: 2025-01-08 16:35
 * @description: 纯CSS,简易的骨架屏实现
 * @usage: 在需要骨架屏的元素上添加loading="true"属性即可，如 vue 可以使用 v-bind:loading="isLoading"
 */

*[loading='true'] > div:not([loading='true']) {
    background-image: linear-gradient(90deg, #f0f2f5 25%, #e6e8eb 37%, #f0f2f5 63%) !important;
    background-size: 400% 100% !important;
    animation: skeleton-loading 1.4s infinite ease !important;
    border: none !important;
    min-height: 30px;
}
*[loading='true'] > div:not([loading='true']) > * {
    display: none !important;
}
@keyframes skeleton-loading {
    0% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
}

```

<div mt-6 />
