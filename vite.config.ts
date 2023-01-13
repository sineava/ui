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
      '/api-terrain': {
        target: 'https://data.mars3d.cn/terrain',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api-terrain/, '')
      }
    },
    port: 10086,
    open: true
  },
  resolve: {
    alias: {
      '@': new URL('./src/', import.meta.url).pathname
    }
  },
  build: {
    rollupOptions: {
      external: ['leaflet.markercluster/dist/markercluster.css']
    }
  }
})
