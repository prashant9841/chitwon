<template>
	<section class="about">
		<div class="aboutPart">
	   		<about-company></about-company>
	   		<div class=""></div>
	   	</div>
	   	<div class="commentPart">
	   		<voices></voices>
	   	</div>
	   	<div class="c"></div>
   	</section>

</template>
<script>
	import AboutCompany from './aboutcompany.vue';
	import Voices from './voices.vue';
	
	export default{
		components:{
			AboutCompany, Voices
		}

	}
</script>