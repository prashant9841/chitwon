<template v-show="Object.keys(posts).length" >
    <div class="row">
        <ul v-for="nPost in posts">
            <li v-for="pst in nPost" :test="pst.id">
                <h4 @click="showExcerpt(pst.id)">{{ pst.title }}</h4>
                <p>{{ pst.excerpt}}</p>
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
            console.log('mounted post'+ ' POST::   '+this.post);
        },
        methods:{
            showExcerpt(event){
                //event.preventDefault();
                //Sliding the Excerpt when clicked
              $('li[test='+event+']').find('p').slideToggle();
            },
             prepareComponent() {
                console.log('preparing component');
                this.getPost()
                console.log(this.$route.params.id);
            },
            getPost(){
                this.$http.get('/api/v1/posts?include=media,posts')
                        .then(response => {
                            this.posts = response.data;
                        });
            }
        }


    }
</script>
