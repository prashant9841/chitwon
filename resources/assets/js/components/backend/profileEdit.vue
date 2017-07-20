<template>
	<div class="user-profile">
		<el-row :gutter="20">
			<el-col :span="6">
				<el-card class="box-card">				  	
				  	<div class="userdiv">
				  		<img :src="user.image" alt="">
				  		<h3>{{user.name}}</h3>
				  	</div>
				  	<!-- profile sidebar -->
					<profile-SideMenu></profile-SideMenu>
				</el-card>
			</el-col>
		    <el-col :span="18">
		  		<el-card class="box-card">
				  	<div class="card-head">
				  		<h4>Edit Your profile information</h4>
				  		<el-form :model="user" :rules="rules" ref="user" label-width="120px" class="demo-ruleForm">
						  <el-form-item label="Name" prop="name">
						    <input type="text" v-model="user.name" class="el-input__inner" :value="user.name" auto-complete="off" /> 
						  </el-form-item>

						  <el-form-item label="Email" prop="email">
						    <input type="text" v-model="user.email" class="el-input__inner" :value="user.email" auto-complete="off" /> 
						  </el-form-item>

						  <el-form-item label="Phone" prop="phoneNum">
						    <input type="text" v-model="user.phoneNum" class="el-input__inner" :value="user.phoneNum" auto-complete="off" /> 
						  </el-form-item>

						  <el-form-item>
						    <el-button type="primary" @click="submitForm('user')">Submits</el-button>
						    <el-button type="primary">Reset</el-button>
						  </el-form-item>

						</el-form>
				  	</div>
				  	<el-row :gutter="10">
				  		
				  	</el-row>
				</el-card>
		    </el-col>
		</el-row>
	</div>	
</template>

<script>
import SideMenuProfile from './profileSideMenu.vue'

	export default {
		name: 'profileedit',
		components: {SideMenuProfile},
		data() {
			return {
				user:{
					name: 'User Name',
					phoneNum: '98092342344',
					image: 'asdasdasdas',
					email: 'info@domain.com',
					
				},
				rules:{
					name: [{ required: true, message: 'Name should not be empty', trigger: 'blur' }],
					email: [{ required: true, message: 'Email should not be empty', trigger: 'blur' }],
					phoneNum: [{ required: true, message: 'eoor', trigger: 'blur' }]
				}
				
			}
		},
		methods:{
			submitForm: function(user){
				this.$refs[user].validate((valid) => {

				});
			}
		}
	}
</script>