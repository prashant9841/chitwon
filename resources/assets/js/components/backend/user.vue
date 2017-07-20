<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="user">
        <el-dropdown  trigger="click">
            <p type="primary">
                <i class="ti-user"></i>
            </p>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item> <div class="img-wrap"> <img v-bind:src="image" alt="" /></div></el-dropdown-item>
                <el-dropdown-item> <a href="profile"> {{name}}</a></el-dropdown-item>
                <el-dropdown-item> <a href="profile/settings"> settings</a></el-dropdown-item>
                <el-dropdown-item> <a href="/logout"> logout</a></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
// import ElDropdown from 'element-ui';
// import ElDropdownMenu from 'element-ui';
// import ElDropdownItem from 'element-ui';

    export default{
        data(){
            return {

                name: [], 
                link: 'el/paso', 
                image: []
            }
        },
        mounted(){
            this.getUser();
        },
        components:{
            // ElDropdown,ElDropdownMenu,ElDropdownItem
        },
        methods: {
           getUser(){
                this.$http.get('/users/current')
                .then(response => {
                        this.name = response.data.data.name;
                        this.image=response.data.data.image;
                    });
            }
        }

    }
</script>
