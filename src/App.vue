<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app'
import { useTabbarStore } from '@/store'
const tabbar = useTabbarStore()
onLaunch(options => {
	const pagePaths = tabbar.tabbarList.map(item => {
		return item.pagePath
	})
	// 路由路径是tabBar页面 执行隐藏tabBar
	if (pagePaths.indexOf(`/${options!.path}`) !== -1) {
		uni.hideTabBar()
	}
})
</script>
<style lang="scss">
@import 'uni-nutui/components/sky-nutui/app.scss';
page {
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
}
</style>
