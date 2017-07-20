 <template>
 	<section class="blog">
   		<div class="overlay-wrap">
   			
   		</div>
   		<div class="wrap">
   			<h1>Our Blog</h1>
   			<ul class="blog-wrap">
				<li v-for="post in Posts">
		    		<a :href="post.link">
		    		<h1>{{post.title}}</h1>
		    		<img :src="post.image" alt="">

		    			<p>{{post.description}}</p>

		    		</a>
		    		<comments></comments>
				</li>
			</ul>
   		</div>
   	</section>
	
 </template>
  	<script>

		import Comments from './comments.vue';

  		export default{
  			components:{
				Comments
			},
  			 methods: {
		      handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		      }

		    },
		    data: function () {
			  return {
			    Posts: [
			      { title: 'Our Blog Title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere culpa eaque voluptatibus vitae quam delectus, ex quia praesentium enim ea nulla ipsum perspiciatis, consequuntur magni numquam cupiditate, repudiandae excepturi.', link: 'index.php', image: 'images/img10.jpg'},
			      { title: 'Our Blog Title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere culpa eaque voluptatibus vitae quam delectus, ex quia praesentium enim ea nulla ipsum perspiciatis, consequuntur magni numquam cupiditate, repudiandae excepturi.', link: 'index.php', image: 'images/img11.jpg'},
			      { title: 'Our Blog Title', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere culpa eaque voluptatibus vitae quam delectus, ex quia praesentium enim ea nulla ipsum perspiciatis, consequuntur magni numquam cupiditate, repudiandae excepturi.', link: 'index.php', image: 'images/img12.jpg'}
			     ]
			  }
			}
  		}
  	</script>

	