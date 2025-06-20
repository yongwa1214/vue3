<script setup>
const fruits = ["apple", "banana", "pear"];
const sports = [
  { id: 1, name: "농구" },
  { id: 2, name: "축구" },
  { id: 3, name: "배구" },
];

const pop = (message) => alert(message);
const pop2 = () => alert("파라미터 없음");
</script>

<template>
  <h1>Chapter4.vue</h1>
  <!-- item: 배열에 있는 값 idx > index -->
  <div v-for="(item, idx) in fruits" :key="idx">
    <!-- {{idx+1 + ". "+item }} 이것도 됨  -->
    {{ idx + 1 }}. {{ item }}
  </div>

  <select>
    <option value="1">농구</option>
    <option value="2">축구</option>
    <option value="3">배구</option>
  </select>

  <!-- 속성에는 {{  }} <<이거 못씀 :속성 = "객체" -->
  <select>
    <option v-for="item in sports" :key="item.id" :value="item.id">
      {{ item.name }}
    </option>
  </select>

  <!-- 이벤트는 v-on( @이건 단축문법)) -->
  <!-- 호출과 함수 넣기 뭐가 다르나
  js 였으면 pop은 오류남 주소값을 줘야하는데 값을 줘서 오류남 js에서는 익명함수로 감싸야함 function () =>{} -->
  <button @click="pop('반가워')">Hello</button>
  <!-- 이건 js도 됨  -->
  <button v-on:click="pop2">Hello</button>
</template>

<style scoped></style>
