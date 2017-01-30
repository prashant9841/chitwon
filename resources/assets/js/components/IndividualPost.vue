<template>
    <div class="row">
      <child-posts v-bind:posts="posts"></child-posts>
    </div>
</template>

<style scoped>
    body{
        background-color:#ff0000;
    }
</style>

<script>
    import SinglePost from './ChildPosts.vue'

    export default{
        data(){
            return{

                posts:[]
            }
        },
        components:{
            SinglePost,
        },
        watch: {
            '$route' (to, from) {
              this.getPost(this.$route.params.id);
              console.log('to' + to);
              console.log('from   ' + from);
            }
        },
        mounted(){
            this.getPost(this.$route.params.id);
        },
        methods:{
            getPost(id)
            {

            this.$http.get('/api/v1/posts/' + id + '?include=media,posts')
                .then(response => {
                        this.posts = response.data;
                });

            }
        }
    }
</script>
