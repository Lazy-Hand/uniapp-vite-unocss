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
		<nut-tabbar
			@tab-switch="tabSwitch"
			bottom
			placeholder
			safe-area-inset-bottom
			v-model:visible="tabbar.tabBarActive"
			active-color="$primary-color"
			size="40rpx"
		>
			<nut-tabbar-item
				:tab-title="item.title"
				:icon="item.icon"
				v-for="item in tabbar.tabbarList"
				:key="item.id"
			></nut-tabbar-item>
		</nut-tabbar>
	</view>
</template>
<style lang="scss"></style>
