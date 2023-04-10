import { defineStore } from 'pinia'
import { ref } from 'vue'
import { UserInfo } from '../interface'
export const useUserStore = defineStore(
	'user',
	() => {
		const token = ref<string | null>(null)
		const userInfo = ref<UserInfo | null>(null)
		const setToken = (tokenVal: string | null) => {
			token.value = tokenVal
		}
		const setUserInfo = (userInfoVal: UserInfo | null) => {
			userInfo.value = userInfoVal
		}
		const resetUser = () => {
			token.value = null
			userInfo.value = null
		}
		return { token, setToken, userInfo, setUserInfo, resetUser }
	},
	{
		persist: {
			key: 'user'
		}
	}
)
