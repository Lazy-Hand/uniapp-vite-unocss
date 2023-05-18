<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="util.debounce(test, false)" />
		<nut-cell>
			<text text-green>{{ state.title }}</text>
			<i icon-btn i-carbon-moon />
		</nut-cell>
		<nut-cell>
			<text text-green>{{ state.title }}</text>
			<i icon-btn i-carbon-moon />
		</nut-cell>
		<nut-cell>
			<text text-green>{{ state.title }}</text>
			<i icon-btn i-carbon-moon />
		</nut-cell>
		<nut-cell title="我是标题" desc="描述文字"></nut-cell>
		<nut-cell>
			<nut-trend-arrow :sync-text-color="false" :rate="1" />
			<nut-trend-arrow :sync-text-color="false" :rate="-0.2535" />
		</nut-cell>
		<nut-cell>
			<nut-button type="primary">主要按钮</nut-button>
			<nut-button type="info">信息按钮</nut-button>
			<nut-button type="default">默认按钮</nut-button>
		</nut-cell>
		<nut-cell>
			<nut-button type="danger">危险按钮</nut-button>
			<nut-button type="warning">警告按钮</nut-button>
			<nut-button type="success">成功按钮</nut-button>
		</nut-cell>
		<nut-cell>
			<nut-indicator :size="3" :current="3">step1</nut-indicator>
		</nut-cell>
		<nut-cell>
			<nut-searchbar
				v-model="search"
				background="linear-gradient(to right, #9866F0, #EB4D50)"
				input-background="#fff"
				clear-icon="close"
				w-full
			>
				<template #leftin>
					<nut-icon size="14" name="search2"></nut-icon>
				</template>

				<template #rightout> 搜索 </template>
			</nut-searchbar>
		</nut-cell>
		<nut-drag :attract="true">
			<nut-button type="primary">触摸移动</nut-button>
		</nut-drag>
		<Tabbar />
	</view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Tabbar from '@/components/Tabbar/Tabbar.vue'
import util from '@/utils/util'
const state = reactive({
	title: 'Hello'
})
const search = ref('')
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
