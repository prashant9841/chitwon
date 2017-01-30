<template>
	<div class="package-wrap">
			    <el-row type="flex" class="row-bg" justify="center">
				    <el-col :span="6" li v-for="(image,key) in gallery1" >
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
			    <el-row type="flex" class="row-bg" justify="center" >
				    <el-col :span="6" li v-for="(image,key) in gallery2">
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
							</div>
			    			<h4>{{image.title}} </h4>
			    		</a>
			    	
				    </el-col>
				    
				</el-row>
			    <el-row type="flex" class="row-bg" justify="center" >
				    <el-col :span="6" li v-for="(image,key) in gallery3">
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
							</div>
			    			<h4>{{image.title}} </h4>
			    		</a>
			    	
				    </el-col>
				    
				</el-row>
		    </div>
</template>
<script>
	export default{

		methods: {

	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      },
	     

	    },
	    data: function () {
		  return {
		  	// fronte
		    gallery1: [
		      { title: 'facebook', link: 'index.php', image: 'images/img1.jpg'},
		      { title: 'facebook', link: 'index.php', image: 'images/img2.jpg'},
		      { title: 'facebook', link: 'index.php', image: 'images/img3.jpg'},
		      { title: 'facebook', link: 'index.php', image: 'images/img4.jpg'}
		    ],
		    gallery2: [
		      { title: 'facebook', link: 'index.php', image: 'images/img5.jpg'},
		      { title: 'facebook', link: 'index.php', image: 'images/img6.jpg'},
		      { title: 'facebook', link: 'index.php', image: 'images/img7.jpg'}
		    ],
		    gallery3: [
		      { title: 'facebook', link: 'index.php', image: 'images/img8.jpg'},
		      { title: 'facebook', link: 'index.php', image: 'images/img9.jpg'},
		      { title: 'facebook', link: 'index.php', image: 'images/img10.jpg'},
		      { title: 'facebook', link: 'index.php', image: 'images/img12.jpg'}
		    ],

		  }
		}
	}
</script>

		 