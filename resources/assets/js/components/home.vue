<template>
	<div id="main-content" class="home-page">
		<banner-slider></banner-slider>
		<package></package>
		<intro></intro>
	</div>
</template>

<script>
import Slider from './bannerSlider.vue';
import Intro from './intro.vue';
import Package from './package.vue';

	export default{
		components:{
			Package, Intro, Slider
		}
	}
</script>