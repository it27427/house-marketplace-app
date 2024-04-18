import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import envCompativle from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      routes: `${path.resolve(__dirname, './src/routes/')}`,
      services: `${path.resolve(__dirname, './src/services/')}`,
    },
  },
});
