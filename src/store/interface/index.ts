export interface LoginUser {
	token: string
	user: UserInfo
}

export interface UserInfo {
	auth: string
	avatarPath: string
	businessAvatar: string
	businessName: string
	businessPhone: string
	co: string
	coAdmin: boolean
	coId: number
	enabled: boolean
	id: number
	joinCoAuditStatus: string
	nickName: string
	phone: string
	role: string
	roleText: string
	warehouseId: number
}
