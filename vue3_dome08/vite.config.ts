import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 自动导入ref，reactive等
import AutoImport from 'unplugin-auto-import/vite'
// px转vw
import { pxToViewport } from './plugins/pxto/pxto'
// 自动导入element-plus
import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      dts: './src/auto-imports.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
     // 将 d.ts 文件生成在 src 目录下
      dts: 'src/components.d.ts',
    }),
  ],
  css: {
    postcss: {
      plugins: [pxToViewport()]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
