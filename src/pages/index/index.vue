<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="util.debounce(test, false)" />
		<vin-cell>
			<text text-green>{{ state.title }}</text>
			<i icon-btn i-carbon-moon />
		</vin-cell>
		<vin-cell>
			<text text-green>{{ state.title }}</text>
			<i icon-btn i-carbon-moon />
		</vin-cell>
		<vin-cell>
			<text text-green>{{ state.title }}</text>
			<i icon-btn i-carbon-moon />
		</vin-cell>
		<vin-cell>
			<text text-green>{{ state.title }}</text>
			<i icon-btn i-carbon-moon />
		</vin-cell>
		<vin-cell>
			<text text-green>{{ state.title }}</text>
			<i icon-btn i-carbon-moon />
		</vin-cell>
		<vin-cell>
			<text text-green>{{ state.title }}</text>
			<i icon-btn i-carbon-moon />
		</vin-cell>
		<vin-cell>
			<text text-green>{{ state.title }}</text>
			<i icon-btn i-carbon-moon />
		</vin-cell>
		<uni-badge text="1"></uni-badge>
		<vin-cell title="我是标题" desc="描述文字"></vin-cell>
		<vin-cell>
			<vin-searchbar
				v-model="search"
				background="linear-gradient(to right, #9866F0, #EB4D50)"
				input-background="#fff"
				:clearable="search !== ''"
				w-full
			>
				<template #leftin>
					<vin-icon size="14" name="search2"></vin-icon>
				</template>

				<template #rightout> 搜索 </template>
			</vin-searchbar>
		</vin-cell>
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
