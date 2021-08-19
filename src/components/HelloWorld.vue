<template>
  <div class="md_editor_wrap">
    <v-md-preview :text="html"></v-md-preview>
  </div>
</template>

<script>
import {
  defineProps,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
import { html } from "../../public/md/Vue3_1.md";

export default {
  name: "day1",
  components: {},
  props: ["msg"],
  beforeCreate() {
    console.log("beforeCreate - this", this);
  },
  created() {
    console.log("created - this", this);
  },
  setup(props, { attrs }) {
    console.log("----setup----");
    console.log(this); //undefined
    console.log("HelloWorld——props", props);
    console.log("HelloWorld——attrs", attrs);

    // let props_1 = defineProps({   //仅script setup可获取？
    //   msg: String,
    // });
    // console.log("props_1", props_1);

    onBeforeMount(() => {
      console.log("--onBeforeMount--");
      console.log("onBeforeMount - this", this);
    });

    onMounted(() => {
      console.log("--onMounted--");
      console.log("onMounted - this", this);
    });

    onBeforeUpdate(() => {
      console.log("--onBeforeUpdate--");
      console.log("onBeforeUpdate - this", this);
    });

    onUpdated(() => {
      console.log("--onUpdated--");
      console.log("onUpdated - this", this);
    });

    onBeforeUnmount(() => {
      console.log("--onBeforeUnmount--");
      console.log("onBeforeUnmount - this", this);
    });

    onUnmounted(() => {
      console.log("--onUnmounted--");
      console.log("onUnmounted - this", this);
    });

    const text = "111";
    const state = reactive({
      count: 0,
      notHaveHtml: "",
    });

    return {
      ...toRefs(state),
      html,
      text,
    };
  },
};
</script>

<style lang="css" scoped>
.md_editor_wrap {
  width: 100%;
}
</style>
