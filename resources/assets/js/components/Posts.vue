<template>
    <div class="container">
        <ul v-show="Object.keys(posts).length" v-for="nPost in posts">
            <li v-for="pst in nPost">
                <h4>{{ pst.title }}</h4>
                <p>{{ pst.excerpt }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
      export default {
        /*
         * The component's data.
         */


        data(){
            return {
                   posts: []
            }
        },

        /**
         * Prepare the component (Vue 1.x).
         */
        ready() {

            console.log('ready');
            this.prepareComponent();
            console.log(this.posts);
        },

        /**
         * Prepare the component (Vue 2.x).
         */
        mounted() {

            this.prepareComponent();
            console.log('mounted post'+this.post);
        },
        methods:{
             prepareComponent() {

                console.log('preparing component');
                console.log(this.$route.params.id);
            },
            getPost(){
                this.$http.get('/api/v1/posts/'+this.$route.params.id+'?include=media,posts')
                        .then(response => {
                            this.posts = response.data;
                        });
            }
        }


    }
</script>
