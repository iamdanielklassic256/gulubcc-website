import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    VitePWA({
      manifest: {
        name: "Gulu Bible Communty Church",
        short_name: "GBCC",
        icons: [
          {
            src: 'logo.png',
            sizes: '16x16 32x32 48x48 72x72 96x96 128x128 144x144 152x152 192x192 384x384 512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        runtimeCaching: [{
          urlPattern: ({ url }) => {
            return url.pathname.startsWith("/api")
          },
          handler: "CacheFirst",
          options: {
            cacheName: "api-cache",
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
})
