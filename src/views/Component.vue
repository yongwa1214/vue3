<script setup>
import RearWheel from "@/components/RearWheel.vue";
import FrontWheel from "@/components/FrontWheel.vue";
</script>

<template>
  <h1>Hello Vue!</h1>
  <h1>Hello Vue!</h1>
  <FrontWheel></FrontWheel>
  <RearWheel></RearWheel>
  <div class="car">
    <FrontWheel />
    <RearWheel />
  </div>
</template>

<style scoped>
.car {
  display: flex;
  gap: 10px;
}
</style>
