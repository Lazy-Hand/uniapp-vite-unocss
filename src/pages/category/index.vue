<script setup lang="ts">
import Tabbar from '@/components/Tabbar/Tabbar.vue'
import router from '@/router'
import UploadImg from '@/components/Upload/Img.vue'
import { ref } from 'vue'
const toChart = () => {
	router.navigate('screen')
}
const toChart1 = () => {
	router.navigate('chart')
}
const imgList = ref([])
const test = () => {
	console.log(imgList.value)
}
</script>
<template>
	<view>
		<nut-button type="primary" @click="toChart">跳转screen</nut-button>
		<nut-button type="primary" @click="toChart1">跳转charts</nut-button>
		<nut-button type="primary" @click="test">查看图片列表</nut-button>
		<UploadImg v-model:imgList="imgList" />
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
