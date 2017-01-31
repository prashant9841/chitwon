<template>

    <div  v-show="image !==undefined && Object.keys(image).length" class="row" :style="'background:#'+ background">
        <h1 v-if="title">Image Gallery</h1>
        <ul v-for="img in image" v-show="Object.keys(image).length">
            <li  v-for="src in img">
                <img :src="'http://localhost:8000' + src.thumb" class="image img img-responsive ">
            </li>

        </ul>
    </div>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
    li{
        display:inline-block;
    }


</style>
<script>

    export default{
        props:['image','title','bg'],
        props:{
            image:{
                required: true,

            },
            bg:{
                required: false,
                default: 'ccc',
               type: [String]
            },
            title:{
                default: false,
                required: false,
                type: [Number,String,Boolean]
            }
        },
        data(){
            return {
                background:null,
            }
        },
        mounted(){
            this.prepareComponent();
        },
        methods:{
            prepareComponent(){
                this.background = this.bg;
            }
        }

    }
</script>
