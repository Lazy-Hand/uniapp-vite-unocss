<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="util.debounce(test, false)" />
		<view class="text-area">
			<text text-green>{{ state.title }}</text>
			<i icon-btn i-carbon-moon />
		</view>
		<uni-badge text="1"></uni-badge>
		<nut-cell title="我是标题" desc="描述文字"></nut-cell>
		<Tabbar />
	</view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Tabbar from '@/components/Tabbar/Tabbar.vue'
import util from '@/utils/util'

const state = reactive({
	title: 'Hello'
})
const test = () => {
	console.log('测试点击时间')
}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}
</style>
