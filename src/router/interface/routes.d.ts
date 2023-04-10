import pages from '../pages'
export interface AgreementUrl {
	url: string
}
export type PageNames = keyof typeof pages
export type ObjectType<T> = T extends 'agreement' ? AgreementUrl : never
