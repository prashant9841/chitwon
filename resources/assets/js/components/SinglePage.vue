<template>


    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">

                    <div class="panel-heading">{{ page.title }}</div>
                    <p>{{page.description}}</p>

                    <div class="panel-body">
                        <!--Image Gallery-->

                        <!--<child-posts v-bind:posts="posts.data" :title="1"></child-posts>-->

                        <div v-for="image in page.media" v-show="Object.keys(page.media).length">

                            <ul v-show="Object.keys(image).length">
                                <li v-for="src in image">
                                    <img :src="'http://localhost:8000/storage' + src.thumb"
                                         class="image img img-responsive ">
                                </li>

                            </ul>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
      export default {
        /*
         * The component's data.
         */
        data() {
            return {
                page: [],
                posts:[]

            };
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
        watch: {
            '$route' (to, from) {
              this.getPage();
            }
        },

        methods: {
            /**
             * Prepare the component (Vue 2.x).
             */
            prepareComponent() {
                this.getPage();
            },

            /**
             * Get all of the authorized tokens for the user.
             */
            getPage() {
                this.$http.get('/api/v1/pages/'+ this.$route.params.id +'?include=media,posts')
                        .then(response => {
                            this.page = response.data.data;
                            this.posts = response.data.data.posts;


                        });
            },

            /**
             * Revoke the given token.
             */
            revoke(page) {
                this.$http.delete('/api/v1/page' + token.id)
                        .then(response => {
                            this.getPage();
                        });
            }
        }
    }

</script>
