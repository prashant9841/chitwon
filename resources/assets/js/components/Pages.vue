<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Pages List</div>
                    <div class="panel-body" >
                        <div v-for="pge in pages">
                            <div v-for="page in pge">
                                <h1>{{page.title}}</h1>
                                <p>{{page.description}}</p>

                                <!--Media-->
                                <ul v-if="page.media !== undefined && Object.keys(page.media.data).length">
                                    <li v-for="src in page.media.data" style="display:inline-block">
                                        <img :src="'http://localhost:8000' + src.thumb" class="image img img-responsive ">
                                    </li>
                                </ul>
                                <!--Posts-->
                                <div v-if="page.posts !== undefined && Object.keys(page.posts).length" class="row">
                                    <child-posts v-bind:posts="page.posts" v-bind:title=0></child-posts>
                                </div>
                            </div>
                        </div>


<!--
                        <ul v-for="post in pages">

                            <div v-for="page in post">
                                {{page}}


                            </div>
                        </ul>
-->
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
                pages: [],

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

        methods: {
            /**
             * Prepare the component (Vue 2.x).
             */
            prepareComponent() {
                this.getPages();
            },
            /*beforeDestroy(){
                this.pages = [];
            }
            */

            /**
             * Get all of the authorized tokens for the user.
             */
            getPages() {
                this.$http.get('/api/v1/pages?include=media,posts')
                        .then(response => {
                            this.pages = response.data;
                            console.log('got response');
                        });
            },

            /**
             * Revoke the given token.
             */
            revoke(page) {
                this.$http.delete('/api/v1/page' + token.id)
                        .then(response => {
                            this.getPages();
                        });
            }
        }
    }
</script>
