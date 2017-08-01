<template>
	<ul>
		<li v-for="item in list">{{item}}</li>		
	</ul>
</template>
<script>
	export default{
		data(){
			return{
				list:['apple','banana','orange']
			}
		}
	}
</script>