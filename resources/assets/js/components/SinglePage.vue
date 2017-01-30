<template>


    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">

                    <div class="panel-heading">{{ page.title }}</div>
                    <p>{{page.description}}</p>

                    <div class="panel-body">
                        <!--Image Gallery-->

                        <child-posts v-bind:posts="page.posts" ></child-posts>
                        <image-gallery v-bind:image="page.media" :title=1 bg="fffccc" ></image-gallery>
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
                page: []

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
