<script setup>
import RearWheel from "@/components/RearWheel.vue";
import FrontWheel from "@/components/FrontWheel.vue";
</script>

<template>
  <h1>component.vue</h1>
  
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
