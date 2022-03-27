/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config)

import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@apps', replacement: path.resolve(__dirname, './apps') },
      { find: '@packages', replacement: path.resolve(__dirname, './packages') },
      {
        find: 'test',
        replacement: path.resolve(__dirname, './packages/app/test'),
      },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './packages/app/test/test-setup.ts',
  },
})
