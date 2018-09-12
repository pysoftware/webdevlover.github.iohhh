$(document).ready(function(){
	$(this).keydown(function(event){
		// console.log(event.which);
		var key = $(this).find('.key[data-key='+event.which+']');
		var audio = $(this).find('audio[data-key='+event.which+']')[0];
		key.toggleClass('playing');
		audio.play();
		audio.currentTime = 0;
	});

	$(this).keyup(function(event){
			// console.log(event.which);
			var key = $(this).find('.key[data-key='+event.which+']');
			key.toggleClass('playing');
		});


});