import path from 'path';

import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@utilities': path.resolve(__dirname, 'src/utilities'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@root': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react(), TanStackRouterVite(), EnvironmentPlugin('all')],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});
