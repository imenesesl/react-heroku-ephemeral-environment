import path from 'path';

import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@root': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react(), TanStackRouterVite()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});
