import { PluginOption } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
/**
 * 创建 vite 插件
 * @param viteEnv
 */
export const createVitePlugins = (): (PluginOption | PluginOption[])[] => {
	return [uni(), Unocss()]
}
