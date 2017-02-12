<template>
	<div class="navs">
  		<ul>
	  		<li><router-link to="/dashboard/profile/">Profile</router-link></li>
	  		<li><router-link to="/dashboard/profile/edit">Edit Profile</router-link></li>
	  		<li><router-link to="/dashboard/profile/settings">Setting</router-link></li>
  		</ul>
  		<router-view></router-view>
  	</div>
</template>

<script>
	export default{
		name: 'profilesidemenu',
		data(){
			return{

			}
		}
	}
</script>