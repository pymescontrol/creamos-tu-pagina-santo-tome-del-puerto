import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/creamos-tu-pagina-santo-tome-del-puerto/', // Ruta absoluta para GitHub Pages multipágina
  build: {
    outDir: 'docs', // Cambiado a "docs" para servir directamente en GitHub Pages
  }
})
