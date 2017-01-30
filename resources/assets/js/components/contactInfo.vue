<template>
	<ul>
		<li>
			{{address}}
		</li>
		<li>
			<a :href="'mailto:'+contact1"><i class="fa fa-phone"></i> {{contact1}}</a>,
		</li>
		<li>
			<a :href="contact1"><i class="fa fa-phone"></i> {{contact1}}</a>
		</li>
		<li>
			<i class="fa fa-envelope"></i>
			<a :href="email">{{email}}</a
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
	    data: function () {
		  return { contact1: '9845652152', contact2: '9856486515', 'email': 'example@domain.com', address: 'Sauraha Chitwan Nepal' }
		}
		
	}
</script>