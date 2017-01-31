<template>
	<ul>
		<li v-for="menu in menus">
			<a :href="menu.link">{{menu.name}}</a>
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
		      { name: 'Home', link: '/', index: '1'},
		      { name: 'About', link: 'about', index: '1.1'},
		      { name: 'Testimonial', link: 'testimonial', index: '1.2'},
		      { name: 'Facts', link: 'facts', index: '2'},
		      { name: 'Package', link: 'package', index: '2.1'}
		    ]
		  }
		}
	};

	
</script>
	