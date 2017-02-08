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
			      { name: 'Users',link: '/dashboard/users', index: '1'},
			      { name: 'Pages', link: '/dashboard/pages', index: '1.1'},
			      { name: 'Post', link: '/dashboard/posts', index: '1.2'},
			      { name: 'Media', link: '/dashboard/gallery', index: '2'},
			      { name: 'Events', link: '/dashboard/events', index: '2.1'},
			      { name: 'taso', link: 'Paso', index: '3'},
			      { name: 'Laso', link: 'Paso', index: '3.1'},
			      { name: 'Paso', link: 'Paso', index: '3.1.1'},
			      { name: 'taso', link: 'Paso', index: '4'}
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
