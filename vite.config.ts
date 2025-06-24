import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    allowedHosts: ['mandinstudios.com','www.mandinstudios.com'],
    host: '0.0.0.0',
  },
})
