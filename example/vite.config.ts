import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { createProxy } from './proxy.config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      pages: path.resolve(__dirname, 'src/pages'),
      routes: path.resolve(__dirname, 'src/routes'),
    },
  },
  server: {
    port: 3000,
    proxy: createProxy(),
  },
});
