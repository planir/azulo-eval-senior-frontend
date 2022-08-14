import { defineConfig } from 'vite'
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
import vue from '@vitejs/plugin-vue'
// vite.config.js
import Components from 'unplugin-vue-components/vite'



// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			'/assets': {
				target: 'https://awq63197.directus.app/assets',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/assets/, '')
			},

			'/api': {
				target: 'https://awq63197.directus.app/items',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
  	plugins: [
		vue(),
		vuetify({ 
			autoImport: true
		}),
		// your plugin installation
		Components({
			dts: true,
			resolvers: [
				// AntDesignVueResolver(),
				// ElementPlusResolver(),
				// VantResolver(),
			],
		})
	]
})
