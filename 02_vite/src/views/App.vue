<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const counter = ref(100);
</script>

<style scoped></style>
