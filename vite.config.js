import { fileURLToPath, URL } from 'node:url'

import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PinterestHomepageClone',
  publicDir: '/public',
  test: {
    globals: true
  },
  build: {
    sourcemap: true
  },
  plugins: [
    vue(),
    imagetools(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   devOptions: {
    //     enabled: true
    //   },
    //   manifest: {
    //     // name: 'Pinterest Clone',
    //     theme: '#e60023',
    //     icons: [
    //       {
    //         src: 'src/assets/logos/badgeRGB.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       }
    //     ]
    //   },
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,png,jpg,svg}']
    //   }
    // }),
    visualizer({ open: true })
  ],
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
