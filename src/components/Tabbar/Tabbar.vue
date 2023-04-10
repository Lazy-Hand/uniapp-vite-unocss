<script setup lang="ts">
import { useTabbarStore } from '@/store'
const tabbar = useTabbarStore()
const tabSwitch = (item: any, index: number) => {
	tabbar.switchTab(index)
}
</script>
<template>
	<nut-tabbar
		@tab-switch="tabSwitch"
		bottom
		placeholder
		safe-area-inset-bottom
		v-model:visible="tabbar.tabBarActive"
		active-color="#0080ff"
		size="50rpx"
	>
		<nut-tabbar-item
			:tab-title="item.title"
			:img="item.icon"
			:activeImg="item.active"
			v-for="item in tabbar.tabbarList"
			:key="item.id"
		></nut-tabbar-item>
	</nut-tabbar>
</template>
<style lang="scss"></style>
