<script setup>
  const message ="There 1";
  const messageObj = {name: 'Kim', age: 20};
  console.log(messageObj);
  console.log(messageObj.toString());
  const pageId ='history';
  let loading = false;
  const parent = 'fruits';
  const child = 'item';
  const fruitList = ['사과', '바나나', '딸기', '배'];

  


</script>

<template>
  <h1>Mustache.vue</h1>
  <div>Hello, <span>{{ message }}</span></div>
  <!-- v-text는 directive '디렉티브'라고 부른다. 
      v- 시작하는 속성은 전부 디렉티브이다. -->
  <div>Hello, <span v-text="message"></span></div>
  <div>Hello, messageObj <span v-text="messageObj"></span></div>
  <div>Hello, messageObj.kim <span v-text="messageObj.name"></span></div>
  <div v-bind:id="pageId">페이지 아이디</div>
  <!-- v-bind는 생략가능 -->
  <div :id="pageId">페이지 아이디2</div>
  
  <input type="text" placeholder="아이디" :readonly="loading">
  <input type="password" placeholder="비밀번호" :readonly="loading">
  <button :disabled="loading">로그인</button>

  <ul class="parent">
    <!-- 반복문을 사용할 때에는
      key 값을 줘야합니다 안주면 오류가 뜰수도? key는 유일값 보통 인덱스 줌(배열이니까)  -->
    <li :key="idx" v-for="(item, idx) in fruitList" :class="child">
      {{ item }}
    </li>
  </ul>
  
</template>

<style scoped>
#history{
  color:red;}

</style>