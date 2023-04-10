import { useUserStore } from '@/store'
import router from '@/router'
const whiteList = ['/pages/login/index', '/pages/agreement/index']

const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']

function hasPermission(url: string) {
	// 在白名单中或有token，直接跳转
	if (whiteList.includes(url) || useUserStore().token) {
		return true
	}
	return false
}

list.forEach((item: string) => {
	uni.addInterceptor(item, {
		// 页面跳转前进行拦截, invoke根据返回值进行判断是否继续执行跳转

		invoke(e) {
			if (!hasPermission(e.url.split('?')[0])) {
				// 将用户的目标路径保存下来
				// 这样可以实现 用户登录之后，直接跳转到目标页面
				// storage.set('URL', e.url)
				router.navigate('login')
				return false
			}
			return true
		}
	})
})
