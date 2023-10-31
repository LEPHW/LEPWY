import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
// 消除默认样式
import 'normalize.css'
import '@/assets/Css/icon.css'
import '@/assets/Css/base.css'
// 引入适配
import 'amfe-flexible'
createApp(App).use(store).use(router).mount('#app')
