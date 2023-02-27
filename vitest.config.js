import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from './vite.config.js'

export default defineConfig(
    mergeConfig(viteConfig, {
        test: {
            setupFiles: ['components/__tests__/unitest.setup.js'],
            environment: 'jsdom'
        }
    })
)