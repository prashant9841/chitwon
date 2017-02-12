<template>
	<div class="header">
        <h3>{{title}}</h3>
        <a class="el-button" v-if="buttonShow" :href="link">{{button}}</a>   
    </div>
</template>
<script>
	export default{
        
        //props:['title','link','button'],
        props:{
            link:{
                default:'#/',
                type:[String],
                required:false

            },
            button:{
                default:'Add A Post',
                type:[String]

            },
            title:{
                default: 'Title',
                required: false,
                type: [Number,String,Boolean],
            },
            buttonShow:{
                default: true,
                type:[String,Boolean]
            }

        },
    }
</script>