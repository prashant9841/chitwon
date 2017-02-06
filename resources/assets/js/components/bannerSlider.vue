<template>

	<section class="banner">
		<el-carousel :autoplay="false" trigger='clicked' change='changed'>
	      <el-carousel-item v-for="slide in slider" >
	      	<img :src="slide.image" alt="" class="bg-image">
	        <h1>{{slide.title}}</h1>
	        <h3>{{slide.description}}</h3>
	      </el-carousel-item>
	    </el-carousel>

	</section>	
</template>
<script>
import { Carousel } from 'element-ui'
	export default{
		methods: {
			change(key, keyPath) {
				console.log(key, keyPath);
			}

		},
		components:{
			Carousel
		},
		data: function () {
		  return {
		    slider: [
		      { title: 'Encounter Tiger', description: 'index.php', image: 'frontend/images/img5.jpg'},
		      { title: 'Chitwan National Park', description: 'index.php', image: 'frontend/images/img11.jpg'},
		      { title: 'Encounter Tiger', description: 'index.php', image: 'frontend/images/img5.jpg'},
		      { title: 'Chitwan National Park', description: 'index.php', image: 'frontend/images/img11.jpg'}
		    ]
		  }
		}
		
	}

</script>
