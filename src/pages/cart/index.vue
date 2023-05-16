<script setup lang="ts">
import Tabbar from '@/components/Tabbar/Tabbar.vue'
const test = () => {
	uni.showToast({
		title: '摸鱼小能手是上海最能摸鱼的码农',
		icon: 'none',
		duration: 1500
	})
}
</script>
<template>
	<view>
		<nut-button type="info" @click="test">toast</nut-button>
		<Tabbar />
	</view>
</template>
<style scoped lang="scss">
.content {
	width: 750rpx;
	height: 750rpx;
}
</style>
