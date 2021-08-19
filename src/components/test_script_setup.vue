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
