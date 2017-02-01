<template>
	<div>
		<span v-for="item in voicesData">
			<div class="empolyeeImage">
				<img :src="item.imgUrl">
			</div>
			<div class="voiceDetails">
				<h3> {{ item.employeeName }} </h3>
				<h4> {{ item.employeePost }} </h4>
				<div>
					{{ item.message }}
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
					{imgUrl: 'images/profile.png', employeeName: 'santosh samba', employeePost:'General Manager', message: 'message displayed successfully'}
				]
			}
		}
	}
</script>