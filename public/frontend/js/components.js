
	Vue.component('site-menu', {
	  template: `<ul>
	 				<li v-for="menu in menus">
	 					<a :href="menu.link">{{menu.name}}</a>
	 				</li>
	 			</ul>`,

		 methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      }

	    },
	    data: function () {
		  return {
		    menus: [
		      { name: 'Home', link: 'index.php', index: '1'},
		      { name: 'AllUsers', link: 'users.php', index: '1.1'},
		      { name: 'taso', link: 'Paso', index: '1.2'},
		      { name: 'Laso', link: 'Paso', index: '2'},
		      { name: 'Paso', link: 'Paso', index: '2.1'},
		      { name: 'taso', link: 'Paso', index: '3'},
		      { name: 'Laso', link: 'Paso', index: '3.1'},
		      { name: 'Paso', link: 'Paso', index: '3.1.1'},
		      { name: 'taso', link: 'Paso', index: '4'}
		    ]
		  }
		}
	});

	Vue.component('social-icons', {
	  template: `<ul>
	 				<li v-for="menu in menus">
	 					<a :href="menu.link"><i :class="'fa fa-'+menu.name"></i></a>
	 				</li>
	 			</ul>`,

		 methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      }

	    },
	    data: function () {
		  return {
		    menus: [
		      { name: 'facebook', link: 'index.php', index: '1'},
		      { name: 'twitter', link: 'users.php', index: '1.1'},
		      { name: 'instagram', link: 'Paso', index: '1.2'}
		    ]
		  }
		}
	});

	Vue.component('banner-slider', {
	  template: `
	  	
                <el-carousel :autoplay="false" trigger='clicked' change='changed'>
			      <el-carousel-item v-for="slide in slider" >
			      	<img :src="slide.image" alt="" class="bg-image">
			        <h1>{{slide.title}}</h1>
			        <h3>{{slide.description}}</h3>
			      </el-carousel-item>
			    </el-carousel>
    
			`,

		 methods: {
	      change(key, keyPath) {
	        console.log(key, keyPath);
	      }

	    },
	    data: function () {
		  return {
		    slider: [
		      { title: 'Encounter Tiger', description: 'index.php', image: 'images/img5.jpg'},
		      { title: 'Chitwan National Park', description: 'index.php', image: 'images/img11.jpg'},
		      { title: 'Encounter Tiger', description: 'index.php', image: 'images/img5.jpg'},
		      { title: 'Chitwan National Park', description: 'index.php', image: 'images/img11.jpg'}
		    ]
		  }
		}
	});

	// Vue.component('gallery-slider', {
	//   template: `
	//   		<el-carousel :interval="4000" type="card" height="200px">
	// 		    <el-carousel-item v-for="slide in slider" >
	// 		    	<img :src="slide.image" alt="" />
	// 		      <h3>{{ slide.title }}</h3>
	// 		      <p>{{slide.description}}</p>
	// 		    </el-carousel-item>
	// 		</el-carousel>
	//   	>`,

	// 	 methods: {
	//       handleSelect(key, keyPath) {
	//         console.log(key, keyPath);
	//       }

	//     },
	//     data: function () {
	// 	  return {
	// 	    slider: [
	// 	      { title: 'Encounter Tiger', description: 'index.php', image: 'images/img5.jpg'},
	// 	      { title: 'Chitwan National Park', description: 'index.php', image: 'images/img11.jpg'},
	// 	      { title: 'Chitwan National Park', description: 'index.php', image: 'images/logo.png'},
	// 	      { title: 'Chitwan National Park', description: 'index.php', image: 'images/img7.jpg'}
	// 	    ]
	// 	  }
	// 	}
	// });

	

	Vue.component('intro', {
	  template: `
	  <div>
	  		<h3>{{ title }}</h3>
	  		
	  		<p>{{description}}</p>
	  </div>
	  	`,
	    data: function () {
		  return { title: 'Just when you didnt expect it', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nesciunt numquam, fugit quaerat sed totam rem, incidunt saepe laboriosam consectetur corporis ipsum, doloribus quos optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut earum consequuntur illum praesentium dicta expedita in sed officiis quisquam quod ratione voluptate maxime eveniet quis, cumque, labore ipsa porro saepe excepturi, aperiam dolorum ex rerum.'}
		}
	});

    Vue.component('gallery', {
	    template: `
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
			 
	  	`,

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
	});


    Vue.component('facts', {
	    template: `
	    	<ul class="facts-wrap">
	    		<li v-for="fact in facts">
		    		<a :href="fact.link"><p>{{fact.description}}</p></a>
	    		</li>
	    	</ul>
	  	`,

		 methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      }

	    },
	    data: function () {
		  return {
		    facts: [
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
	});



    Vue.component('testimonials', {
	    template: `

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
	    	

    
	  	`,

		 methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      }

	    },
	    data: function () {
		  return {
		    testimonials: [
		      { title: 'facebook', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, officia asperiores nulla, natus maxime sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore magnam eveniet quasi libero impedit accusamus.', image: 'images/face.jpg', position: 'director, Axle pvt.ltd'},
		      { title: 'facebook', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, officia asperiores nulla, natus maxime sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet est culpa aut molestiae, in amet.', image: 'images/face.jpg', position: 'director, Axle pvt.ltd'},

		    ]
		  }
		}
	});

	Vue.component('contact-info', {
	  template: `<ul>
	  				<li>
	  					{{address}}
	  				</li>
	 				<li>
	 					<a :href="'mailto:'+contact1"><i class="fa fa-phone"></i> {{contact1}}</a>,
	 				</li>
	 				<li>
	 					<a :href="contact1"><i class="fa fa-phone"></i> {{contact1}}</a>
	 				</li>
	 				<li>
	 					<i class="fa fa-envelope"></i>
	 					<a :href="email">{{email}}</a
	 				</li>
	 			</ul>`,

		 methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      }

	    },
	    data: function () {
		  return { contact1: '9845652152', contact2: '9856486515', 'email': 'example@domain.com', address: 'Sauraha Chitwan Nepal' }
		}
	});

	Vue.component('copyright', {
		template: `
			<p>&copy; {{statement}}</p>
		`,
		data: function () {
		  return { statement: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' }
		}

	});