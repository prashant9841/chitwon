 <template>
 	<section class="comments">
   		<div class="wrap">   			
   			<ul class="comments-wrap">
   				<li class="row">
   					<h3>Comments</h3>
   					<p>32 comments</p>   					
   				</li>
				<li v-for="comment in comments">
		    		<p>{{comment.description}}</p>
		    		<hr>
				</li>
				<li><el-button>Add a button</el-button></li>
				
			</ul>
   		</div>
   	</section>
	
 </template>
  	<script>
  		export default{
  			 methods: {
		      handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		      }

		    },
		    data: function () {
			  return {
			    comments: [
			      { description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere culpa eaque voluptatibus vitae quam delectus, ex quia praesentium enim ea nulla ipsum perspiciatis, consequuntur magni numquam cupiditate, repudiandae excepturi.', link: 'index.php'},
			      { description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, pariatur? Natus harum, quod ad quis vitae earum corrupti velit animi est nobis expedita rerum optio blanditiis, facere debitis, magni asperiores!', link: 'index.php'},
			      { description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas dolore distinctio laborum a optio, vero, magnam perferendis placeat eaque! Magni, mollitia accusantium. Molestiae saepe aliquid architecto, cupiditate vel distinctio?', link: 'index.php'},
			      { description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, voluptates, placeat. Mollitia iure, voluptates, amet, ab, voluptatem aliquam culpa iste ad repellendus possimus magni cumque fugiat earum! Quo, dolores, consequatur!', link: 'index.php'},
			      { description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, laboriosam aperiam culpa accusantium sed quam, provident nobis enim sunt sequi, assumenda optio, placeat voluptates itaque rem fugit dignissimos. Odit, officiis.', link: 'index.php'},
			      { description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, laboriosam aperiam culpa accusantium sed quam, provident nobis enim sunt sequi, assumenda optio, placeat voluptates itaque rem fugit dignissimos. Odit, officiis.', link: 'index.php'},
			      { description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime mollitia aliquam consequuntur explicabo fugit officia esse sapiente rerum, tenetur culpa magni asperiores odit ad accusamus quasi molestias nam nulla dignissimos.', link: 'index.php'}
			    ]
			  }
			}
  		}
  	</script>

	