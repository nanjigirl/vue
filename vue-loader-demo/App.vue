<template>
	<h1>welcome vue</h1>
	<h2 @click="change">{{msg}}</h2>
	<my-menu></my-menu>
</template>
<script>
	import Menu from './components/Menu.vue'
	export default{
		data(){
			return{
				msg:'welcom Vue ^_^'
			}
		},
		methods:{
			change(){
				this.msg = 'hahaha'
			}
		},
		components:{
			'my-menu':Menu
		}
	}
</script>
<style>
	body{
		background:#ccc;
	}
</style>