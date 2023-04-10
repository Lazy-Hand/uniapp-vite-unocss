interface UtilCls {
	throttle: <T>(throttleEvent: (eventArgs?: T) => void, eventArgs?: T, wait?: number, immediate?: boolean) => void
	debounce: <T>(debounceEvent: (eventArgs?: T) => void, eventArgs: T, wait: number, immediate: boolean) => void
}
class Util implements UtilCls {
	private flag: boolean = false
	private timeout: NodeJS.Timeout | null = null

	/**
	 * @description 节流原理：在一定时间内，只能触发一次
	 * @param throttleEvent 事件执行函数
	 * @param eventArgs 事件参数
	 * @param immediate 是否立即执行
	 * @param wait 节流时间
	 */
	throttle<T>(throttleEvent: (eventArgs?: T) => void, eventArgs?: T, wait: number = 500, immediate: boolean = true) {
		if (!this.flag) {
			if (immediate) typeof throttleEvent === 'function' && throttleEvent(eventArgs)
			this.flag = true
			this.timeout = setTimeout(() => {
				this.flag = false
			}, wait)
		}
	}

	/**
	 * @description  防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
	 * @param debounceEvent 事件执行函数
	 * @param eventArgs 事件参数
	 * @param immediate 是否立即执行
	 * @param wait 防抖时间
	 */
	debounce<T>(debounceEvent: (eventArgs?: T) => void, eventArgs: T, wait: number = 500, immediate: boolean = false) {
		if (this.timeout !== null) clearTimeout(this.timeout)
		if (immediate) {
			const callNow = !this.timeout
			this.timeout = setTimeout(() => {
				this.timeout = null
			}, wait)
			if (callNow) typeof debounceEvent === 'function' && debounceEvent(eventArgs)
		} else {
			this.timeout = setTimeout(() => {
				typeof debounceEvent === 'function' && debounceEvent(eventArgs)
			}, wait)
		}
	}
}

export default new Util()
