<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <el-table
              :data="users"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="Date"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="Name"
                width="180">
              </el-table-column>
              <el-table-column
                prop="usertype"
                label="User Type">
              </el-table-column>
              <el-table-column
                  fixed="right"
                  label="Operations"
                  width="120">
                  <template scope="scope">
                    <el-button @click="handleClick" prop="link" type="text" size="small"><a :href=link>Detail</a></el-button>
                    <el-button type="text" size="small">Edit</el-button>
                  </template>
                </el-table-column>
            </el-table>
</template>

<script>
// import ElDropdown from 'element-ui';
// import ElDropdownMenu from 'element-ui';
// import ElDropdownItem from 'element-ui';

    export default{
        data(){
            return {
              users: [{
                name: 'Tom',
                usertype: 'student',
                date: '2016-05-03',
                link: 'lorem'
              }, {
                date: '2016-05-02',
                name: 'Tom',
                usertype: 'student',
                link: 'lorem'
              }, {
                date: '2016-05-04',
                name: 'Tom',
                usertype: 'student',
                link: 'lorem'
              }, {
                date: '2016-05-01',
                name: 'Tom',
                usertype: 'student',
                link: 'lorem'
              }]
            }
        },
        components:{
            // ElDropdown,ElDropdownMenu,ElDropdownItem
        },
        methods: {
            handleClick() {
                if (this.active++ > 2) this.active = 0;
            }

        }
    }
</script>
