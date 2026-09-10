import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Served from https://sayamdev.github.io/cv/ in production.
const REPOSITORY_BASE = '/cv/'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? REPOSITORY_BASE : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': new URL('./src', import.meta.url).pathname },
  },
}))
