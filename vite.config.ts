import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), reactRouter()],
  base: './',
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Isolate the CodeMirror editor and its language parsers
            if (id.includes('@codemirror') || id.includes('@uiw') || id.includes('@lezer')) {
              return 'vendor-editor';
            }
            // Isolate Framer Motion / Motion
            if (id.includes('motion') || id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            // Isolate Lucide Icons
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            // Bundle remaining minor third-party libraries together
            return 'vendor-core'; 
          }
        }
      }
    }
  }
})
