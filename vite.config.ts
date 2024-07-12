import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/nupay/react/dev/",
  build: {
    chunkSizeWarningLimit: 3000,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  publicDir: 'public', // Asegúrate de que esta línea esté presente
  server: {
    port: 3000
  }
})
