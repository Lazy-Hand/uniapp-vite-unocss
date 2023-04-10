import { ObjectType, PageNames } from './interface/routes'
import pages from './pages'
import { readonly, DeepReadonly, UnwrapNestedRefs, ref, Ref } from 'vue'

class Router {
	/**
	 * 防止按钮重复点击
	 */
	private navigateLock: Ref<boolean>
	/**
	 * 页面路由参数
	 */
	private routeStore: Record<PageNames, unknown>
	constructor() {
		this.navigateLock = ref(false)
		this.routeStore = {} as Record<PageNames, unknown>
	}
	/**
	 * @description 获取路由传参
	 * @param page 页面标识
	 */
	public getRouteParams<T extends PageNames>(page: T): DeepReadonly<UnwrapNestedRefs<ObjectType<T>>> {
		const p = this.routeStore[page] as ObjectType<T>
		return readonly(p)
	}
	public navigate<T extends PageNames>(page: T, params?: ObjectType<T>): Promise<any> | undefined {
		if (this.navigateLock.value) {
			return
		}
		const eventName = Math.floor(Math.random() * 1000) + new Date().getTime()
		this.navigateLock.value = true
		this.routeStore[page] = params

		uni.navigateTo({
			url: `${pages[page]}?eventName=${eventName}`,
			complete: () => {
				this.navigateLock.value = false
			}
		})

		return new Promise<any>((resolve, reject) => (uni.$once(String(eventName), resolve), uni.$once(String(eventName), reject)))
	}
	public redirect<T extends PageNames>(page: T, params?: ObjectType<T>) {
		this.routeStore[page] = params
		uni.redirectTo({ url: pages[page] })
	}
	public reLaunch<T extends PageNames>(page: T, params?: ObjectType<T>) {
		this.routeStore[page] = params
		uni.reLaunch({ url: pages[page] })
	}
	public switchTab<T extends PageNames>(page: T, params?: ObjectType<T>) {
		this.routeStore[page] = params

		uni.switchTab({ url: pages[page] })
	}
	public back({ delta, data }: BackParams = { delta: 1, data: null }) {
		const currentRoute = getCurrentPages().pop()
		console.log(currentRoute)

		// @ts-expect-error
		const eventName = currentRoute?.options.eventName
		uni.$emit(eventName, data)
		uni.navigateBack({
			delta
		})
	}
}
interface BackParams {
	/** 返回页面层级 */
	delta?: number
	/** 返回携带的数据 */
	data?: any
}

export default new Router()
