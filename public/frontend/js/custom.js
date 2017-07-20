window.onload = function () {

	$('.loading').addClass('loaded');
	


		var app = new Vue({
	      	el: '#app'      
	    });



		$(window).on('scroll', function(){
	        var $this = $(this),
	            theScroll = $this.scrollTop();

	        var parallaxScroll = '-'+(25 + (theScroll / 8))+'%';
	      //  console.log(parallaxScroll);

	        $('.img-div img').css('top','-' + parallaxScroll + '%)');
	        // $('.page-banner .img-wrap').css('transform','translateY(' + parallaxScroll + 'px)');
	    });

	    // $('.el-carousel__item h1').removeClass('wow');
	    // $('.el-carousel__item.is-active h1').addClass('wow');



};

