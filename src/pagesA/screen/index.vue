<template>
	<view>
		<vin-tabs v-model="tabValue" title-scroll title-gutter="10" name="tab4value" :auto-height="true" @change="tabChange">
			<vin-tabpane title="今日统计" pane-key="0">
				<DatStic v-if="tabValue === '0'" />
			</vin-tabpane>
			<vin-tabpane title="客户分布图" pane-key="1">
				<Map v-if="tabValue === '1'" />
			</vin-tabpane>
			<vin-tabpane title="历史累计" pane-key="2">
				<Total v-if="tabValue === '2'" />
			</vin-tabpane>
			<vin-tabpane title="实时库存" pane-key="3">
				<RealTime v-if="tabValue === '3'" />
			</vin-tabpane>
			<vin-tabpane title="销量出货趋势图" pane-key="4">
				<Shipment v-if="tabValue === '4'" />
			</vin-tabpane>
			<vin-tabpane title="销量TOP10" pane-key="5">
				<SalesTop v-if="tabValue === '5'" />
			</vin-tabpane>
			<vin-tabpane title="客单统计" pane-key="6">
				<GuestList v-if="tabValue === '6'" />
			</vin-tabpane>
			<vin-tabpane title="业绩统计" pane-key="7">
				<Performance v-if="tabValue === '7'" />
			</vin-tabpane>
			<vin-tabpane title="最新订单" pane-key="8">
				<Newest v-if="tabValue === '8'" />
			</vin-tabpane>
		</vin-tabs>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DatStic from './components/DayStic/index.vue'
import Map from './components/Map/index.vue'
import Total from './components/Total/index.vue'
import RealTime from './components/RealTime/index.vue'
import Shipment from './components/Shipment/index.vue'
import SalesTop from './components/SalesTop/index.vue'
import GuestList from './components/GuestList/index.vue'
import Performance from './components/Performance/index.vue'
import Newest from './components/Newest/index.vue'
const tabValue = ref()
const tabChange = (e: any) => {
	console.log(e)
}
</script>

<style lang="scss" scoped></style>
