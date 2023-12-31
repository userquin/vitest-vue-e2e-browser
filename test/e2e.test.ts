import { createApp, nextTick } from 'vue'
import { createDefer } from 'vitest/utils'
import type { RouteLocationNormalized } from 'vue-router'
import { createRouter } from '../src/create-router'
import App from '../src/App.vue'

const routePromises: Record<string, ReturnType<typeof createDefer<void>>> = {}

function findPromise(route: RouteLocationNormalized) {
  return routePromises[route.path] ?? (route.name ? routePromises[route.name.toString()] : undefined)
}

function executeRouteAction(route: string, action: () => void) {
  const promise = createDefer<void>()
  routePromises[route] = promise
  action()
  return promise
}

it('Testing App Routing', async () => {
  const container = document.createElement('div')
  container.setAttribute('id', 'app')
  document.body.appendChild(container)
  const app = createApp(App)
  const router = createRouter()
  app.use(router)
  app.mount('#app')

  router.afterEach((to, from, failure) => {
    console.log(to.path, from.path)
    setTimeout(() => {
      if (failure)
        findPromise(failure.to)?.reject(failure)
      else
        findPromise(to)?.resolve()
    }, 0)
  })

  await router.isReady()

  await nextTick()
  expect(container).toBeTruthy()
  expect(container.innerHTML).toContain('Home page content goes here.')
  expect(container.innerHTML).toContain('e2e testing home')
  // expect(container.innerHTML).toMatchSnapshot()
  let button: HTMLButtonElement | null = container.querySelector('button')
  expect(button).toBeTruthy()
  button?.click()
  await nextTick()
  await nextTick()
  expect(button?.innerHTML).toContain('count is 1')
  const link: HTMLAnchorElement | null = container.querySelector('a[href$="about"]')
  expect(link).toBeTruthy()
  // go to about
  await executeRouteAction('about', () => link?.click())
  expect(container.innerHTML).toContain('About page content goes here.')
  expect(container.innerHTML).toContain('e2e testing about')
  button = container.querySelector('button')
  expect(button).toBeTruthy()
  expect(button?.innerHTML).toContain('count is 0')
  button?.click()
  await nextTick()
  await nextTick()
  expect(button?.innerHTML).toContain('count is 1')
  // back to home
  await executeRouteAction('index', () => router.push('/'))
  expect(container.innerHTML).toContain('Home page content goes here.')
  expect(container.innerHTML).toContain('e2e testing home')
  button = container.querySelector('button')
  expect(button).toBeTruthy()
  expect(button?.innerHTML).toContain('count is 0')
})
