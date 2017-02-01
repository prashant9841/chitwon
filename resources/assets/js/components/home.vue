<template>
	<div id="main-content" class="home-page">
		<banner-slider></banner-slider>
		<intro></intro>
		<package :description="description" title=1></package>
		<facts></facts>	
		<testimonial></testimonial>
	</div>
</template>

<script>
import Slider from './bannerSlider.vue';
import Intro from './intro.vue';
import Package from './package.vue';
import Facts from './facts.vue';
import Testimonial from './testimonial.vue';

	export default{
		components:{
			Package, Intro, Slider, Facts, Testimonial
		},
		// data(){
		// 	return {
		// 		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat mollitia doloribus eos, voluptatum dicta assumenda laudantium. Consectetur atque ducimus perspiciatis, minus enim et vero, repellendus!',
		// 		packages:{
		// 			gallery1: [
		// 				{ title: 'twitter', link: 'index.php', image: 'frontend/images/img1.jpg'},
		// 				{ title: 'linkedIn', link: 'index.php', image: 'frontend/images/img2.jpg'},
		// 				{ title: 'facebook', link: 'index.php', image: 'frontend/images/img3.jpg'},
		// 				{ title: 'facebook', link: 'index.php', image: 'frontend/images/img4.jpg'}
		// 			],
		// 			gallery2: [
		// 				{ title: 'facebook', link: 'index.php', image: 'frontend/images/img5.jpg'},
		// 				{ title: 'facebook', link: 'index.php', image: 'frontend/images/img6.jpg'},
		// 				{ title: 'facebook', link: 'index.php', image: 'frontend/images/img7.jpg'}
		// 			],
		// 			gallery3: [
		// 				{ title: 'facebook', link: 'index.php', image: 'frontend/images/img8.jpg'},
		// 				{ title: 'facebook', link: 'index.php', image: 'frontend/images/img9.jpg'},
		// 				{ title: 'facebook', link: 'index.php', image: 'frontend/images/img10.jpg'},
		// 				{ title: 'facebook', link: 'index.php', image: 'frontend/images/img12.jpg'}
		// 			],
		// 	   	}
		// 	}
		// }
	}
</script>