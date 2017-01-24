<template>
    <div class="container">
        <h3>Posts</h3>
        <ul >
            <li v-for="pst in posts">
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
