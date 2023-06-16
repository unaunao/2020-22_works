$(function(){
		var bg=["#d0d1ad","#c2b19d","#d9e4ea","#e7e6e3","#b3afa3"];
	$('.sec').eq(0).css({display:'block'})

	$('.menu li').click(function(){
		var num=$(this).index();
		$(document).scrollTop(0);
		
		$('.menu li').removeClass('active');
		$(this).addClass('active');

		$('body').css({background:bg[num]});
		$('.sec').css({display:'none'})
		$('.sec').eq(num).css({display:'block'})

		if(num==1){
			$('.skill:eq(0) .sk_bar').stop().animate({width:'85%'},2500);
			$('.skill:eq(1) .sk_bar').stop().animate({width:'80%'},2500);
			$('.skill:eq(2) .sk_bar').stop().animate({width:'95%'},2500);
			$('.skill:eq(3) .sk_bar').stop().animate({width:'75%'},2500);

		}else{
			$('.skill .sk_bar').stop().animate({width:'0%'});
		}


		

		
// debugger;
		if(num==4){
			$('.p05_ball').stop().animate({right:'420px'},50).css({transform: 'rotate(0deg)'});
			
			
		}else{
			$('.p05_ball').stop().animate({right:'0'}).css({transform: 'rotate(360deg)'});
			
		}

	});
	// Web degign
	$(".p03_web_btn>.p03_web_btn_in>a").click(function(e){
		e.preventDefault();
		$(this).next().show();
		$('body').css({overflow:'hidden'});
	});


	$(".p03_web_btn .btn_close").click(function(e){
		e.preventDefault();
		$(".overlay").hide();
		$('body').css({overflow:'scroll'})
	});

	// photoshop effect
	$(".ps_efc>li>a").click(function(e){
		e.preventDefault();
		$(this).next().show();
		$('body').css({overflow:'hidden'});
	});

	$(".ps_efc .btn_close").click(function(e){
		e.preventDefault();
		$(".overlay").hide();
		$('body').css({overflow:'scroll'})
	});
// mobile 목업1 이미지 전체화면
	$(".p03_wrap_btn1 .p03_btn2").click(function(e){
		e.preventDefault();
		$(".overlay0").css({display:'block'});
		$('body').css({overflow:'scroll'})
	});

	$(".overlay0 .btn_close").click(function(e){
		e.preventDefault();
		$(".overlay0").hide();
		$('body').css({overflow:'scroll'})
	});


	$(".p03_wrap_btn1 .p03_btn2-2").click(function(e){
		e.preventDefault();
		$(".overlay0-2").css({display:'block'});
		$('body').css({overflow:'scroll'})
	});

	$(".overlay0-2 .btn_close").click(function(e){
		e.preventDefault();
		$(".overlay0-2").hide();
		$('body').css({overflow:'scroll'})
	});


// mobile 목업2 이미지 전체화면
	$(".p03_wrap_btn2 .p03_btn2").click(function(e){
		e.preventDefault();
		$(".overlay1").css({display:'block'});
		$('body').css({overflow:'scroll'})
	});

	$(".overlay1 .btn_close").click(function(e){
		e.preventDefault();
		$(".overlay1").hide();
		$('body').css({overflow:'scroll'})
	});

// tablet 목업 이미지 전체화면
	$(".p03_wrap_btn2 .p03_btn3").click(function(e){
		e.preventDefault();
		$(".overlay2").css({display:'block'});
		$('body').css({overflow:'scroll'})
	});

	$(".overlay2 .btn_close").click(function(e){
		e.preventDefault();
		$(".overlay2").hide();
		$('body').css({overflow:'scroll'})
	});

// mobile 목업3 이미지 전체화면
	$(".p03_wrap_btn3 .p03_btn2").click(function(e){
		e.preventDefault();
		$(".overlay3").css({display:'block'});
		$('body').css({overflow:'scroll'})
	});

	$(".overlay3 .btn_close").click(function(e){
		e.preventDefault();
		$(".overlay3").hide();
		$('body').css({overflow:'scroll'})
	});

// tablet 목업3 이미지 전체화면
	$(".p03_wrap_btn3 .p03_btn3").click(function(e){
		e.preventDefault();
		$(".overlay4").css({display:'block'});
		$('body').css({overflow:'scroll'})
	});

	$(".overlay4 .btn_close").click(function(e){
		e.preventDefault();
		$(".overlay4").hide();
		$('body').css({overflow:'scroll'})
	});	

	// plug in

	//unao
	$('.text').waypoint(function(){
		$('.text').addClass('animated delay01 bounceInLeft')
	},{
		offset:'50%'
	});
	// $('.text .t2').waypoint(function(){
	// 	$('.t2').addClass('animated delay01 fadeInLeft')
	// },{
	// 	offset:'50%'
	// });
	// $('.text .t3').waypoint(function(){
	// 	$('.t3').addClass('animated delay01 fadeInLeft')
	// },{
	// 	offset:'50%'
	// });



	$('.photo1').waypoint(function(){
		$('.photo1').addClass('animated fadeInLeft')
	},{
		offset:'50%'
	});

	// about

	$('.about-img').waypoint(function(){
		$('.about-img').addClass('animated fadeInDown')
	},{
		offset:'50%'
	});
	$('.about-txt').waypoint(function(){
		$('.about-txt').addClass('animated delay03 fadeInRight')
	},{
		offset:'50%'
	});


	// portfoilo
	$('.p03_visual1').waypoint(function(){
		$('.p03_visual1').addClass('animated delay03 fadeInDown')
	},{
		offset:'50%'
	});

	$('.p03_visual2').waypoint(function(){
		$('.p03_visual2').addClass('animated delay03 flip')
	},{
		offset:'50%'
	});

	$('.p03_visual3').waypoint(function(){
		$('.p03_visual3').addClass('animated delay03 zoomIn')
	},{
		offset:'50%'
	});


	//my work
	$('.p04_visual_img').waypoint(function(){
		$('.p04_visual_img').addClass('animated delay01 jackInTheBox')
	},{
		offset:'50%'
	});
	
	$('.p04_bar02').waypoint(function(){
		$('.p04_bar02').addClass('animated delay03 fadeInRight')
	},{
		offset:'50%'
	});



	// contact

	$('.p05_txt01').waypoint(function(){
		$('.p05_txt01').addClass('animated delay01 fadeInDown')
	},{
		offset:'50%'
	});
	$('.p05_txt02').waypoint(function(){
		$('.p05_txt02').addClass('animated delay02 fadeInDown')
	},{
		offset:'50%'
	});
	$('.p05_txt03').waypoint(function(){
		$('.p05_txt03').addClass('animated delay03 fadeInDown')
	},{
		offset:'50%'
	});

	// cube move

	function calculateDeg(selector){
  var tr = $(selector).css('transform');
  var values = tr.split('(')[1].split(')')[0].split(',');
  var a = values[0];
  var b = values[1];
  var c = values[2];
  var d = values[3];

  var scale = Math.sqrt(a*a + b*b);
  var sin = b/scale;
  var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
  return angle
}
function rotate(selector, angle, deg, ms){
  $(selector).animate({a: deg},{
    duration:ms,
    step: function(now,fx) {
      $(this).css('transform','rotate('+(angle+now)+'deg)'); 
    }
  });
}
	setInterval(function(){

	// var angle = calculateDeg('.p02_box1');
 //    rotate('.p02_box1', angle,15,1000)
 //    rotate('.p02_box1', angle,0,1000)

 //    var angle = calculateDeg('.p02_box2');
 //    rotate('.p02_box2', angle,-80,1000)
 //    rotate('.p02_box2', angle,0,1000)

    var angle = calculateDeg('.p04_cube01');
    rotate('.p04_cube01', angle,15,1000)
    rotate('.p04_cube01', angle,0,1000)

    var angle = calculateDeg('.p04_cube02');
    rotate('.p04_cube02', angle,-45,1000)
    rotate('.p04_cube02', angle,0,1000)


    var angle = calculateDeg('.p04_cube03');
    rotate('.p04_cube03', angle,65,1000)
    rotate('.p04_cube03', angle,0,1000)
  },2000);

	setInterval(function(){
	var angle = calculateDeg('.p02_box1');
    rotate('.p02_box1', angle,40,1000)
    rotate('.p02_box1', angle,0,1000)

    var angle = calculateDeg('.p02_box2');
    rotate('.p02_box2', angle,-100,1000)
    rotate('.p02_box2', angle,0,1000)

		},2000);

	
	
});