import request from '@/api'
import { LoginForm } from '@/pages/login/index.vue'
import { LoginUser } from '@/store/interface'
/**
 * @description 登录
 * @param {LoginForm} params
 * @param {String} params.phoneNum 手机号
 * @param {String} params.code 短信验证码
 * @param {String} params.wechatCode 微信登录标识
 */
export const reqLogin = (params: LoginForm) => request.post<LoginUser>('/gbw/api/login', params)

/**
 * @description 退出登录
 */
export const reqLogout = () => request.post('/gbw/api/logout')

/**
 * @description 获取验证码
 * @param {object} params
 * @param {string} params.phoneNum
 */
export const reqGetCode = (params: { phoneNum: string }) => request.post('/gbw/api/sendLoginSms', params)
