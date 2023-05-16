import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'path'
import { wrapperEnv } from './build/getEnv'
import { createVitePlugins } from './build/plugins'
import { createProxy } from './build/proxy'
import pkg from './package.json'
import dayjs from 'dayjs'
import TransformPages from 'uni-read-pages-vite'
const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
	pkg: { dependencies, devDependencies, name, version },
	lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const root = process.cwd()
	const env = loadEnv(mode, root)
	const viteEnv = wrapperEnv(env)
	return {
		base: viteEnv.VITE_PUBLIC_PATH,
		root,
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
				'axios/lib': resolve(__dirname, './node_modules/axios/lib'),
				'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
			}
		},
		define: {
			__APP_INFO__: JSON.stringify(__APP_INFO__),
			ROUTES: new TransformPages().routes // 注入路由表
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "uni-nutui/components/sky-nutui/packages/styles/variables.scss"; @import "@/static/styles/var.scss";`
				}
			}
		},
		plugins: createVitePlugins(),
		server: {
			host: '0.0.0.0',
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			// Load proxy configuration from .env.development
			proxy: createProxy(viteEnv.VITE_PROXY)
		}
	}
})
