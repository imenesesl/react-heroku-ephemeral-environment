import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@modules': path.resolve(__dirname, 'src/components'),
      '@root': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});
