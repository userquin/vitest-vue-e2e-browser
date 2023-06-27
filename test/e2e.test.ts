/// <reference types="vitest" />

import { nextTick } from 'vue'
import { setupApp } from '../src/setup-app'

describe('Testing App Routing', () => {
  let container: HTMLElement | undefined
  beforeAll(() => {
    const app = setupApp()
    container = document.createElement('div')
    container.id = 'app'
    document.body.appendChild(container)
    app.mount(container)
  })

  it('mounts', async () => {
    expect(container).toBeTruthy()
    expect(container.innerHTML).toContain('Home')
    // expect(container.innerHTML).toContain('e2e testing')
    expect(container.innerHTML).toMatchSnapshot()
    const link: HTMLAnchorElement = container.querySelector('a[href$="about"]')
    expect(link).toBeTruthy()
    link.click()
    await nextTick()
    expect(container.innerHTML).toContain('About')
  })
})
