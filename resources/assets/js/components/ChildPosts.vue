<template>
    <div class="container">
        <h3 v-show="title">Posts</h3>
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
            },
            getPost(){
                this.post = this.posts;
                console.log(this.title);
            }
        }


    }
</script>
