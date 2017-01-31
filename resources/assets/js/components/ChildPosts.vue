<template>
    <div class="row">
        <h3 v-show="title">Posts</h3>
        <ul v-for="post in posts">

            <li v-for="pst in post">
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
        props:['posts','title'],
        props:{
            posts:{
                required: true,

            },
            title:{
                default: false,
                required: false,
                type: [Number,String,Boolean],
            }
        },

        data(){
        return {

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
        methods:{
             prepareComponent() {
                   this.getPost()
            },
            getPost(){
                this.post = this.posts;

            }
        }


    }
</script>
