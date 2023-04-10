export const noQualification = (isAudit: string, role: string): boolean => {
	if (isAudit === '1' || role === '我是销售') {
		return false
	} else {
		showPopup({
			content: '您的账号未资质认证或未加入任何公司， 不能使用此功能',
			showCancel: false
		})
		return true
	}
}
interface Params {
	title?: string
	content: string
	align?: 'align' | 'center' | 'right'
	cancelText?: string
	cancelColor?: string
	confirmText?: string
	confirmColor?: string
	showCancel: boolean
}
export const showPopup = (options: Params) => {
	const params: Params = {
		title: '提示',
		content: '自定义内容',
		align: 'center', // 对齐方式 left/center/right
		cancelText: '取消', // 取消按钮的文字
		cancelColor: '', // 取消按钮颜色
		confirmText: '确定', // 确认按钮文字
		confirmColor: '', // 确认按钮颜色
		showCancel: true // 是否显示取消按钮，默认为 tru
	}
	Object.assign(params, options)
	return new Promise(resolve => {
		uni.showModal({
			...params,
			success: res => {
				if (res.confirm) {
					resolve(true)
				} else if (res.cancel) {
					resolve(false)
				}
			}
		})
	})
}
