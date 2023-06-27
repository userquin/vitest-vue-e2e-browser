import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './style.css'
import routes from 'virtual:generated-pages'
import App from './App.vue'

const defaultBaseUrl = import.meta.env.BASE_URL ?? '/'
const e2e = import.meta.env.MODE === 'test'

export function setupApp(baseUrl = defaultBaseUrl, testing = e2e) {
  console.log(testing)
  const router = createRouter({
    history: testing ? createWebHashHistory(baseUrl) : createWebHistory(baseUrl),
    routes,
  })

  return createApp(App).use(router)
}
