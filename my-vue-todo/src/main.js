import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import router from './router/index'
import './style.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')
