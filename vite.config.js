import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
import reactPlugin from '@vitejs/plugin-react'
//import macrosPlugin from 'vite-plugin-babel-macros'

export default defineConfig({
	plugins: [macrosPlugin(), reactPlugin()],
})
