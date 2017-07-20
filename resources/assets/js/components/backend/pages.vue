<template>
    <div class="">
        <bread-crumb :links="breadcrumb"></bread-crumb>
        <dashboard-title title="All pages" button="Add a Page" page="1" modal-title="Add a Page"></dashboard-title>
        <el-table :data="pages"style="width: 100%">
            <el-table-column prop="title" label="Title"></el-table-column>
            <el-table-column prop="slug" label="Slug"></el-table-column>
            <!--<el-table-column prop="published_on.date" label="Published_on"></el-table-column>-->
            <el-table-column  label="Posts">{{posts}}</el-table-column>
            <el-table-column  fixed="right" label="Operations" width="120">
                <template scope="scope">
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
              pages: [],
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
                this.getPages();
                this.getBreadCrumb();
            },

            getBreadCrumb(){
                this.breadcrumb= [
                    {
                      title:'Dashboard',
                      link: '/dashboard/'   
                    },
                    {
                      title:'Pages',
                      link: '/dashboard/pages'   
                    }
                ]
            },

            
            handleClick() {
                if (this.active++ > 2) this.active = 0;
            },
            getPages(){
              this.$http.get('/api/v1/pages?include=media,posts')
                        .then(response => {
                            var data = response.data;
                            //Getting the data:
                            this.pages = data.data;

                        });
            },
            removePage(id){
              this.$http.delete('/api/v1/pages/'+id)
                        .then(response => {
                            response.data;
                            //TODO:: Add effects of removing the data
                        });
            },
            updatePage(id){
              this.$http.put('/api/v1/pages/'+id)
                        .then(response => {
                            response.data;
                            //TODO:: Add effects of removing the data
                        });
            },



        }
    }
</script>
