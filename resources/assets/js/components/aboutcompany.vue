<template>
<div>
			<span v-for="item in aboutData">
			<div class="imageWrapper">
				<img :src="item.imgUrl"/>
			</div>
			<div class="aboutWrapper">
				<p>{{ item.description }}</p>
			</div>
			</span>
</div>		
</template>
<script>
	
	export default{

		data: function () {
		  return { 
		  	aboutData: [
		  		{ description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere culpa eaque voluptatibus vitae quam delectus, ex quia praesentium enim ea nulla ipsum perspiciatis, consequuntur magni numquam cupiditate, repudiandae excepturi.', 
		  		imgUrl: 'images/img7.jpg'}
		  		]
			}
		}
	}
</script>