import Tabbar from '@/components/Tabbar/Tabbar.vue'
import UploadImg from '@/components/Upload/Img.vue'
declare module 'vue' {
	export interface GlobalComponents {
		Tabbar: typeof Tabbar
		UploadImg: typeof UploadImg
	}
}
