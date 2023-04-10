import { createSSRApp } from 'vue'
import 'uno.css'
import App from './App.vue'
import pinia from '@/store'
import '@/router/permission'
import '@/styles/index.scss'
export function createApp() {
	const app = createSSRApp(App)
	app.use(pinia)
	return {
		app
	}
}
