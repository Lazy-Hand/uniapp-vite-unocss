<script setup lang="ts">
import { useTabbarStore } from '@/store'

const tabbar = useTabbarStore()
const tabSwitch = (_item: any, index: number) => {
	tabbar.switchTab(index)
}
</script>
<template>
	<view>
		<view w-1 style="height: 50px"></view>
		<vin-tabbar
			@tab-switch="tabSwitch"
			bottom
			safe-area-inset-bottom
			v-model:visible="tabbar.tabBarActive"
			active-color="$primary-color"
			size="40rpx"
		>
			<vin-tabbar-item
				:tab-title="item.title"
				:icon="item.icon"
				v-for="item in tabbar.tabbarList"
				:key="item.id"
			></vin-tabbar-item>
		</vin-tabbar>
	</view>
</template>
<style lang="scss" scoped></style>
