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
				  		<h4>Your accounts settings</h4>
				  	</div>
				  	
			  		<el-col :span="24">
			  			<h4>Change your password</h4>
			  			<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
						  <el-form-item label="Old Password" prop="oldpass">
						    <el-input type="password" v-model="ruleForm2.oldpass" auto-complete="off"></el-input>
						  </el-form-item>
						  <el-form-item label="Password" prop="pass">
						    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
						  </el-form-item>
						  <el-form-item label="Confirm" prop="checkPass">
						    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
						  </el-form-item>
						  <el-form-item>
						    <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
						    <el-button @click="resetForm('ruleForm2')">Reset</el-button>
						  </el-form-item>
						</el-form>
			  							  			
			  		</el-col>	
				  	
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
				},
				ruleForm2: {
					oldpass: '',
		          pass: '',
		          checkPass: ''
		        },
		        rules2: {
		          oldpass: [
		            { validator: validaePass, trigger: 'blur' }
		          ],
		          pass: [
		            { validator: validaePass, trigger: 'blur' }
		          ],
		          checkPass: [
		            { validator: validaePass2, trigger: 'blur' }
		          ]
		        }
			}
		    var validaePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('Please input the password'));
		        } else {
		          if (this.ruleForm2.checkPass !== '') {
		            this.$refs.ruleForm2.validateField('checkPass');
		          }
		          callback();
		        }
		    };
		    var validaePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('Please input the password again'));
		        } else if (value !== this.ruleForm2.pass) {
		          callback(new Error('Two inputs don\'t match!'));
		        } else {
		          callback();
		        }
		    };
		},
		methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('submit!');
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
	    }
	}
</script>