
<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="title" prop="title">
            <el-input type="text" placeholder="Title" v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="description" prop="description">
            <el-input placeholder="Description" type="textarea" v-model="form.description">
            </el-input>
        </el-form-item>


        <el-form-item label="short-description" prop="shortdescription">
            <el-input placeholder="Short Description" type="textarea" v-model="form.shortdescription"></el-input>
        </el-form-item>
         <div class="block">
            <span class="demonstration">End Date </span>
            <el-date-picker
                    v-model="form.published_on"
                    type="datetime"
                    placeholder="Select date and time">
            </el-date-picker>
        </div>
        <div class="block">
            <imgupload></imgupload>
        </div>

        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">Create</el-button>
            <el-button @click="resetForm('form')">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default{
       data() {
	      return {
	        form: {
	            title: '',
                description: '',
	            published_on: '',
                errors:[],
	        },
	        rules: {
	          title: [
	            { required: true, message: 'Please input Title', trigger: 'blur' },
                { min: 3, message: 'Title must be of min 3 characters', trigger: 'blur' }
              ],
              description: [
                { required: true, message: 'Please input Description', trigger: 'blur' },
	            { min: 160, message: 'Title must be of min 160 characters', trigger: 'blur' }
              ],
              published_on: [
	          	{ required: true, message: 'Please provide a date', trigger: 'blur' }
	          ]
	        }
	      };
	    },
	    mounted(){
             console.log('this is my editor', this.editor);
	    },
	    methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('/api/v1/post/create')
                        .then(response=>{
                            this.errors = response.data;
                        }, failCallbacks)
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
            },
	    },
        
}
</script>
