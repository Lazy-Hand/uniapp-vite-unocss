import { defineConfig, loadEnv, UserConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import { wrapperEnv } from './src/utils/getEnv'
import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd())
	const viteEnv = wrapperEnv(env)
	const config: UserConfig = {
		resolve: {
			alias: {
				'@': resolve(__dirname, './src')
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "uni-nutui/components/sky-nutui/packages/styles/variables.scss"; @import "@/static/styles/var.scss";`
				}
			}
		},
		define: {
			'process.env': viteEnv
		},
		plugins: [uni(), Unocss()],
		server: {
			port: viteEnv.VITE_PORT, // 设置服务启动端口号
			open: true,
			cors: true, // 允许跨域
			host: '0.0.0.0',
			// 设置代理，根据我们项目实际情况配置
			// #ifdef H5
			proxy: {
				'/api': {
					target: viteEnv.VITE_API_URL,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
			// #endif
		}
	}
	if (command === 'serve') {
		// 仅开发
		return config
	}
	// 生产
	return config
})
