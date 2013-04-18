$(document).ready(function(){

	//when page loads
	$(window).load(function(){
		//change section height to height of window
		var height = $(window).height();
		$(".section_background").height((height)+"px");
	});
	
	// when window us resizes
	$(window).resize(function(){
		//change section height to height of window
		var height = $(window).height();
		$(".section_background").height((height)+"px");
	});

	console.log($(window).height())

});
