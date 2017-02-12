<template>
	<div class="header">
        <h3>{{title}}</h3>
        <a class="el-button" :href="link">{{button}}</a>   
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