<template>
	<div id="main-content" class="contact-page">
		<div class="wrap">			
			<el-row :gutter="10">
				<el-col :xs="24" :sm="12" class="contact-info">
					<contact-info></contact-info>   
				</el-col>
			  	<el-col :xs="24" :sm="12" class="contact-form">
					<contact-form></contact-form>   
			  	</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
import contactInfo from './contactInfo.vue';
import contactForm from './contactForm.vue';
// import googleMap from './map.vue';
// import comments from './comments.vue';

	export default {
		components: {
			contactInfo, contactForm
		}
		
	}
</script>