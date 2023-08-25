import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 41024,
    proxy: {
      '/api': {
        target: 'http://192.168.1.133:8091',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    } // 别名
  }
})
