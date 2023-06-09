import { useUserStore } from '@/store'
import router from '@/router'

const showToast = (title: string) => {
	uni.showToast({
		title,
		icon: 'none',
		mask: true,
		duration: 1000
	})
}
/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */
export const checkStatus = (status: number): void => {
	switch (status) {
		case 400:
			showToast('请求错误！请您稍后重试(400)')
			break
		case 401:
			showToast('登录失效！请您重新登录(401)')
			// 这里可以做清空storage并跳转到登录页的操作
			const userStore = useUserStore()
			userStore.resetUser()
			router.navigate('login')
			break
		case 403:
			showToast('当前账号无权限访问！(403)')
			break
		case 404:
			showToast('你所访问的资源不存在(404)')
			break
		case 405:
			showToast('请求方式错误！请您稍后重试(405)')
			break
		case 408:
			showToast('请求超时！请您稍后重试(408)')
			break
		case 500:
			showToast('服务异常！(500)')
			break
		case 501:
			showToast('请求未实现！(500)')
			break
		case 502:
			showToast('网关错误！(502)')
			break
		case 503:
			showToast('服务不可用！(503)')
			break
		case 504:
			showToast('网关超时！(504)')
			break
		default:
			showToast(`连接出错(${status})`)
	}
}
