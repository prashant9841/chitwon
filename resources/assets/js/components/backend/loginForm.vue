<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="email" prop="email">
            <el-input type="email" placeholder="Email" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
            <el-input type="password" v-model="form.password" placeholder="Password">
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">Login</el-button>
            <el-checkbox v-model="form.checked">Remember Me?</el-checkbox>

        </el-form-item>
    </el-form>
</template>

<script>
//import {ElForm} from 'element-ui'
    export default{
        data(){
            return {
		        form: {
		          email: '',
		          password: '',
		          checked: false

		        },
		        rules: {
		          email: [
		            { required: true, message: 'Please input email address', trigger: 'blur' },
		      		{ type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
		          ],
		          password: [
		          	{ required: true, message: 'Please input password', trigger: 'blur' },
		            { min: 6, message: 'Password should be 6 characters', trigger: 'blur' }
		          ]
		        }
		      }
        },
         methods: {
		      submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          if (valid) {
		        		this.$message({
				          message: 'Login Sucess',
				          type: 'success'
				        });
		          } else {

				        this.$message({
				          message: 'Login Failed!',
				          type: 'error'
				        });
		            return false;
		          }
		        });
		      },
		      resetForm(formName) {
		        this.$refs[formName].resetFields();
		      }
	    	},
	    	components:{
	    	//ElForm
	    	}
    }
</script>
