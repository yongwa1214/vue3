<script setup>
import RearWheel from "@/components/RearWheel.vue";
import FrontWheel from "@/components/FrontWheel.vue";
import { useCounterStore } from '@/stores/counter.js';
const counterStore  = useCounterStore();
</script>

<template>
  <h1>Component.vue</h1>
  <h1>Hello vue!</h1>
  <button @click="counterStore.increment">회전</button>
  
  <div>
    <FrontWheel></FrontWheel>
    <FrontWheel />
  </div>
  <div>
    <RearWheel class="hi"></RearWheel>
    <RearWheel /> 
  </div>

</template>

<style scoped>
h1{
  margin-bottom: 10px;
}
div{
  display: flex;
  gap: 10px;
}

</style>
