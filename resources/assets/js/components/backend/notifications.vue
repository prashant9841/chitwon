<template>
    <div class="notifications">
        <el-dropdown trigger="click">
            <p type="primary">
                <i class="ti-bell"></i>
                <span class="label">2</span>
            </p>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="notification in notifications">
                    <a :href="notification.link" >{{notification.name}}</a>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
</style>
<script>
// import ElDropdown from 'element-ui'

    export default{
      data() {
		  return {
		    notifications: [
		      { name: 'Dashboard', link: 'Paso'},
		      { name: 'Something Else', link: 'Paso'},
		      { name: 'Another One', link: 'Paso'},
		      { name: 'Dumpper', link: 'Paso'},
		      { name: 'We don\'t get fooled again', link: 'Paso'},
		      { name: 'taso', link: 'Paso'},
		      { name: 'Laso', link: 'Paso'},
		      { name: 'Paso', link: 'Paso'},
		      { name: 'taso', link: 'Paso'},
		    ]
		  }
		},
		components:{
		    // ElDropdown
		}

    }
</script>
