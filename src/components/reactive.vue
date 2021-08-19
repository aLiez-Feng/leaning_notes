<template>
  <div>
    {{ state }}
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      arr: [1, 2, 3, 4, 5],
      innerObj: {
        innerArr: [5, 4, 3, 2, 1],
      },
    });
    onMounted(() => {
      setTimeout(() => {
        state.arr[0] = "修改";
      }, 333);
      setTimeout(() => {
        state.innerObj.innerArr[0] = "修改内部";
      }, 3333);
    });
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped></style>
