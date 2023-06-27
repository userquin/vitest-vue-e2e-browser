import { createRouter as _createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

const defaultBaseUrl = import.meta.env.BASE_URL ?? '/'
const e2e = import.meta.env.MODE === 'test'

export function createRouter(baseUrl = defaultBaseUrl, testing = e2e) {
  return _createRouter({
    history: testing ? createWebHashHistory(baseUrl) : createWebHistory(baseUrl),
    routes,
  })
}
