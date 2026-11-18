import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: resolve('index.html'),
        credits: resolve('wiki/Credits/index.html'),
      },
    },
  },
  server: {
    watch: {
      ignored: ['**/*.~tmp'],
    },
  },
})
