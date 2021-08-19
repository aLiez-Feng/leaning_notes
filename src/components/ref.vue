<template>
  <div>
    <button>{{ testRef_value }}</button>
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

<style lang="css" scoped></style>
