<template>
<div class="">
    <bread-crumb :links="breadcrumb"></bread-crumb>
    <dashboard-title title="All Images" button="Add image" media="1" modal-title="Add a Image"></dashboard-title>
    <el-table :data="galleries"style="width: 100%">
        <el-table-column prop="thumb" label="Thumbnail"></el-table-column>
        <el-table-column prop="file_name" label="File Name"></el-table-column>
        <el-table-column prop="collection_name" label="Collection"></el-table-column>


        <el-table-column  fixed="right" label="Operations" >
            <template scope="scope">
                <el-button @click="handleClick" type="text"  size="small"><a>Delete</a></el-button>
                <el-button @click="handleClick" type="text" size="small"><a>Detail</a></el-button>
                <el-button type="text" size="small">Edit</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
    export default{
        data(){
            return {
              galleries: [],
              breadcrumb:[]
            }
        },
        /**
         * Prepare the component (Vue 1.x).
         */
        ready() {
            this.prepareComponent();
        },

        /**
         * Prepare the component (Vue 2.x).
         */
        mounted() {
            this.prepareComponent();
        },

        components:{
            // ElDropdown,ElDropdownMenu,ElDropdownItem
        },
        methods: {
            prepareComponent(){
                this.getImages();
                this.getBreadCrumb();
            },

            getBreadCrumb(){
                this.breadcrumb= [
                    {
                      title:'Dashboard',
                      link: '/dashboard/'   
                    },
                    {
                      title:'Gallery',
                      link: '/dashboard/gallery'   
                    }
                ]
            },
            
            handleClick() {
                if (this.active++ > 2) this.active = 0;
            },
            getImages(){
              this.$http.get('/api/v1/galleries')
                        .then(response => {
                            var data = response.data;
                            //Getting the data:
                            this.galleries = data.data;

                        });
            },
            removeImage(id){
              this.$http.delete('/api/v1/galleries/'+id)
                        .then(response => {
                            response.data;
                            //TODO:: Add effects of removing the data
                        });
            },
            updateImage(id){
              this.$http.put('/api/v1/galleries/'+id)
                        .then(response => {
                            response.data;
                            //TODO:: Add effects of removing the data
                        });
            },



        }
    }
</script>
