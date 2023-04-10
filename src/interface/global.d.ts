// * Vite
declare type Recordable<T = any> = Record<string, T>

declare interface ViteEnv {
	VITE_API_URL: string
	VITE_APP_PORT: number
	VITE_APP_OPEN: boolean
	VITE_GLOB_APP_TITLE: string
	VITE_DROP_CONSOLE: boolean
	VITE_PROXY_URL: string
	VITE_BUILD_GZIP: boolean
	VITE_REPORT: boolean
	VITE_APP_BASE_API: string
}
declare module 'axios/lib/helpers/buildURL'
declare module 'axios/lib/core/settle'
