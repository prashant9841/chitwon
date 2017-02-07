<template>
	<div>
		<p  class="messageHeader">Message from our staffs</p>
		<span v-for="item in voicesData">
		<div class="voiceWrapper">
			<div class="empolyeeImage">
				<img :src="item.imgUrl">
			</div>
			<div class="voiceDetails">
				<h3> {{ item.employeeName }} </h3>
				<h5> {{ item.employeePost }} </h5>
				<div class="empMessage">
					{{ item.message }}
				</div>
			</div>
		  </div>
		</span>
	</div>
</template>
<script>
	export default{
		data: function(){
			return{
				voicesData:[
					{imgUrl: 'images/profile.png', 
					employeeName: 'Santosh Samba', 
					employeePost:'General Manager', 
					message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum maxime aliquid eos ut quis cumque. Quibusdam reiciendis eius ad illum vitae eligendi nobis aliquam incidunt sunt iusto, quam quaerat labore veniam, cum nesciunt error? Excepturi impedit facere, recusandae in iure consectetur sed est veritatis voluptatum nobis voluptates esse expedita atque, ipsum fugiat dicta debitis dolor.'},
					{imgUrl: 'images/profile.png', 
					employeeName: 'Santosh Samba', 
					employeePost:'General Manager', 
					message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum maxime aliquid eos ut quis cumque. Quibusdam reiciendis eius ad illum vitae eligendi nobis aliquam incidunt sunt iusto, quam quaerat labore veniam, cum nesciunt error? Excepturi impedit facere, recusandae in iure consectetur sed est veritatis voluptatum nobis voluptates esse expedita atque, ipsum fugiat dicta debitis dolor.'}
				]
			}
		}
	}
</script>