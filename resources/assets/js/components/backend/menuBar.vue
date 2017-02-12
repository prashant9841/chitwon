<template>
    <div>
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="vertical" @select="handleSelect">
            <el-menu-item :index="menu.index" v-for="menu in menus"><router-link :to="menu.link" >{{menu.name}}</router-link></el-menu-item>

        </el-menu>
    </div>
</template>

<script>

// import {ElMenu,ElMenuItem } from 'element-ui';

    export default{
       data() {
			  return {
			    menus: [
			      { name: 'Dashboard',link: '/dashboard', index: '1'},
			      { name: 'Pages', link: '/dashboard/pages', index: '3'},
			      { name: 'Post', link: '/dashboard/posts', index: '4'},
			      { name: 'Media', link: '/dashboard/gallery', index: '5'},
			      { name: 'Events', link: '/dashboard/events', index: '6'},
			      { name: 'Profile', link: '/dashboard/profile', index: '7'},
			      { name: 'Users', link: '/dashboard/users', index: '2'},
			      { name: 'Editor', link: '/dashboard/editor', index: '2'},

			    ]
			  }
			},
			methods:{
			    handleSelect(key,value){
			        console.log(value);
			    }
			},
		components:{
			    // 'el-menu':ElMenu, 'el-menu-item':ElMenuItem
			}

    }
</script>
