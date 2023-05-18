import { useUserStore } from '@/store'
let VITE_API_URL: string
// #ifdef H5
VITE_API_URL = import.meta.env.VITE_API_URL
// #endif

// #ifndef H5
VITE_API_URL =
	import.meta.env.VITE_USER_NODE_ENV === 'development'
		? (JSON.parse(import.meta.env.VITE_PROXY)[0][1] as string)
		: import.meta.env.VITE_API_URL
// #endif
export const reqUploadImg = (img: string) => {
	const userStore = useUserStore()
	return {
		url: VITE_API_URL + '/gbw/api/upload',
		filePath: img,
		name: 'file',
		header: {
			Authorization: userStore.token
		}
	}
}
