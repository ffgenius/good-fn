import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './assets/style/main.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.mount('#app')
