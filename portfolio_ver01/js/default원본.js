$(function(){
	// var index=$('.menu li').index();
	// console.loge(index);
	$('.menu li').click(function(){
		//$('this').stop().animate();
		$(this).toggleClass('ac');
		$('.content .section').removeClass('open');
		$('.content .section').addClass('open');
	});
});