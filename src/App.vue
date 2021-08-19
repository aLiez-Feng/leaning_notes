<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <!-- <TestScriptSetup msg="测试scriptsetup" @click="onClick" /> -->
  <computed />
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TestScriptSetup from "./components/test_script_setup.vue";
import ref from "./components/ref.vue";
import reactive from "./components/reactive.vue";
import computed from "./components/computed.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}
</style>
