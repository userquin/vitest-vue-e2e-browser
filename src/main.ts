import { createApp } from 'vue'
import { createRouter } from './create-router'
import App from './App.vue'

import './style.css'

const app = createApp(App)
app.use(createRouter())
app.mount('#app')
