import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-3d-portfolio/',
  server: {
    port: 5173,
    host: true,
    open: true
  }
})
