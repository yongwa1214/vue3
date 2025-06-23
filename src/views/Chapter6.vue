<script setup>
import {reactive, computed} from 'vue';


// 반응형 상태
const state = reactive({
  mvpId:7,
  players: [
    {id: 7,name: 'John Doe'},
    {id: 9,name: 'Jone Lee'},
    {id: 12,name: 'James Park'},
  ]
});

//메소드
const getMvpName = () =>{
  if(state.mvpId){
    // find, map, filter는 내부적으로 for문을 돈다 그래서 찾고 만들고 하는거구나  
    const player = state.players.find(item => item.id === state.mvpId);
    if(player){
      return player.name;
    }
  }
  return '없음',player;
};

const getMvpNameNice = () => {
  console.log('getMvpNameNice 메소드 !');
  return state.players.find(item => item.id === state.mvpId)?.name || '없음';
 
};

//컴퓨티드
const computedMvpName = computed(()=>{
  console.log('computedMvpName 컴퓨티드!');
  return state.players.find(item => item.id === state.mvpId)?.name || '없음';
});

// 함수랑 컴퓨티드 차이 
// 메소드는 호출할 때마다 일하고
// 컴퓨티드는 호출 한 번 할때 일하고 그 일한걸 캐시에 저장해놓음
// 두번째로 호출하면 일하는게 아니고 캐시에 저장된 값을 가져옴 
// 컴퓨티드는 데이터를 받을 수 없다 


</script>

<template>
  <h1>Chapter6.vue</h1>
  <br>
  <h1>오늘의 MVP</h1>
  <template v-if="state.mvpId">
    {{ state.players.find(item => item.id === state.mvpId)?.name || '없음' }} 
    <!-- find true 가 뜨는 순간 멈추고 true인 주소값을 리턴함 
      - 결과가 undefined면 오류가 발생합니다
      - 옵셔널체이닝(Optional Chaining) ?. 앞이 undefined 나 null 아니었을 때만 결과를 가져온다
        안 적었으면 undefind 오류뜸     
    -->
  </template>
  <div>{{ getMvpName() }}</div>
  <div>nice: {{ getMvpNameNice() }}</div>
  <div>nice: {{ getMvpNameNice() }}</div>
  <div>nice: {{ getMvpNameNice() }}</div>
  <div> computed: {{ computedMvpName }}</div>
  <div> computed: {{ computedMvpName }}</div>
  <div> computed: {{ computedMvpName }}</div>
</template>

<style scoped>

</style>