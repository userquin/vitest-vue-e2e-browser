# Vitest Browser Vue 3 e2e

Testing [Vue 3](https://github.com/vuejs/core) application with [@vitest/browser](https://github.com/vitest-dev/vitest) in the browser:
- [vue-router](https://github.com/vuejs/router)
- [unplugin-auto-imports](https://github.com/antfu/unplugin-auto-import)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) (not working yet)

This repo is using a custom `vitest` and `@vitest/browser` package versions from [this PR](https://github.com/vitest-dev/vitest/pull/3584).

## Run

This repo is using [pnpm](https://pnpm.io) as package manager.

`pnpm install && pnpm test:e2e`

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/userquin/vitest-vue-e2e-browser)

## Vue DevTools

Vue DevTools is detecting the app inside `@vitest/browser`: `Select component in the page` button not working.

![Vue DevTools](./public/vue-devtools.png)

## Change Vitest PR

If you're working with the [Vitest PR](https://github.com/vitest-dev/vitest/pull/3584) and you want to change somehing on it, you will need to build Vitest and create `tar.gz` files for `vitest` and `@vitest/browser` packages:
- run `nr build && pnpm pack` from root: will generate `vitest-0.xx.z.tar.gz` (`xx.z`  is the Vitest version)
- open another terminal and change to `packages/browser` folder (`cd packages/browser`) and run `pnpm pack`: will generate `vitest-browser-0.xx.z.tgz` (`xx.z`  is the Vitest version)

Once you've generated `vitest` and `@vitest/browser` in your local, uninstall both dev dependencies in your local fork in this repo, **don't remove the corresponding `tar.gz` files before uninstalling the dependencies**:
- run `pnpm remove -D @vitest/browser`
- run `pnpm remove -D @vitest`

Override both `tar.gz` files in your local fork in this repo and add both dependencies using the `file:` protocol:
- `pnpm add -D ./vitest-0.xx.z.tar.gz`
- `pnpm add -D ./vitest-browser-0.xx.z.tgz`
