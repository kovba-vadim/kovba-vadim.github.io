$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".section-about .owl-about").owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    navText:false,
	    items:1
	});

	$(".section-about .owl-portfolio").owlCarousel({
	    loop:true,
	    margin:15,
	    nav:true,
	    navText:false,
	    items:3
	});

  $(".section-3 .owl-portfolio, .building-section-3 .owl-portfolio").owlCarousel({
	    loop:true,
	    margin:15,
	    nav:true,
	    navText:false,
	    items:4
	});


	//Маска на телефон
	$(".phone-mask").mask("+7 (999) 999-99-99");



	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");





});

$(function(){
  $(".header__write-btn").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
    });
  });
  
$(document).on('af_complete', function(event, response){
	var form = response.form;
	$('#'+form.attr('id')+' .form-js').slideUp();
	$('#'+form.attr('id')+' .form-ok-js').slideDown();
	});
  
$(document).ready(function() {
  $('.fancybox').fancybox({
    padding: 0,
		openEffect  : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',
		helpers : {
			title : {
				type : 'inside'
				},
			buttons	: {}
		  }
    });
    
    
  $('.fancyboxModal').fancybox({
    padding: 0
    });
    

});

  
  
