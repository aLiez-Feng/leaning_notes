# 一、Vue3 特点

```html
1、Vue3允许template多节点
<template>
  <div class="md_editor_wrap">
    <v-md-preview :text="html"></v-md-preview>
  </div>
  <div class="md_editor_wrap2">
    <v-md-preview :text="html"></v-md-preview>
  </div>
</template>
```

# 二、Vue3 ——Composition API

### 介绍：

```js
Vite:「一个基于浏览器原生 ES imports 的开发服务器。
  利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念，
  服务器随起随用。
  同时不仅有 Vue 文件支持，还搞定了热更新，而且热更新的速度不会随着模块增多而变慢。
  针对生产环境则可以把同一份代码用 rollup 打包。」
Composition API 可以更方便的抽取共通逻辑
```



* ![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/673d8a48ec9d4256b2c86b2918e60bbe~tplv-k3u1fbpfcp-watermark.awebp)

## Option ：Composition API

```js
在Vue2中：(Option)
      缺陷1：Vue2使用的Option，在开发中，若代码较多的组件中，新增或修改代码，需要反复滚动去写代码
      缺陷2：抽离代码带来的问题（一屏码），使用mixin混合，不方便调试（命名冲突，不方便找数据源）
在Vue3中：（Composition Api）
      setup是组合Composition API中的入口函数，也是第一个要使用的函数
      setup值在初始化时执行一次，所有的Composition API函数都在此使用
import { reactive, toRefs } from "vue";
 1.入口函数 setup(){}，setup只在初始化时执行一次,且在beforeCreate前执行。
 2、由于在beforeCreate前执行，组件实例未创建（无法在setup中调用this）
	console.log(this) //undefined
 3、在setup中，创建的变量可以直接使用，模板需要使用，直接在setup函数中返回即可，但是setup不能是一个异步函数，否则就不能使用return中返回的对象数据
 <template>
  <div class="md_editor_wrap2">
    <div :text="text"></div>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  name: "day1",
  beforeCreate() {
    console.log("----beforeCreate----");
  },
  created() {
    console.log("----created----");
  },
  setup() {
    console.log("----setup----");
    console.log(this) //undefined
	const text = "111"
    return {
      text,
    };
  },
};
</script>

 


```





