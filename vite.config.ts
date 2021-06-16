import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactjsx from 'vite-react-jsx'
import path from 'path'

function pathResolve(str) {
  return path.resolve(__dirname, str)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactjsx()],
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    },
  },
})
