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
2、script setup语法糖 （setup声明的script内部，将自动暴露所有变量供template使用）
（普通vue3写法）
<script>
import { ref, computed } from 'vue'
export default {
   setup () {
      const a = ref(3)
      const b = computed(() => a.value + 2)
      const changeA = () => { a.value = 4 }
      return { a, b, changeA } // have to return everything! 
   }
}
</script>
(setup语法糖写法)
<script setup>
    import { ref, computed } from 'vue'
    // all of these are automatically bound to the template
    const a = ref(3)
    const b = computed(() => a.value + 2)
    const changeA = () => { a.value = 4 } 
</script>
（高级用法）
	defineProps – 为组件定义 props
    defineEmits – 定义组件可以发出的事件
    useContext  – 可以访问组件的槽和属性
	父组件：
	<template>
          <HelloWorld msg="Hello Vue 3 + Vite" />
          <TestScriptSetup msg="测试scriptsetup" @click="onClick" />
        </template>
        <script setup>
        import HelloWorld from "./components/HelloWorld.vue";
        import TestScriptSetup from "./components/test_script_setup.vue";
	</script>
	子组件：
	<template>
          <h1>
            {{ msg }}
            <button @click="onClick">点击按钮</button>
          </h1>
	</template>
	<script setup>
        import { defineProps, defineEmit } from "vue"; // props emit
        let props = defineProps({
          msg: String,
        });
        console.log(props);
        let emit = defineEmit(["click"]);
        const onClick = () => {
          emit("click");
          console.log("click。。。");
        };
	</script>

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

## Option 较 Composition API 优缺点

```js
在Vue2中：(Option)
      缺陷1：Vue2使用的Option，在开发中，若代码较多的组件中，新增或修改代码，需要反复滚动去写代码
      缺陷2：抽离代码带来的问题（一屏码），使用mixin混合，不方便调试（命名冲突，不方便找数据源）
在Vue3中：（Composition Api）
      setup是组合Composition API中的入口函数，也是第一个要使用的函数
      setup值在初始化时执行一次，所有的Composition API函数都在此使用
```





##  Composition API  ：

##  1、setup:

```js
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

### 语法：

```javascript
setup(props,{attrs,slots,emit})
props:
	父组件传递的数据（注意：子组件需要定义props:[]接收后才可获取）
attrs:
	获取父组件标签属性中已经传递所有变量， 相当于 this.$attrs
slots:
	包含所有传入的插槽内容的对象, 相当于 this.$slots
emit:
	用来分发自定义事件的函数, 相当于 this.$emit
```



## 2、ref

​	初始化响应式数据

```html
setup() {
    // ref用于定义一个响应式的数据，返回的是一个Ref对象，对象中有一个value属性
    //如果需要对数据进行操作，需要使用该Ref对象的value属性
    const count = ref(0);
    function updateCount() {
      count.value++;
    }
    return {
      count,
      updateCount,
    };
  }
注意：如需操作DOM需要以下操作
<template>
  <div>
    <button>{{ testRef_value }}</button> // 注意：此时testRef_value为一个proxy对象（若该变量未被标签属性ref绑定，则可显示原来的值）
    <div
      @click="upup"
      ref="testRef_value"
      style="height: 50px; width: 50px; background: pink"
    ></div>
  </div>
</template>
<script>
import { reactive, toRefs, ref } from "vue";
export default {
  setup() {
    const state = reactive({
      testRef_value: 1,
    });
    function upup() {
      const testRef_value = state.testRef_value; // 必须要赋值,因为state.boxOneRef是一个Proxy对象,必须通过代理对象来修改其内部属性
      console.log("testRef_value.style", testRef_value.style);
      testRef_value.style.height = 900 + "px"; // 通过代理对象修改dom元素样式
    }
    return {
      ...toRefs(state),
      upup,
    };
  },
};
</script>
```

## 3、reactive

作用:
	定义多个数据的响应式，接收一个普通对象然后返回该普通对象的响应式代理器对象`(Proxy)`，响应式转换是“深层的”：会影响对象内部所有嵌套的属性,所有的数据都是响应式的。



