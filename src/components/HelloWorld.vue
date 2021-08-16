<template>
  <div class="md_editor_wrap">
    <v-md-preview :text="html"></v-md-preview>
  </div>
  <div>{{ text }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { html } from "../../public/md/Vue3_1.md";

export default {
  name: "day1",
  components: {},
  beforeCreate() {
    console.log("----beforeCreate----");
  },
  created() {
    console.log("----created----");
  },
  setup() {
    console.log("----setup----");
    console.log(this); //undefined
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
