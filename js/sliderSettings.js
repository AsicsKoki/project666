jQuery(function($){
	$.supersized({
		// Functionality
		slideshow               :   1,			// Slideshow on/off
		autoplay				:	1,			// Slideshow starts playing automatically
		start_slide             :   1,			// Start slide (0 is random)
		stop_loop				:	0,			// Pauses slideshow on last slide
		random					: 	0,			// Randomize slide order (Ignores start slide)
		slide_interval          :   5000,		// Length between transitions
		transition              :   6, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	500,		// Speed of transition
		new_window				:	1,			// Image links open in new window/tab
		pause_hover             :   0,			// Pause slideshow on hover
		keyboard_nav            :   1,			// Keyboard navigation on/off
		performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect			:	1,			// Disables image dragging and right click with Javascript
		// Size & Position
		min_width		        :   0,			// Min width allowed (in pixels)
		min_height		        :   0,			// Min height allowed (in pixels)
		vertical_center         :   1,			// Vertically center background
		horizontal_center       :   1,			// Horizontally center background
		fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait         	:   1,			// Portrait images will not exceed browser height
		fit_landscape			:   0,			// Landscape images will not exceed browser width
		// Components
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links				:	1,			// Individual thumb links for each slide
		thumbnail_navigation    :   0,			// Thumbnail navigation
		slides 					:  	[			// Slideshow Images
				{image : 'http://cartoscreen.com/stockwall/5586-bmw-e30-free-wallpapers-33158.jpg', title : 'BMW e30 evo', thumb : 'http://cartoscreen.com/stockwall/5586-bmw-e30-free-wallpapers-33158.jpg', url : ''},
				{image : 'http://farm4.staticflickr.com/3320/3180204232_977c4e1f59_o.jpg', title : 'BMW E36 GTR', thumb : 'http://farm4.staticflickr.com/3320/3180204232_977c4e1f59_o.jpg', url : ''},
				{image : 'http://mpower.by/sites/default/files/bmw_m3_e46_gtr_side_view.jpg', title : 'BMW E46 GTR Kazvan', thumb : 'http://mpower.by/sites/default/files/bmw_m3_e46_gtr_side_view.jpg', url : ''},
				{image : 'http://farm5.static.flickr.com/4058/4577856783_f7ccd68eb3_b.jpg', title : 'BMW E92 GT-S', thumb : 'http://farm5.static.flickr.com/4058/4577856783_f7ccd68eb3_b.jpg', url : ''}
		],
		// Theme Options
		progress_bar			:	1,			// Timer for each slide
		mouse_scrub				:	0
	});
});