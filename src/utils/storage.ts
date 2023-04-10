import { StorageKeys } from '@/interface/storage'

interface StorageCla {
	set: <T>(key: StorageKeys, initValue: T) => void
	get: <T>(key: StorageKeys) => Result<T | null>
	remove: (key: StorageKeys) => void
	clear: () => void
}
/**
 * 返回数据
 */
interface Result<T> {
	message: string
	value: T | null
}
/**
 * 本地存储
 */
class Storage implements StorageCla {
	set<T>(key: StorageKeys, initValue: T) {
		uni.setStorageSync(key, JSON.stringify(initValue))
	}
	get<T>(key: StorageKeys): Result<T | null> {
		const value = uni.getStorageSync(key)
		if (value) {
			const data: T = JSON.parse(value)
			return {
				message: '成功',
				value: data
			}
		} else {
			return {
				message: '无效',
				value: null
			}
		}
	}
	remove(key: StorageKeys) {
		uni.removeStorageSync(key)
	}
	clear() {
		uni.clearStorageSync()
	}
}

export default new Storage()
