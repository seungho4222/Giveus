import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPath from 'vite-tsconfig-paths'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPath(), mkcert()],
  server: {
    port: 3000,
    host: true,
    origin: 'http://0.0.0.0',
  },
})
