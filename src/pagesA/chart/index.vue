<template>
	<view class="echartsPage">
		<uni-chart ref="uniChartRef" />
		<nut-button type="primary" @click="test">测试</nut-button>
	</view>
</template>

<script setup lang="ts">
import uniChart from '@/pagesA/uni_modules/echarts-for-uniapp/components/uni-chart/uni-chart.vue'
import { ref, onMounted } from 'vue'
const uniChartRef = ref()
const option = ref({
	title: {
		text: '某站点用户访问来源',
		subtext: '纯属虚构',
		left: 'center'
	},
	tooltip: {
		trigger: 'item',
		formatter: '{a} \n{b} : {c} ({d}%)'
	},
	legend: {
		orient: 'vertical',
		left: 'left',
		data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
	},
	series: [
		{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [
				{ value: 335, name: '直接访问' },
				{ value: 310, name: '邮件营销' },
				{ value: 234, name: '联盟广告' },
				{ value: 135, name: '视频广告' },
				{ value: 1548, name: '搜索引擎' }
			],
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}
	]
})
onMounted(() => {
	console.log(uniChartRef.value)
	setTimeout(() => {
		uniChartRef.value.setOption!(option.value)
	}, 500)
})
const test = () => {
	option.value.series[0].data = [
		{ value: 335, name: '直接访问' },
		{ value: 1685, name: '邮件营销' },
		{ value: 234, name: '联盟广告' },
		{ value: 135, name: '视频广告' },
		{ value: 1548, name: '搜索引擎' }
	]
	uniChartRef.value.setOption!(option.value)
}
</script>
<style lang="scss">
.echartsPage {
	width: 100%;
	height: 750rpx;
}
</style>
