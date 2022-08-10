
$(document).ready(function(){
	$(".navToggle").click(function(){
		$(this).addClass("active");
		$("#lnb").addClass("respNavView");
	});
	/*
	if($("#lnb").hasClass("respNav")==true){
		$("#lnb").parents("header").css({"text-align":"center"});
	};
	*/
	$(".respNav > ul > li > a").click(function(){
		$(".navToggle").removeClass("active");
		$(".respNav").removeClass("respNavView");
	});
	

	$('.modalView').on('click', function(){ 
		$('.modalOverlay').fadeIn();  
		var id = $(this).data('id');
		$('.modal[data-id="modal-' + id + '"]').fadeIn();
	});
	$('.modalClose, .modalOverlay').on('click', function(){ 
		$('.modalOverlay').fadeOut();  
		$('.modal').fadeOut();
	});

	$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if (scroll > 1) {
		$(".header").css("background-color" , "rgba(0,0,0,0.75)");
		}
		else{
		$(".header").css("background-color" , "rgba(0,0,0,0)");
		}
	})
});

function textCopyToClick(){
	var content = document.getElementById('textCopy').innerHTML;
	navigator.clipboard.writeText(content)
}	


