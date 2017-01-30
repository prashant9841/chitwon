<template>
	<package></package>
	<!-- <banner-slider></banner-slider> -->
	<!-- <intro></intro> -->
</template>

<script>
import Slider from './bannerSlider.vue';
import Intro from './intro.vue';
import Package from './package.vue';

	export default{
		components:{
			Package
		},
		data:function(){
			return {
				data: []
			}
		}
	}
</script>