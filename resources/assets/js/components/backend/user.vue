<template>
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
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>

    export default{
        data(){
            return { name: 'MessagesMessagesMessages', link: 'el/paso', image: 'images/logo.png'}
        }
    }
</script>
