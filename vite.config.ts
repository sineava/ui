import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api-token': {
        target: 'https://github.com/login/oauth/access_token',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api-token/, '')
      },
      '/api-user': {
        target: 'https://api.github.com/user',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api-user/, '')
      },
    }
  },
  resolve: {
    alias: {
      '@': new URL('./src/', import.meta.url).pathname
    }
  }
})
