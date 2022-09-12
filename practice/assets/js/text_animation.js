

	function tm_animate_text(){
	
		"use strict";
		
		var animateSpan			= jQuery('.animation_text_word');
		
			animateSpan.typed({
				strings: ["Dental Care", "Dental Care", "Dental Care"],
				loop: true,
				startDelay: 1e3,
				backDelay: 3e3
			});
	}

	function tm_animate_text_2(){
	
		"use strict";
		
		var animateSpan			= jQuery('.animation_text_word_2');
		
			animateSpan.typed({
				strings: ["تسريحة شعر", "تسريحة شعر", "تسريحة شعر"],
				loop: true,
				startDelay: 1e3,
				backDelay: 3e3
			});
	}

	jQuery(document).on('ready', function () {
		(function ($) {
			tm_animate_text();
			tm_animate_text_2();
		})(jQuery);
	});