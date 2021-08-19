<template>
  <h1>computed前：{{ testCount }}</h1>
  <h1>computed后(函数写法)：{{ changeTestCount }}</h1>
  <h1>computed后(对象写法get)：{{ changeTestCountOBJ }}</h1>
  <h1>computed后(对象写法set)：{{ (changeTestCountOBJ = 1) }}</h1>
  <h1>{{ tempSetValue }}</h1>
</template>

<script>
import { computed, reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      testCount: 1,
      countrie: "中国",
      tempSetValue: "等第4行变我再变",
    });

    const changeTestCount = computed(() => {
      return state.testCount + 9999999;
    });
    const changeTestCountOBJ = computed({
      get() {
        return state.countrie + " NO. " + state.testCount;
      },
      set(val) {
        console.log("valllllllllllllllllll", val);
        if (val === 1) {
          // setTimeout(() => {
          state.tempSetValue =
            "调用computed对象写法中的set-------" + state.tempSetValue;
          // }, 1000);
        }
      },
    });
    return {
      ...toRefs(state), // 将proxy对象转回普通的对象
      changeTestCount,
      changeTestCountOBJ,
    };
  },
};
</script>

<style lang="scss" scoped></style>
