$(document).ready(
	function(){
		
		$('.click-a, .click-b').mouseenter(
			function(){
          		$(this).css('background-color' , '#D4AF37');
				$(this).css('opacity','.5');
			}
        );
		
		$('.click-a, .click-b').mouseleave(
			function(){
          		$(this).css('opacity','0');
			}
        );
		
		$('.click-a, .click-b').click(
			function(){
          		$(this).css('background-color' , '#00FF00');
				$(this).css('opacity','.5');
			}
        );
		
	}
);

