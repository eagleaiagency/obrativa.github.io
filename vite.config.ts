import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// O build gera um único index.html com tudo embutido, que abre direto do disco
// (file://) sem servidor e sem internet.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
})
