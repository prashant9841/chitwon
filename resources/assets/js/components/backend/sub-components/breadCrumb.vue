<template>
	<div class="bread-crumb">
		<el-breadcrumb separator="|">
		    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
		    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
		    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
		    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>
<script>
	export default{
        data(){
            return {
              	title: 'Title',
              	link: '#/',
              	button: 'Add A Post'
            }
        }
    }
</script>