<template>
	<el-form ref="form" :model="form" :rules="rules" label-width="120px">
	  <el-form-item label="Full Name" prop="name">
	    <el-input type="text" placeholder="Full Name" v-model="form.name"></el-input>
	  </el-form-item>
	  <el-form-item label="email" prop="email">
	    <el-input type="email" placeholder="Email" v-model="form.email"></el-input>
	  </el-form-item>
	  <el-form-item label="Message" prop="message">
	    <el-input type="textarea" v-model="form.message" placeholder="Message">
	    </el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="submitForm('form')">Send</el-button>
	    <el-checkbox v-model="form.checked">Subscribe to our news letter</el-checkbox>
	    
	  </el-form-item>
	</el-form>
</template>
<script>
	export default{

		data() {
	      return {
	        form: {
	          name: '',
	          email: '',
	          message: '', 
	          checked: true
	          
	        },
	        rules: {
	          name: [
	            { required: true, message: 'Please input Your Full Name', trigger: 'blur' }
	          ],
	          email: [
	            { required: true, message: 'Please input email address', trigger: 'blur' },
	      		{ type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
	          ],
	          message: [
	          	{ required: true, message: 'Please input your message', trigger: 'blur' },
	            { min: 10, message: 'Please enter atleast 10 characters', trigger: 'blur' }
	          ]
	        }
	      };
	    },

	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {            
	        		this.$message({
			          message: 'Message Sent!',
			          type: 'success'
			        });
	          } else {
	            
			        this.$message({
			          message: 'sending Failed!',
			          type: 'error'
			        });
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