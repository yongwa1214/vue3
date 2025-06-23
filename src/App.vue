<script setup>


</script>

<template>
    <!-- <h1>App.vue</h1> -->
    <div class="nana">
        <div>
            <router-link to="/component">1. 컴포넌트</router-link>
            <router-link to="/mustache">2. mustache template</router-link>
            <router-link to="/chapter3">3. chapter3</router-link>
            <router-link to="/chapter4">4. chapter4</router-link>
            <router-link to="/chapter5">5. 반응형 상태 </router-link>
            <router-link to="/chapter6">6. 컴퓨티드 </router-link>
            <router-view/> 
            <!-- router view 가 중요함 link 건게 다 view에 마운트가 됨 -->
        </div>
        <div>
            <router-link to="/chapter7">7. 데이터 바인딩</router-link>
            <router-link to="/chapter8">8. Hook</router-link>
        </div>
    </div>
  
  
</template>
<style scoped>
.nana{
    display: flex;
    gap:50px;
}
div a{
    display: block;
}


</style>