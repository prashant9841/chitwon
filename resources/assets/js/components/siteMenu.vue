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
		      { name: 'Our Activities', link: 'package', index: '2.1'},
		      { name: 'Chitwan National park', link: 'facts', index: '2'},
		      { name: 'Client\'s Words', link: 'testimonial', index: '1.2'},
		      { name: 'Blog', link: 'blog', index: '2.1'},
		      { name: 'Contact Us', link: 'contact', index: '2.1'}
		    ]
		  }
		}
	};

	
</script>
	