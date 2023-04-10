import Tabbar from '@/pages/components/Tabbar/Tabbar.vue'
declare module 'vue' {
	interface GlobalComponents {
		Tabbar: typeof Tabbar
	}
}
