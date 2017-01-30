<template>
	<ul>
		<li v-for="menu in menus">
			<a :href="menu.link"><i :class="'fa fa-'+menu.name"></i></a>
		</li>
	</ul>
</template>
<script>
export default{
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}

    },
    data() {
	  return {
	    menus: [
	      { name: 'facebook', link: 'index.php', index: '1'},
	      { name: 'twitter', link: 'users.php', index: '1.1'},
	      { name: 'instagram', link: 'Paso', index: '1.2'}
	    ]
	  }
	}
}
 </script>
