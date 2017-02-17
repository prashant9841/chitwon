<template>
	<div class="header">
        <h3>{{title}}</h3>
        
        <modal :posts="post" :pages="page" :media="media" :header="modalTitle" :buttonShow="buttonShow"></modal>
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
            post:{
                default: false,
                required: false,
                type: [Number,String,Boolean],
            },
            page:{
                default: false,
                required: false,
                type: [Number,String,Boolean],
            },
            media:{
                default: false,
                required: false,
                type: [Number,String,Boolean],
            },
            modalTitle:{
                default: 'Add a Page',
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