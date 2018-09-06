<template>
	<div>
		{{Togeneratetheform(111)}}
		<el-input v-model="listValue.input" placeholder="请输入内容"></el-input>
		<el-button type="primary"  @click="valueCallback(listValue)">提交数据</el-button>
	</div>
</template>

<script>
	export default {
		name:'fromlList',
		data() {
			return {
				dom:''
				// list:[1],
				// listValue:{
				// 	input:1
				// }
			}
		},
		props: {
			list:Array,
			listValue:Object,
			valueCallback:Function
		},
		methods: {
				Togeneratetheform() {
				render: ()=> {
					return 'ssssssss'
				}
			}
		},
	}
</script>

<style scoped>

</style>