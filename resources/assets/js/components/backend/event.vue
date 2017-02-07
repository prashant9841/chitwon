<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="title" prop="title">
            <el-input type="text" placeholder="Title" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="short-description" prop="shortdescription">
            <el-input placeholder="Short Description" type="textarea" v-model="form.shortdescription"></el-input>
        </el-form-item>
        <div class="block">
            <span class="demonstration">Start </span>
            <el-date-picker
                    v-model="form.start"
                    type="datetime"
                    placeholder="Select date and time">
            </el-date-picker>
        </div>
        <div class="block">
            <span class="demonstration">End Date </span>
            <el-date-picker
                    v-model="form.end"
                    type="datetime"
                    placeholder="Select date and time">
            </el-date-picker>
        </div>
        <el-form-item label="description" prop="description">
            <el-input placeholder="Description" type="textarea" v-model="form.description">
            </el-input>
        </el-form-item>
        <imgupload></imgupload>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">Create</el-button>
            <el-button @click="resetForm('form')">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    //import {ElButton, ElFormItem,DatePicker,ElForm } from 'element-ui'

    export default{
       data() {
	      return {
            form: {
		        start: '',
		        end: '',
	            title: '',
	            shortdescription: '',
	            description: ''

	        },
	        rules: {
	          title: [
	            { required: true, message: 'Please input Title', trigger: 'blur' },
	            { min: 3, message: 'Title must be of min 3 characters', trigger: 'blur' }
	          ],
	          shortdescription: [
	            { required: true, message: 'Please input Short descriptions', trigger: 'blur' }
	          ],
	          description: [
	          	{ required: true, message: 'Please input Description', trigger: 'blur' }
	          ]
	        }
	      };
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
		    }
    }
</script>
