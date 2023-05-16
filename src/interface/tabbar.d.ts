import { PageNames } from '@/router/interface/routes'
export interface Tabbar {
	id: number
	icon: string
	name: PageNames
	title: string
	pagePath: string
}
