import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { CoResolver } from 'cometu'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue', 'vue/macros'],
    }),
    Components({
      resolvers: [CoResolver()],
      dts: false,
    }),
  ],
})
