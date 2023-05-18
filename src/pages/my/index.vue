<script setup lang="ts">
import Tabbar from '@/components/Tabbar/Tabbar.vue'
import { reqLogout } from '@/api/modules/login'
import router from '@/router'
import { useUserStore } from '@/store'
const userStore = useUserStore()
const logOut = async () => {
	const res = await reqLogout()

	if (res.code === 200) {
		userStore.resetUser()
		router.navigate('login')
	}
}
</script>
<template>
	<view>
		<vin-button type="primary" @click="logOut">退出登录</vin-button>
		<Tabbar />
	</view>
</template>
<style scoped lang="scss"></style>
