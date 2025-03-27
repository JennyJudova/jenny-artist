import { defineConfig } from 'vite';

export default defineConfig({
  base: '/jenny-artist/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
});