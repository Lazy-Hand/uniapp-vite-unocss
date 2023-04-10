// 主包
const mainPackage = {
	index: '/pages/index/index',
	category: '/pages/category/index',
	cart: '/pages/cart/index',
	my: '/pages/my/index',
	login: '/pages/login/index',
	agreement: '/pages/agreement/index'
}
// 分包1
const packageA = {
	chart: '/pagesA/chart/index',
	screen: '/pagesA/screen/index'
}
// 分包2
const packageB = {}
// 分包2
const packageC = {}
const pages = {
	...mainPackage,
	...packageA,
	...packageB,
	...packageC
}

export default pages
