<script setup lang="ts">
import bg from '@/static/images/bg.png'
import logo from '@/utils/base64Img'
import { reactive } from 'vue'
import router from '@/router'
import { reqLogin, reqGetCode } from '@/api/modules/login'
import { useUserStore, useTabbarStore } from '@/store'
export interface LoginForm {
	phoneNum: string
	code: string
	wechatCode: string
	checkbox: boolean
}
const userStore = useUserStore()
const tabbarStore = useTabbarStore()
const state = reactive<LoginForm>({
	phoneNum: '',
	code: '',
	wechatCode: '',
	checkbox: false
})
const getCode = () => {
	if (!state.checkbox)
		return uni.showToast({
			title: '请勾选用户协议',
			icon: 'error',
			mask: true
		})
	if (!state.phoneNum)
		return uni.showToast({
			title: '请输入手机号',
			icon: 'error'
		})
	uni.showLoading({
		title: '正在获取验证码'
	})
	setTimeout(() => {
		uni.hideLoading()
		reqGetCode({ phoneNum: state.phoneNum })
	}, 2000)
}
const login = () => {
	if (!state.checkbox)
		return uni.showToast({
			title: '请勾选用户协议',
			icon: 'error',
			mask: true
		})
	if (!state.phoneNum)
		return uni.showToast({
			title: '请输入手机号',
			icon: 'error'
		})
	if (!state.code)
		return uni.showToast({
			title: '请输入验证码',
			icon: 'error'
		})
	// #ifdef H5
	setLogin()
	// #endif

	// #ifndef H5
	uni.login({
		provider: 'weixin',
		success: res => {
			state.wechatCode = res.code
			setLogin(res.code)
		}
	})
	// #endif
}
const setLogin = async (code: string = '') => {
	const { data } = await reqLogin({ ...state, wechatCode: code })
	userStore.setToken(data.token)
	userStore.setUserInfo(data.user)
	tabbarStore.switchTab(0)
}
const agreement = (url: string) => {
	router.navigate('agreement', { url })
}
</script>
<template>
	<view class="container">
		<image :src="bg" class="bg"></image>
		<view class="logo-box"><image :src="logo.activeLogo"></image></view>
		<view class="login-card">
			<view class="username">
				<nut-input v-model="state.phoneNum" placeholder="请输入手机号" left-icon="my" :border="false" w-full />
			</view>
			<view class="code">
				<nut-input v-model="state.code" placeholder="请输入短信验证码" :border="false" left-icon="tips" w-full>
					<template #button>
						<nut-button size="small" type="primary" @click="getCode">发送验证码</nut-button>
					</template>
				</nut-input>
			</view>
			<view><nut-button block type="primary" size="large" @click="login">登录</nut-button></view>
			<view style="margin-top: 40rpx; margin-left: 20rpx; display: flex; align-items: center">
				<nut-checkbox v-model="state.checkbox" />
				<view style="font-size: 24rpx">
					登录即代表同意
					<text class="agreement" @click="agreement('https://data.millionsteel.com/xieyi/uagreement.html')">《用户协议》</text>
					和
					<text class="agreement" @click="agreement('https://data.millionsteel.com/xieyi/privacy.html')">《隐私政策》</text>
				</view>
			</view>
		</view>
	</view>
</template>
<style scoped lang="scss">
.container {
	.bg {
		width: 100%;
		height: 640rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.logo-box {
		width: 100%;
		height: 425rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		image {
			width: 200rpx;
			height: 200rpx;
		}
	}
	.login-card {
		width: 702rpx;
		height: 45vh;
		background-color: #fff;
		margin-left: 24rpx;
		border-radius: 24rpx;
		padding: 52rpx;
		box-sizing: border-box;
		.username {
			border: 1rpx solid #ccc;
			border-radius: 8rpx;
			margin-bottom: 42rpx;
			height: 80rpx;
			display: flex;
			align-items: center;
		}
		.code {
			border: 1rpx solid #ccc;
			border-radius: 8rpx;
			margin-bottom: 80rpx;
			height: 80rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
	::v-deep .nut-checkbox {
		width: 25rpx;
		.nut-checkbox__icon {
			color: $primary-color;
		}
	}
	::v-deep .nut-input {
		height: 60rpx;
		line-height: 60rpx;
		padding-top: 0;
		padding-bottom: 0;
		display: flex;
		align-items: center;
	}
	.agreement {
		color: $primary-color;
	}
}
</style>
