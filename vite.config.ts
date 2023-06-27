import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    browser: {
      enabled: true,
      enableUI: true,
      headless: false,
      name: 'chrome',
      provider: process.env.BROWSER_PROVIDER || 'none',
    },
  },
  plugins: [
    Vue(),
    /*Components({
      dirs: ['src/components'],
      dts: resolve(__dirname, './components.d.ts'),
    }),*/
    Pages({
      dirs: ['src/pages'],
    }),
    AutoImport({
      dts: resolve(__dirname, './auto-imports.d.ts'),
      imports: [
        'vue',
        'vue-router',
      ],
    }),
  ],
})
