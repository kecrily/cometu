import 'uno.css'
import '@unocss/reset/tailwind.css'
import type { App, Component } from 'vue'
import type { ComponentResolver } from 'unplugin-vue-components'
import * as components from './components'

function install(app: App) {
  Object.entries(components).forEach(([key, value]: [string, Component]) => {
    app.component(key, value)
  })
}

function CoResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Co')) {
        return {
          name,
          from: 'cometu',
          sideEffects: 'cometu/style.css',
        }
      }
    },
  }
}

export default { install }
export { CoResolver }
export * from './components'
