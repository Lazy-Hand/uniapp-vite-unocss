import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Tabbar } from '@/interface/tabbar'
import router from '@/router'
import Base64Img from '@/utils/base64Img'
export const useTabbarStore = defineStore('tabbar', () => {
	const tabbarList = ref<Tabbar[]>([
		{
			id: 0,
			icon: Base64Img.logo,
			active: Base64Img.activeLogo,
			name: 'index',
			title: '首页',
			pagePath: '/pages/index/index'
		},
		{
			id: 1,
			icon: Base64Img.category,
			active: Base64Img.activeCategory,
			name: 'category',
			title: '分类',
			pagePath: '/pages/index/index'
		},
		{
			id: 2,
			icon: Base64Img.car,
			active: Base64Img.activeCar,
			name: 'cart',
			title: '购物车',
			pagePath: '/pages/index/index'
		},
		{
			id: 3,
			icon: Base64Img.my,
			active: Base64Img.activeMy,
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
