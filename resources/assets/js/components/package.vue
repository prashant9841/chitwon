<template>
	<section class="gallery">
		<div class="overlay-wrap">
			   			
   		</div> 
   		<div class="wrap">	
   			<div class="section-title">		   				
		   		<h1 v-if="package-title">View Our Gallery</h1>
		   		<p>{{ description }}</p>
   			</div>	 
			<div class="package-wrap">
			    <el-row type="flex" class="row-bg" justify="center" v-for="package in packages">
				    <el-col :xs="12" :sm="6" :md="4" :lg="3" li v-for="(image,key) in package" >
					    <a :href="image.link">
					    	<svg class="clip-svg">
							  <defs>
							    <clipPath id="polygon-clip-hexagon" clipPathUnits="objectBoundingBox">
							      <polygon points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25" />
							    </clipPath>
							  </defs>
							</svg>


							<div class="polygon-each-img-wrap">
							  <img :src="image.image" alt="demo-clip-heptagon" class="polygon-clip-hexagon">
			    				<h4>{{image.title}} </h4>
							</div>
			    		</a>
			    	
				    </el-col>
				</el-row>
		    </div>
	    </div>
	</section>
</template>
<script>
	export default{
 		props:{
	     	description:{
	     		type: String,
	     		required: false,
	     		default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, facere.'
	     	},
	     	"package-title":{
	     		type: [Boolean, String, Number],
	     		required: false,
	     		default: false,
	     	},
	     	packages:{
	     		type: [Array,Object],
	     		required: true,
	     	}
	    },
	    
		methods: {

	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      }
	     

	    }
	}
</script>

		 