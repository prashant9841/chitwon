<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="title" prop="title">
          <imgupload></imgupload>
        </el-form-item>

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
	            image: '',
                errors:[],
	        },
	        rules: {
	        
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
                        this.$http.post('/api/v1/gallery/create')
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
