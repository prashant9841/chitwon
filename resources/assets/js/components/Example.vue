<template>


    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Pages List</div>

                    <div class="panel-body">

                        <ul v-for="page in pages">
                            <li v-for="pst in page">
                                <a :href="pst.links.url">{{pst.title}}</a>

                                     <ul v-show="Object.keys(pst.media.data).length">
                                         <li v-for="src in pst.media.data">
                                             <img :src="'http://localhost:8000/storage'+src.url">
                                         </li>
                                     </ul>


                            </li>
                        </ul>
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

            /**
             * Get all of the authorized tokens for the user.
             */
            getPages() {
                this.$http.get('/api/v1/pages?include=media')
                        .then(response => {
                            this.pages = response.data;
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
