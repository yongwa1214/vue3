import './assets/main.css'

import { createApp } from 'vue' //  {}객체 안에 들어있는 요소 (속성이나 함수 등 )
import { createPinia } from 'pinia'

import App from './App.vue' // 객체의 주소값이 넘어옴 
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
