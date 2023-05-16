import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Tabbar } from '../interface'
import router from '@/router'
export const useTabbarStore = defineStore('tabbar', () => {
	const tabbarList = ref<Tabbar[]>([
		{
			id: 0,
			icon: 'home',
			name: 'index',
			title: '首页',
			pagePath: '/pages/index/index'
		},
		{
			id: 1,
			icon: 'category',
			name: 'category',
			title: '分类',
			pagePath: '/pages/index/index'
		},
		{
			id: 2,
			icon: 'cart',
			name: 'cart',
			title: '购物车',
			pagePath: '/pages/index/index'
		},
		{
			id: 3,
			icon: 'my',
			name: 'my',
			title: '我的',
			pagePath: '/pages/index/index'
		}
	])
	const tabBarActive = ref(0)
	const switchTab = (active: number) => {
		tabBarActive.value = active
		router.switchTab(tabbarList.value[active].name)
	}
	const setTabBar = (tabbar: Tabbar[]) => {
		tabbarList.value = tabbar
	}
	return { tabBarActive, switchTab, tabbarList, setTabBar }
})
