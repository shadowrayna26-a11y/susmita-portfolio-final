import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/susmita-portfolio-final/' : '/',
  plugins: [react()]
}))
