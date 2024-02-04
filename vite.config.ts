import path from 'path';

import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@utilities': path.resolve(__dirname, 'src/utilities'),
      '@mocks': path.resolve(__dirname, 'src/__mocks__'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@root': path.resolve(__dirname, 'src'),
      '@locales': path.resolve(__dirname, 'src/locales'),
      '@stories': path.resolve(__dirname, 'src/stories')
    }
  },
  plugins: [
    react(),
    TanStackRouterVite(),
    EnvironmentPlugin('all'),
    svgr({ include: '**/*.svg?react' })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});
