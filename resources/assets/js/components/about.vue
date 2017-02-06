<template>
	<section class="about">
		<div class="aboutPart">
	   		<about-company></about-company>
	   		<div class="faqWrapper">
	   			<div class="faqPart">
	   				<faq></faq>
	   			</div>
	   			<message-comp></message-comp>
	   		</div>
	   	</div>
	   	<div class="commentPart">
	   		<voices></voices>
	   	</div>
	   	<div class="c"></div>
   	</section>

</template>
<script>
	import AboutCompany from './aboutcompany.vue';
	import Message from './comp_message.vue';
	import Faq from './FAQ.vue';
	import Voices from './voices.vue';
	
	export default{
		components:{
			AboutCompany, Voices, Faq, Message
		}

	}
</script>