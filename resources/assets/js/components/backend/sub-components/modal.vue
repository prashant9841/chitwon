<template>
  <el-button type="text" @click="dialogVisible = true">{{trigger}}</el-button>

  <el-dialog title="Tips" v-model="dialogVisible" size="tiny">
    <span>{{modalTitle}}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        trigger: 'Model',
        modalTitle: 'Modal title'
      }
    }
  };
</script>