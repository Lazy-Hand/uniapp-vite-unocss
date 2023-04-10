<template>
	<web-view :src="router.getRouteParams('agreement').url"></web-view>
</template>

<script setup lang="ts">
import router from '@/router'
</script>

<style lang="scss" scoped></style>
