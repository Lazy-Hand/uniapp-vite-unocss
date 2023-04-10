<script setup lang="ts">
import Tabbar from '@/components/Tabbar/Tabbar.vue'
import router from '@/router'

const toChart = () => {
	router.navigate('screen')
}
const toChart1 = () => {
	router.navigate('chart')
}
</script>
<template>
	<view>
		<nut-button type="primary" @click="toChart">跳转screen</nut-button>
		<nut-button type="primary" @click="toChart1">跳转charts</nut-button>
		<Tabbar />
	</view>
</template>
<style scoped lang="scss">
/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
.charts-box {
	width: 100%;
	height: 1000rpx;
}
</style>
