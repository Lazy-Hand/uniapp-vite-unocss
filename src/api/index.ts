import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'
import settle from 'axios/lib/core/settle'
import buildURL from 'axios/lib/helpers/buildURL'
import { ResultEnum } from '@/enums/httpEnum'
import { checkStatus } from './helper/checkStatus'
import type { ResultData } from '@/api/interface'
import { useUserStore } from '@/store'

let baseURL: string
// #ifdef H5
baseURL = process.env.NODE_ENV === 'production' ? import.meta.env.VITE_API_URL : '/api'
// #endif
// #ifndef H5
baseURL = import.meta.env.VITE_API_URL
// #endif
const config = {
	baseURL,
	timeout: ResultEnum.TIMEOUT as number,
	withCredentials: true
}
export class Request {
	// axios实例
	instance: AxiosInstance
	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config)
		this.instance.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				const userStore = useUserStore()
				const token: string | null = userStore.token
				if (config.headers && token) {
					config.headers.Authorization = token
				}
				return config
			},
			(err: AxiosError) => {
				return Promise.reject(err)
			}
		)
		this.instance.interceptors.response.use(
			(res: AxiosResponse) => {
				const { data } = res
				uni.hideLoading()
				return data
			},
			(err: AxiosError) => {
				const { response } = err
				uni.hideLoading()
				if (err.message.indexOf('timeout') !== -1)
					uni.showToast({
						title: '请求超时！请稍后重试',
						icon: 'error',
						mask: true
					})
				// 根据响应的错误状态码，做不同的处理
				if (response) checkStatus(response.status)
				return Promise.reject(err.response)
			}
		)
		this.instance.defaults.adapter = (config: any) => {
			return new Promise((resolve, reject) => {
				uni.request({
					method: config.method?.toUpperCase(),
					url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
					header: { ...config.headers }, // 注意此处不能直接使用config.headers, 传递指针
					data: config.data,
					dataType: config.dataType,
					responseType: config.responseType,
					sslVerify: config.sslVerify,
					complete: function complete(response: any) {
						response = {
							data: response.data,
							status: response.statusCode,
							errMsg: response.errMsg,
							headers: response.header, // 注意此处 单复数
							config: config
						}
						settle(resolve, reject, response)
					}
				})
			})
		}
	}
	// 定义请求方法
	public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
		return this.instance.request(config)
	}
	public get<T>(url: string, config?: AxiosRequestConfig): Promise<ResultData<T>> {
		return this.instance.get(url, config)
	}
	public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ResultData<T>> {
		return this.instance.post(url, data, config)
	}

	public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ResultData<T>> {
		return this.instance.put(url, data, config)
	}

	public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<ResultData<T>> {
		return this.instance.delete(url, config)
	}
}

export default new Request(config)
