<template>
  <div>
    <el-button class="el-button" type="text" v-if="buttonShow" @click="dialogVisible = true">{{ button }}</el-button>
    <el-dialog :title="header" v-model="dialogVisible" size="tiny">
      <div v-if="posts">
        <post-form></post-form>
      </div>
      <div v-if="pages">
        <page-form></page-form>
      </div>
      <div v-if="media">
        <media-form></media-form>
      </div>
     <!--  <span slot="footer" class="dialog-footer">
       <el-button @click="dialogVisible = false">Cancel</el-button>
       <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
     </span> -->
    </el-dialog>
</div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        trigger: 'Model'
      }
    },
    props:{
      button:{
        type:[String],
        default: "Add"
      },
      header:{
        type:[String],
        default: "Title"
      },
      posts:{
        type:[String,Boolean,Number],
        default: false,
        required:false
      },
      media:{
        type:[String,Boolean,Number],
        default: false,
        required:false
      },
      pages:{
        type:[String,Boolean,Number],
        default: false,
        required:false
      },
      buttonShow:{
        type:[Boolean,Number],
        default: false,
        required:false
      }
    },
    methods:{

    }
  };
</script>