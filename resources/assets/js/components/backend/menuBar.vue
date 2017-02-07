<template>
    <div>
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="vertical" @select="handleSelect">
            <el-menu-item :index="menu.index" v-for="menu in menus"><a :href="menu.link" >{{menu.name}}</a></el-menu-item>

        </el-menu>
    </div>
</template>

<script>

// import {ElMenu,ElMenuItem } from 'element-ui';

    export default{
       data() {
			  return {
			    menus: [
			      { name: 'Home',link: 'index.php', index: '1'},
			      { name: 'AllUsers', link: 'users.php', index: '1.1'},
			      { name: 'taso', link: 'Paso', index: '1.2'},
			      { name: 'Laso', link: 'Paso', index: '2'},
			      { name: 'Paso', link: 'Paso', index: '2.1'},
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
