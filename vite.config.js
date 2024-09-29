import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'test-github-action',
      formats: ['umd'],
      fileName: format => 'index.js',
    },
  },
});
