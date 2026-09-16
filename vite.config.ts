import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// www.cianbrady.ie serves from site root
export default defineConfig({
  plugins: [react()],
  base: '/',
})
