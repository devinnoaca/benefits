/*
* rwdImageMaps jQuery plugin v1.6
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2016 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function($) {
	$.fn.rwdImageMaps = function() {
		var $img = this;

		var rwdImageMap = function() {
			$img.each(function() {
				if (typeof($(this).attr('usemap')) == 'undefined')
					return;

				var that = this,
					$that = $(that);

				// Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy
				$('<img />').on('load', function() {
					var attrW = 'width',
						attrH = 'height',
						w = $that.attr(attrW),
						h = $that.attr(attrH);
					const windowWidth = window.innerWidth;
					if (!w || !h) {
						var temp = new Image();
						temp.src = $that.attr('src');
						if (!w) {
							if (windowWidth >= 1200)
								w = 1140;
							else if (windowWidth >= 992)
								w = 960;
							else if (windowWidth >= 768)
								w = 720;
							else if (windowWidth >= 576)
								w = 540;
							else
								console.log(w, window.innerWidth, $that.width())
								w = window.innerWidth - 34;
						}
						if (!h) {
							h = temp.height * (w / temp.width);
						}
					}

					let	map = $that.attr('usemap').replace('#', '');
					let percent;
					if (windowWidth >= 1200)
						percent = 1
					else if (windowWidth >= 992)
						percent = 960 / 1140;
					else if (windowWidth >= 768)
						percent = 720 / 1140;
					else if (windowWidth >= 576)
						percent = 540 / 1140;
					else
						percent = w / 1140;

					console.log(w, percent);

					$('map[name="' + map + '"]').find('area').each(function() {
						var $this = $(this);
						if (!$this.data('coords'))
							$this.data('coords', $this.attr('coords'));

						var coords = $this.data('coords').split(','),
							coordsPercent = new Array(coords.length);

						for (var i = 0; i < coordsPercent.length; ++i) {
							if (i % 2 === 0)
								coordsPercent[i] = parseInt(coords[i] * percent);
							else
								coordsPercent[i] = parseInt(coords[i] * percent);
						}
						$this.attr('coords', coordsPercent.toString());
					});
				}).attr('src', $that.attr('src'));
			});
		};
		$(window).resize(rwdImageMap).trigger('resize');

		return this;
	};
})(jQuery);
