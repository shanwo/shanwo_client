<template>
	<div class="back_container dfcen" @click="$router.back()">
		<img src="@/assets/images/myShan/back.png" >
		<span>返回</span>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.back_container {
		width: 80px;
		height: 40px;
		border-radius: 20px 0 0 20px;
		background-color: #FFFFFF;
		box-shadow: 0px 0px 8px #888888;
		position: fixed;
		right: 0;
		bottom: 80px;
		font-size: 14px;
		img {
			width: 24px;
			height: 24px;
		}
	}
</style>
