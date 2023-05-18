<template>
	<uni-file-picker
		v-bind="$attrs"
		:limit="props.limit"
		:title="`最多选择${props.limit}张图片`"
		:auto-upload="false"
		v-model="imgList"
		@select="select"
		@delete="HandleDelete"
	></uni-file-picker>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { reqUploadImg } from '@/api/modules/upload'
// props
interface FilePickerProps {
	imgList: any[] // 图片列表
	limit: number // 限制图片数量
}
const props = withDefaults(defineProps<FilePickerProps>(), {
	imgList: () => [],
	limit: 9
})

const imgList = ref(props.imgList)

interface UploadEmits {
	(e: 'update:imgList', value: string[]): void
}
const emit = defineEmits<UploadEmits>()

// 选择图片
const select = e => {
	uni.uploadFile({
		...reqUploadImg(e.tempFilePaths[0]),
		success: ({ data }) => {
			const res = JSON.parse(data)
			const newE = { ...e.tempFiles[0], url: res.data.url }
			imgList.value.push(newE)
		}
	})
	emit('update:imgList', imgList.value)
}

// 删除图片
const HandleDelete = e => {
	imgList.value.splice(e.index, 1)
	emit('update:imgList', imgList.value)
}
</script>

<style lang="scss" scoped></style>
