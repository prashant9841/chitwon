<template>
	<section class="testimonials">
   		<div class="wrap">
   			<div class="section-title">
		   		<h1>Feedback from our guests</h1>
		   		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
   				
   			</div>
   			
	   		<el-carousel trigger="click" >
		      <el-carousel-item v-for="testimonial in testimonials" >
		        	<div class="1 img-div banner-content">
		             <img :src="testimonial.image" alt="" />
		            </div>
		            <div class="2 banner-content title text-wrap">
		                <h4>{{testimonial.title}} </h4>
		                <p>{{testimonial.position}}</p>
		            </div>
		            <div class="3 banner-content text-wrap">
		                <p>{{testimonial.description}}</p>
		            </div>
		      </el-carousel-item>
		    </el-carousel>
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
		    testimonials: [
		      { title: 'facebook', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, officia asperiores nulla, natus maxime sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore magnam eveniet quasi libero impedit accusamus.', image: 'frontend/images/face.jpg', position: 'director, Axle pvt.ltd'},
		      { title: 'facebook', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, officia asperiores nulla, natus maxime sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet est culpa aut molestiae, in amet.', image: 'frontend/images/face.jpg', position: 'director, Axle pvt.ltd'},

		    ]
		  }
		}
	}
</script>
