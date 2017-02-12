<template>
    <div class="">
        <bread-crumb :links="breadcrumb"></bread-crumb>
        <dashboard-title title="All Users" button="Add a user" link="/dashboard/users/add" button-show=0></dashboard-title>
        <el-table :data="users"style="width: 100%">
            <el-table-column prop="email" label="eMail"></el-table-column>
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="created_at.date" label="Creation Date"></el-table-column>
            <el-table-column  fixed="right" label="Operations" width="120">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small"><a>Detail</a></el-button>
                    <el-button type="text" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default{
        data(){
            return {
              users: [],
              breadcrumb:[]
            }
        },
        /**
         * Prepare the component (Vue 1.x).
         */
        ready() {
            this.prepareComponent();
        },

        /**
         * Prepare the component (Vue 2.x).
         */
        mounted() {
            this.prepareComponent();
        },

        components:{
            // ElDropdown,ElDropdownMenu,ElDropdownItem
        },
        methods: {
            prepareComponent(){
                this.getUsers();
                this.getBreadCrumb();
            },
            getBreadCrumb(){
                this.breadcrumb= [
                    {
                      title:'Dashboard',
                      link: '/dashboard/'   
                    },
                    {
                      title:'Users',
                      link: '/dashboard/users'   
                    }
                ]
            },

            handleClick() {
                if (this.active++ > 2) this.active = 0;
            },
            getUsers(){
              this.$http.get('/api/v1/users')
                        .then(response => {
                            var data = response.data;
                            //Getting the data:
                            this.users = data.data;
                        });
            },
            removeUsers(id){
              this.$http.delete('/api/v1/users/'+id)
                        .then(response => {
                            response.data;
                            //TODO:: Add effects of removing the data
                        });
            },
            updateUsers(id){
              this.$http.put('/api/v1/users/'+id)
                        .then(response => {
                            response.data;
                            //TODO:: Add effects of removing the data
                        });
            },



        }
    }
</script>
