import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const config = {
    base: '/',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/global.scss";`
      }
    }    
  }

  if(mode === 'action'){
    config.base = '/payment_process/'
  }

  return config
})
