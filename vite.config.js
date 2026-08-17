import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Proxy API calls during local development to bypass CORS restrictions.
    // The backend only allows specific origins (your portfolio domain),
    // so we proxy through Vite's dev server which strips the browser's Origin header.
    proxy: {
      '/api/contact': {
        target: 'https://portfolio-backend-neon-alpha.vercel.app',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
