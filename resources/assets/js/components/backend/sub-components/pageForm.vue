<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="title" prop="title">
            <el-input type="text" placeholder="Title" v-model="form.title"></el-input>
        </el-form-item>
       
        <el-form-item label="description" prop="description">
            <el-input placeholder="Description" type="textarea" v-model="form.description">
            </el-input>
        </el-form-item>
       <!-- <imgupload></imgupload>-->
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
                errors:[],
	        },
	        rules: {
	          title: [
	            { required: true, message: 'Please input Title', trigger: 'blur' },
	            { min: 3, message: 'Title must be of min 3 characters', trigger: 'blur' }
	          ],
	          description: [
	          	{ required: true, message: 'Please input Description', trigger: 'blur' }
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
                        this.$http.post('/api/v1/pages/create')
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
