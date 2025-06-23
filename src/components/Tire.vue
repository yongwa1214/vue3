<script setup>
// props 외부에서 들어오는 데이터(파라미터st)
// 외부에서 값을 받아 사용하고 싶으면 이걸 써
const props = defineProps({
  color: String, // 타입 지정 |무조건 지정할 것. 안하면 오류
});

//color라는 속성으로 데이터를 받을 수 있다.
// {{}} template(HTML)안에서 상수 혹은 변수에 담겨있는 값(value)를 표시할 때 사용
</script>

<template>
  <!--  :style ||:~~ 이건 vue 문법
    중괄호 2개 겹쳐져 있는 것은 콧수염(Mustache 템플릿  JS ``st) -->
  <!-- <div :style="{color: props.color}">{{props.color || `BLACK`}} TIRE</div>  -->
  <!-- 객체를 이용해서 style을 주고 싶으면 : 를 사용해야함 : 없으면 문자열 밖에 못보냄 -->
  <!-- :stlye은 객체라고 보면 되죠 key = color , value = props.color라고 보면됩니다 키명은 카멜케이스 -->

  <div :style="{ color: props.color }">{{ props.color || `Black` }} Tire</div>
  <div style="background-color: blue; color: #fff; border-radius: 30px; padding: 0 5px;" class="nana"  > 
    Black Tire</div>

  <!-- mustache 템플릿에 값이 없으면 아무일도 안 일어남 js로 보면 undefined죠 -->
</template>

<style scoped>

</style>
