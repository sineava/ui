import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api-img': {
        target: 'https://npm.elemecdn.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api-img/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': new URL('./src/', import.meta.url).pathname
    }
  }
})
