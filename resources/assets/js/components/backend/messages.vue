<template>

    <div class="messages">
        <el-dropdown  trigger="click">
            <p type="primary">
                <i class="ti-email"></i>
            </p>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="message in messages">
                    <a :href="message.link" >{{message.name}}</a>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>

</template>

<script>
// import {ElDropdownItem,ElDropdown} from 'element-ui';

    export default{
        data(){
            return {
                messages: [
                  { name: 'MessMessages', link: 'Paso'},
                  { name: 'Nessages', link: 'Paso'},
                  { name: 'LAsoooo', link: 'Paso'},
                  { name: 'Laso', link: 'Paso'},
                  { name: 'Paso', link: 'Paso'},
                  { name: 'taso', link: 'Paso'},
                  { name: 'Laso', link: 'Paso'},
                  { name: 'Paso', link: 'Paso'},
                  { name: 'taso', link: 'Paso'},
                ]
		  }
        },
        components:{
            // 'el-dropdown':ElDropdown,'el-dropdown-item':ElDropdownItem
        }

    }
</script>
