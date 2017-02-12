<template>
	<div class="bread-crumb">
	
		 <el-breadcrumb separator="|" >
		    <el-breadcrumb-item v-for="bread in links" :to="{ path: bread.link }">{{bread.title}}</el-breadcrumb-item>
		</el-breadcrumb> 
	</div>
</template>
<script>
	export default{
        
        props:{
            links:{
                default:[{title:'Home',link:'/home'},{title:'About',link:'/home'}],
                type:[Array,Object],
                required:false

            }
        },
    }


    /*
    Format for breadcrumb
    link:{
    	{
			title: Home
			link: /dashboard/
    	}
	
    }
    */
</script>
