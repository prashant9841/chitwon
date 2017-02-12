<template>
	<div class="user-profile">
		<el-row :gutter="20">
			<el-col :span="6">
				<el-card class="box-card">				  	
				  	<div class="userdiv">
				  		<img :src="user.image" alt="">
				  		<h3>{{user.name}}</h3>
				  	</div>
				  	<div class="navs">
				  		<ul>
				  			<li><a href="/dashboard/profile">Profile</a></li>
				  			<li><a href="/dashboard/profile/edit">Edit Profile</a></li>
				  			<li><a href="/dashboard/profile/settings">Settings</a></li>
				  		</ul>
				  	</div>
				</el-card>
			</el-col>
		    <el-col :span="18">
		  		<el-card class="box-card">
				  	<div class="card-head">
				  		<h4>Your profile information</h4>
				  	</div>
				  	<el-row :gutter="10">
				  		<el-col :span="12">
				  			<p>Full Name: {{user.name}}</p>
				  		</el-col>	
				  		<el-col :span="12">
				  			<p>Email: {{user.email}}</p>				  			
				  		</el-col>	
				  	</el-row>
				</el-card>
		    </el-col>
		</el-row>
	</div>	
</template>

<script>
	export default {
		data() {
			return {
				user:{
					name: 'User Name',
					image: 'asdasdasdas',
					email: 'info@domain.com',
					phone: '98XXXXXXXXX'
				}
			}
		}
	}
</script>