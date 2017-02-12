<template>
    <div class="">
       <bread-crumb :links="breadcrumb"></bread-crumb>
       <dashboard-title title="All Posts"></dashboard-title>
        <el-table :data="posts"style="width: 100%">
            <el-table-column prop="title" label="Title"></el-table-column>
            <el-table-column prop="excerpt" label="Experct"></el-table-column>
            <el-table-column prop="published_on.date" label="Published_on"></el-table-column>
            <el-table-column label="Images">
                <template scope="scope" v-if="Object.keys(posts.media).length">
                    <div v-for="image in posts.media">
                        <img :src="image.src">
                    </div>
                </template>
            </el-table-column>
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
              posts: [],
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
                this.getPosts();
                this.getBreadCrumb();
            },


            getBreadCrumb(){
                this.breadcrumb= [
                    {
                      title:'Dashboard',
                      link: '/dashboard/'   
                    },
                    {
                      title:'Posts',
                      link: '/dashboard/posts'   
                    }
                ]
            },

            handleClick() {
                if (this.active++ > 2) this.active = 0;
            },
            getPosts(){
              this.$http.get('/api/v1/posts?include=media')
                        .then(response => {
                            var data = response.data;
                            //Getting the data:
                            this.posts = data.data;
                            console.log(this.posts);
                        });
            },
            removeUsers(id){
              this.$http.delete('/api/v1/posts/'+id)
                        .then(response => {
                            response.data;
                            //TODO:: Add effects of removing the data
                        });
            },
            updateUsers(id){
              this.$http.put('/api/v1/posts/'+id)
                        .then(response => {
                            response.data;
                            //TODO:: Add effects of removing the data
                        });
            },



        }
    }
</script>
