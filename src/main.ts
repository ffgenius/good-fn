import OnionlUI from 'onionl-ui'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(router)
app.use(OnionlUI)
app.mount('#app')
