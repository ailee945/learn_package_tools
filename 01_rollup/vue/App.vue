<template>
  <div>
    <div>{{ counter }}</div>
    <button @click="counter++">+1</button>
    <button @click="counter--">+1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const counter = ref(0);
</script>

<style scoped></style>
