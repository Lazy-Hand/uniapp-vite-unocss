<script setup lang="ts">
import Tabbar from '@/components/Tabbar/Tabbar.vue'
import { reqLogout } from '@/api/modules/login'
import router from '@/router'
import { useUserStore } from '@/store'
const userStore = useUserStore()
const logOut = async () => {
	await reqLogout()
	userStore.resetUser()
	router.navigate('login')
}
</script>
<template>
	<view>
		<nut-button type="primary" @click="logOut">退出登录</nut-button>
		<Tabbar />
	</view>
</template>
<style scoped lang="scss"></style>
