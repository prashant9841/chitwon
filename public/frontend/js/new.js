
	Vue.component('new-slider', {
	  template: `<ul class="newslider">
	 				<li v-for="slide in slider">
	 					<div class="wrap">

	 						<img :src="slide.image" alt="" v-bind:style="slide.styles" />
	 					</div>
	 				</li>
	 			</ul>`,

		
	 
		data() {
		  return {
			value : 1,
		    slider: [
		    	{
		    		title: 'New slider',
		    		image: 'images/newslider/sun.png',
		    		styles: {
		    			'z-index': '9',
		    			'width': '200px',
		    			'left': '99px'
		    		}
		    	},
		    	{
		    		title: 'New slider',
		    		image: 'images/newslider/c1.png',
		    		styles: {
		    			'z-index': '1',
		    			'width': '300px',
		    			'max-width': this.value,
		    			"height": this.value +'px',
		    			'transform': 'translateX('+ this.value +'%)'
		    		}
		    	},
		    	{
		    		title: 'New slider',
		    		image: 'images/newslider/c2.png',
		    		styles: {
		    			'z-index': '99',
		    			'width': '400px'
		    		}
		    	}
		    ]
		  }
		},

	   mounted(){
    		this.prepareComponent();
		},
		methods :{
			prepareComponent(){
				this.incrementar(0.5);
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			incrementar(time){
			  	setInterval(function(){
			  		if(typeof this.value !== "number"){
			  			this.value = 1;
			  		}
			  		this.value = this.value + 1;
			  	},time * 1000);
			},
			getValue(){
				return this.value;
			}
	    }
	});
