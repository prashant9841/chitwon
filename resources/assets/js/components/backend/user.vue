<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="user">
        <el-dropdown  trigger="click">
            <p type="primary">
                <i class="ti-user"></i>
            </p>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item> <div class="img-wrap"> <img v-bind:src="image" alt="" /></div></el-dropdown-item>
                <el-dropdown-item> <a v-bind:href="link"> {{name}}</a></el-dropdown-item>
                <el-dropdown-item> <a v-bind:href="link"> settings</a></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import ElDropdown from 'element-ui';
import ElDropdownMenu from 'element-ui';
import ElDropdownItem from 'element-ui';

    export default{
        data(){
            return { name: 'MessagesMessagesMessages', link: 'el/paso', image: 'frontend/images/logo.png'}
        },
        components:{
            ElDropdown,ElDropdownMenu,ElDropdownItem
        }
    }
</script>
