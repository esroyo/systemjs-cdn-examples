<script setup lang="ts">
import { version } from 'vue';

import HelloWorld from './components/HelloWorld.vue';

const msg = `Vite + Vue (${version})`;
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="https://vite.dev/logo.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="https://vuejs.org/logo.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :msg="msg" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
