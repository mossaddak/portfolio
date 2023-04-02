/*
 * Author: Marketify
 * I'm Mossaddak has taken this template just for backend practice purposes and I've changed many in places.
 	All credit goes to Marketify for this HTML template.
	I've done the full backend.
*/

$(function () {

	"use strict";

	// here all ready functions
	mossaddak_portfolio_page_transition();
	mossaddak_portfolio_menu_trigger();
	mossaddak_portfolio_modalbox();
	mossaddak_portfolio_counter();
	mossaddak_portfolio_project();
	mossaddak_ms_project();
	mossaddak_portfolio_cursor();
	mossaddak_portfolio_imatosvg();
	mossaddak_portfolio_data_images();
	mossaddak_portfolio_carsor();

	$(window).load('body', function () {
		mossaddak_portfolio_load();
	});
	

});




// -------------   PAGE TRANSITION    ------------------
function mossaddak_portfolio_page_transition() {

	"use strict";

	var section = $('.mossaddak_portfolio_section');
	var allLi = $('.transition_link li');
	var button = $('.transition_link a');
	var wrapper = $('.all_wrap');
	var enter = wrapper.data('enter');
	var exit = wrapper.data('exit');

	button.on('click', function () {
		var element = $(this);
		var href = element.attr('href');
		if (element.parent().hasClass('mossaddak_portfolio_btn')) {
			$('.menu .transition_link a[href="' + href + '"]').trigger('click');
			hashtag();
			return false;
		}
		var sectionID = $(href);
		var parent = element.closest('li');
		if (!parent.hasClass('active')) {
			allLi.removeClass('active');
			wrapper.find(section).removeClass('animated ' + enter);
			if (wrapper.hasClass('opened')) {
				wrapper.find(section).addClass('animated ' + exit);
			}
			parent.addClass('active');
			wrapper.addClass('opened');
			wrapper.find(sectionID).removeClass('animated ' + exit).addClass('animated ' + enter);
			$(section).addClass('hidden');
			$(sectionID).removeClass('hidden').addClass('active');
		}
		return false;
	});
}


// ---------------   TRIGGER MENU    -------------------
function mossaddak_portfolio_menu_trigger() {

	"use strict";

	var hamburger = $('.mossaddak_portfolio_topbar .trigger .hamburger');
	var mobileMenu = $('.mossaddak_portfolio_mobile_menu');
	var mobileMenuList = $('.mossaddak_portfolio_mobile_menu ul li a');

	hamburger.on('click', function () {
		var element = $(this);

		if (element.hasClass('is-active')) {
			element.removeClass('is-active');
			mobileMenu.removeClass('opened');
		} else {
			element.addClass('is-active');
			mobileMenu.addClass('opened');
		}
		return false;
	});

	mobileMenuList.on('click', function () {
		$('.mossaddak_portfolio_topbar .trigger .hamburger').removeClass('is-active');
		mobileMenu.removeClass('opened');
		return false;
	});
}




// -------------  MODALBOX ABOUT  ------------------
function mossaddak_portfolio_modalbox() {

	"use strict";

	var modalBox = $('.mossaddak_portfolio_modalbox');
	var opener = $('.about_section .mossaddak_portfolio_btn a');
	var closer = modalBox.find('.close');

	opener.on('click', function () {
		modalBox.addClass('opened');
		mossaddak_portfolio_counter();
		return false;
	});
	closer.on('click', function () {
		modalBox.removeClass('opened');
		return false;
	});
}






// -----------------    PORTFOLIO    ---------------
function mossaddak_portfolio_project() {

	"use strict";

	$('.project_animation').each(function () {
		$(this).on('mouseenter', function () {
			if ($(this).data('title')) {
				$('.mossaddak_portfolio_titles').html($(this).data('title') + '<span class="work__cat">' + $(this).data('category') + '</span>');
				$('.mossaddak_portfolio_titles').addClass('visible');
			}

			$(document).on('mousemove', function (e) {
				$('.mossaddak_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function () {
			$('.mossaddak_portfolio_titles').removeClass('visible');
		});
	});
}


// -------------  PROGRESS BAR  --------------------
function mossaddak_ms_project() {

	"use strict";
	var filter = $('.mossaddak_ms_project .project_category_container ul');

	// Change active element class
	filter.find('a').on('click', function () {
		filter.find('a').removeClass('current');
		$(this).addClass('current');
		return false;
	});

}





// ---------------   PRELOADER   -----------------------
function mossaddak_portfolio_preloader() {

	"use strict";

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');

	if (!isMobile) {
		setTimeout(function () {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function () {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}


// -------------------    COUNTER    -------------------
function mossaddak_portfolio_counter() {

	"use strict";

	$('.mossaddak_portfolio_counter').removeClass('stop');

	$('.mossaddak_portfolio_counter').each(function () {

		var el = $(this);
		el.waypoint({
			handler: function () {

				if (!el.hasClass('stop')) {
					el.addClass('stop').countTo({
						refreshInterval: 50,
						formatter: function (value, options) {
							return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
						},
					});
				}
			}, offset: '95%'
		});
	});
}


// -----------------   MY LOAD    ----------------------
function mossaddak_portfolio_load() {

	"use strict";

	var speed = 500;
	setTimeout(function () { mossaddak_portfolio_preloader(); }, speed);
}


// ------------------   CURSOR    ----------------------
function mossaddak_portfolio_cursor() {
	"use strict";

	var myCursor = $('.mouse-cursor');

	if (myCursor.length) {
		if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n, i = 0,
				o = !1;
			window.onmousemove = function (s) {
				o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
			}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
				e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
			}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
				$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
			}), e.style.visibility = "visible", t.style.visibility = "visible"
		}
	}
};


// ---------------    IMAGE TO SVG    ------------------
function mossaddak_portfolio_imatosvg() {

	"use strict";

	$('img.html').each(function () {

		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
}




// ---------------   DATA IMAGES    --------------------

function mossaddak_portfolio_data_images() {

	"use strict";

	var data = $('*[data-img-url]');

	data.each(function () {
		var element = $(this);
		var url = element.data('img-url');
		element.css({ backgroundImage: 'url(' + url + ')' });
	});
}



// ----------------    OWL CAROUSEL    -----------------
function mossaddak_portfolio_carsor() {

	"use strict";

	var carousel = $('.partners .owl-carousel');

	var rtlMode = false;

	if ($('body').hasClass('rtl')) {
		rtlMode = 'true';
	}

	carousel.owlCarousel({
		loop: true,
		items: 4,
		lazyLoad: false,
		margin: 50,
		autoplay: true,
		autoplayTimeout: 7000,
		rtl: rtlMode,
		dots: true,
		nav: false,
		navSpeed: true,
		responsive: {
			0: { items: 1 },
			480: { items: 2 },
			768: { items: 3 },
			1040: { items: 3 },
			1200: { items: 3 },
			1600: { items: 4 },
			1920: { items: 4 }
		}
	});
	mossaddak_portfolio_imatosvg();
}
