<script setup>
// props 외부에서 들어오는 데이터(파라미터st)
const props = defineProps({
  color:String // 타입 지정 |무조건 지정할 것. 안하면 오류 

});
</script>

<template>
  <!--  :style 이것은 vue 문법
    중괄호 2개 겹쳐져 있는 것은 콧수염(Mustache 템플릿  JS ``st) -->
  <div :style="{color: props.color}">{{props.color || `BLACK`}} TIRE</div> 
  <!-- 객체를 이용해서 style을 주고 싶으면 : 를 사용해야함  -->
</template>

<style scoped>
</style>