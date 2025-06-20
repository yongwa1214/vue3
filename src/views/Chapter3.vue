<script setup>
import { ref } from 'vue';

const fruits = 'apple avocado';
const fruitArr = ['banana', 'blueberry'];

// 포인터 클래스 추가할때 ref({ fruit : true , pointer:true}); 이것도 가능
const visible = ref({ fruit : true});
const hidden = { fruit : false }

const changeVisible = ()=>{
  
  visible.value.fruit = !visible.value.fruit;
  
}

const rect = 'background-color: red; width: 200px; height:100px; color:#fff;';
const rectObj = {
  backgroundColor: 'red',
  width: '200px',
  height: '100px',
  color: '#fff',
  marginTop: '10px',
};

let loading = false;

rectObj.backgroundColor ='blue';

</script>

<template>

<h1>Chapter3</h1>
<div :class="fruits">사과/ 아보카도</div>
<div :class="fruitArr" :title="fruitArr">바나나/블루베리</div>
<hr>

<!-- 이벤트는 @이벤트 -->
<div :class="visible" class="pointer" @click="changeVisible">사과{{ visible.fruit }}</div>
<div :class="hidden">오이</div>
<div :style="rect">rect</div>
<div v-bind:style="rectObj">rectObj</div>

<!-- v-if와 v-else는 바로 옆에 위치해 있어야함 
 자식은 상관없음  
 v-if는 태그 자체가 빠짐 
 많이 사용합니다 주로 로딩할 때 
 예) 통신 시작시 로딩을 띄움 끝나면 없앰-->
<div v-if="loading">로딩 중!!</div>
<div v-else = "!loading">로딩 끝!!</div>

<!-- v-show true 일 때만 보임 
 v-if와는 다르게 태그는 남아있다. display:none임  -->
<div v-show="loading">show loading</div>
</template>

<style scoped>
.fruit {color: red}


</style>]
