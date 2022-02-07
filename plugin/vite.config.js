import { defineConfig } from 'vite';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('mdsp-')
        }
      }
    })
  ],
  build: {
    rollupOptions: {
      input: 'src/index.js',
      output: [
        {
          format: 'esm',
          file: 'dist/library.mjs'
        },
        {
          format: 'cjs',
          file: 'dist/library.js'
        }
      ],
      plugins: [
        peerDepsExternal()
      ]
    }
  },
});
