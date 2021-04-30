$(function(){
	$('.order-call').on('click', function(){
		$('.popup-container').css('display', 'flex');
	});

	$('.close').on('click', function(){
		$('.popup-container').css('display', 'none');
	});
});