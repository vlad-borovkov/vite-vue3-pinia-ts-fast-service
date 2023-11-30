import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '/@/': resolve(__dirname, 'src'),
      'services': resolve(__dirname, 'src/services'),
      'repositories': resolve(__dirname, 'src/repositories'),
      'types': resolve(__dirname, 'src/types'),
      'plugins': resolve(__dirname, 'src/plugins'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/main.scss";`,
      },
    },
  },
});
