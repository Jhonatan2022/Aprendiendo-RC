import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// Exportamos un objeto de configuración por defecto
export default defineConfig({

  // Con plugins indicamos los plugins que vamos a utilizar en el proyecto
  plugins: [react()],

  // Con base indicamos la ruta base del proyecto en el servidor
  base: '/Aprendiendo-React/',
})
