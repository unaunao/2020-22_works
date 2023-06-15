//Fixed Navigation
$(function(){
	$(window).scroll(function(){
	 	if($(document).scrollTop()>0){
	 		$('.header').addClass('navbar-fixed');
	 	}else{
	 		$('.header').removeClass('navbar-fixed');
	 	}
	});

//Mobile Menu
	$('#trigger').on('click',function(){
		$('.navbar-bg').slideToggle();
	});
	$(window).resize(function(){
		var w=$(window).width();
		//윈도우사이즈가 조정될때,네비바가 감춰져 있을때 
		if(w>320 && $('.navbar-bg').is(':hidden')){
			$('.navbar-bg').removeAttr('style');
		}
	})	


	$('.page-scroll').click(function(e){
		e.preventDefault();
		var $anchor=$(this);
		var top=$($anchor.attr('href')).offset().top-100;
		$('html,body').stop().animate({
			scrollTop:top},1500)
	});
});