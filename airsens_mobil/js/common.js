$(function(){
	var last_btn=$(".visual_location li:eq(0)");

	$(".navi_open").click(function(){
		$("#nav").stop().animate({right:"0"},100,'linear');
		$(".overlay").show();
		return false;
	});
	$(".nav_close").click(function(){
		$("#nav").stop().animate({right:"-66.5625%"},100,'linear');
		$(".overlay").hide();
		return false;
	});
	$(".lnb").hide();
	$(".tit").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).next().stop().slideUp("fast");
		}else{
			$(".tit").removeClass("on");
			$(this).addClass("on");
			$(".lnb").stop().slideUp("fast");
			$(this).next().stop().slideDown("fast");
		}
	});

	var timer=setInterval(fade_change, 5000);
			var now_img, next_img;
			var i=0;
			function fade_change(){
				now_img=$(".visual_img li:eq(0)");
				next_img=$(".visual_img li:eq(1)");

				next_img.addClass("active").css("opacity",0).animate({"opacity":1},1000,function(){
					$(".visual_location li").eq(i).addClass("on");
					$(".visual_img").append($(now_img));
					now_img.removeClass("active");
					i++;
                    if(i>2){i=0;}
                    $(".visual_location li").removeClass("on");
                    $(".visual_location li").eq(i).addClass("on");
				});

			}

			//location 버튼 연동 미완성
			$(".visual_location li").click(function(){
				var i=$(this).index();
				$(".visual_img li").removeClass("active");
				$(".visual_img li").eq(i).addClass("active");
				$(".visual_location li").removeClass("on");
                $(".visual_location li").eq(i).addClass("on");

			});


			//row1 swiper
			$(document).ready(function () {
	  	var mySwiper = new Swiper ('.row1_swiper', {
	    	loop: true,
	    	slidesPerView: 3,
      		centeredSlides: true,
     	 	spaceBetween: 2,
	    	 navigation: {
	        
	      },
	       pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
     
     
	  		})
		});
		// row3 스와이퍼 이미지
		var swiper = new Swiper('.row3_swiper ', {
      spaceBetween: 4,
      slidesPerView: 1,
       autoplay:{
    	delay:4000,
    	disableOnInteraction:false,
    },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });


});