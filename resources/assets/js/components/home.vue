<template>
	<div id="main-content" class="home-page">
		<banner-slider></banner-slider>
		<intro></intro>
		<package></package>
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
		}
	}
</script>