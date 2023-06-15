 $(function(){
  $('.page-scroll').click(function(e){
    e.preventDefault();
    var $anchor=$(this);
    var top=$($anchor.attr('href')).offset().top-55;
    $('html,body').stop().animate({
      scrollTop:top},1500)
  }); 

  //Fixed Navigation
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

//PlugIn

var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween:0,
      autoplay:{
      	delay:2500,    
      	disableOnInteraction:false,
      },
      loop:true,
      
      pagination: {
        el: '.pagination1',
        clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
          allowSlidePrev:true,
          allowSlideNext:true,
        },
         640: {
          slidesPerView: 2,
          spaceBetween: 30,
          allowSlidePrev:true,
          allowSlideNext:true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          allowSlidePrev:true,
          allowSlideNext:true,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
          allowSlidePrev:false,
          allowSlideNext:false,
        },
      }
    });
  var w=$(window).width();
  move();
  function move(){
    if(w>1000){
     mySwiper.autoplay.stop();
     $('.pagination1').css('display','none');
  }else{
    mySwiper.autoplay.start();
    $('.pagination1').css('display','block')
  }
}
  $(window).resize(function(){
    w=$(window).width();
    move();

    if(w<768){
      $('.fee-section>div').removeClass('container');
    }else{
      $('.fee-section>div').addClass('container');
    }
  });

});