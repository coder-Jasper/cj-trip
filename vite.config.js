import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 处理路径需要使用绝对路径
const _resolve = dir => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': _resolve('src'),
      components: _resolve('src/components')
    }
  }
})
