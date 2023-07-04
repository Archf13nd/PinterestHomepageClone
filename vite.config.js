import { fileURLToPath, URL } from 'node:url'
import postcssNested from 'postcss-nested'
import postcssImport from 'postcss-import'
import postcssCustomMedia from 'postcss-custom-media'
import postcssPresetEnv from 'postcss-preset-env'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [postcssNested, postcssImport, postcssPresetEnv]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
