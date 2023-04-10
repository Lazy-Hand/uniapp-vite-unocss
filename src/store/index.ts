import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
export default createPinia().use(
	createPersistedState({
		storage: {
			getItem(key: string): string | null {
				return uni.getStorageSync(key)
			},
			setItem(key: string, value: string) {
				uni.setStorageSync(key, value)
			}
		}
	})
)

export * from './modules/global'
export * from './modules/tabBar'
export * from './modules/user'
