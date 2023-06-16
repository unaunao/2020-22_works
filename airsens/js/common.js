$(function(){
	var Top=$(".nvi").offset().top;
	$(window).scroll(function(){
		var sc_t=$(document).scrollTop();
		//console.loge(sc_t);
		if(sc_t>Top){
			$(".nvi").addClass("fixed");
		}else{
			$(".nvi").removeClass("fixed");
		}
	});

});

//row2 big img change

var i=1;

		function all(){
			for(var k=1; k<=5; k++){
			document.getElementById("big_txt"+k).style.display="none";
			}
			document.getElementById("pic").src="images/row2_imgb"+i+".jpg";
			document.getElementById("big_txt"+i).style.display="block";
		}
		function next(){
			i+=1
			if(i>=6){i=1}
			all();
		}
		function prev(){
			i-=1
			if(i<=0){i=5;}
			all();
		}
