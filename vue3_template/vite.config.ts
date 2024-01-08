import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 自动导入ref，reactive等
import AutoImport from 'unplugin-auto-import/vite'
// px转vw
import pxtovw from 'postcss-px-to-viewport'

const my_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  unitToConvert: 'px', // 要转化的单位
  viewportWidth: 1920, // UI设计稿的宽度
  unitPrecision: 6, // 转换后的精度，即小数点位数
  propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  selectorBlackList: [], // 指定不转换为视窗单位的类名，
  minPixelValue: 12, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  landscape: false // 是否处理横屏情况
})
// import { pxToViewport } from './plugins/pxto/pxto'
// 自动导入element-plus
import Components from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
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
      dts: 'src/components.d.ts'
    })
  ],
  css: {
    preprocessorOptions: {},
    postcss: {
      plugins: [my_pxtovw]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api1': {
        target: 'http://localhost/api', // 这里是你的后端服务器地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api1/, '')
      }
    }
  }
})
