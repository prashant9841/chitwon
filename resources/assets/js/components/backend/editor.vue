<template>
	<ckeditor id="editor" v-model="content" :height="'300px'" :toolbar="[['Format'], ['Bold', 'Italic'], ['Undo', 'Redo']]"></ckeditor>
</template>

<script>
	import Ckeditor from 'vue-ckeditor2'
	export default{
		data(){
			return {
				content: "<h2>Somewhere OVer the rainbow</h2>",
				author: "Amy Winehouse"
			}
		},
		  components: { Ckeditor }
	}


</script>