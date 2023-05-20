import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const nonmodulePlugin = () => {
  return {
    name: 'nonmodule-entrypoint',
    transformIndexHtml(html) {
      return html.replace(
        ' type="module" crossorigin src="/assets/index.js',
        ' src="/assets/index.js'
      );
    },
  };
};

const assetsRelativePlugin = () => {
  return {
    name: 'assets-relative',
    transformIndexHtml(html) {
      return html.replace(
        /(href|src)="\//g,
        '$1="./',
      );
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
        format: 'systemjs',
      },
    },
  },
  plugins: [
    vue(),
    nonmodulePlugin(),
    assetsRelativePlugin(),
  ],
});
