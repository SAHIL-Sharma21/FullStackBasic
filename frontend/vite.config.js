import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //adding proxy in vite app whenever we hit /api then it will work and not show any cors error.
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    }
  },
  plugins: [react()],
})
