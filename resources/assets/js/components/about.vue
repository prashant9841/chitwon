<template>
	<section class="about">
   		<div class="wrap">
	   		<div class="logo-div">
	   			<img src="images/img7.jpg" alt="">
	   		</div>
	   		<h3>{{ title }}</h3>	
			<p>{{description}}</p>
   		</div>
   	</section>

</template>
<script>
	
	export default{

		data: function () {
		  return { 
		  	title: 'About Tiger Encounter', 
		  	description: 'Axle Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nesciunt numquam, fugit quaerat sed totam rem, incidunt saepe laboriosam consectetur corporis ipsum, doloribus quos optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut earum consequuntur illum praesentium dicta expedita in sed officiis quisquam quod ratione voluptate maxime eveniet quis, cumque, labore ipsa porro saepe excepturi, aperiam dolorum ex rerum.'
			}
		}
	}
</script>