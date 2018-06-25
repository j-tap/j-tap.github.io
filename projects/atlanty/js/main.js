t = $(window).scrollTop();
w = $(window).width();
h = $(window).height();
d = 'down';

curPress = false,
curYPos = 0,
curXPos = 0;

$(function () {

	$(window).scroll(function () {
		if (t > $(this).scrollTop()) d = 'up'
		else d = 'down';

		t = $(this).scrollTop();

		oNavbar.action();

	}).resize(function () {
		w = $(window).width();
		h = $(window).height();

		priceSlider();
		footNav();

	}).on('load', function () {
		
	}).mousedown(function (m) {
		//m.preventDefault();
		curPress = true;
		curYPos = m.pageY;
		curXPos = m.pageX;

	}).mouseup(function () {
		curPress = false;
	});
	
	oNavbar.init();
	initTimer();
	footNav();
	priceSlider();

	$('.js-animnumber').each(function () {
		$(this).animateNumber({number: $(this).data('number')});
	})

	$('.speakers-old-slider').slick({
		arrows: true,
		dots: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}, {
				breakpoint: 991,
				settings: {
					variableWidth: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	})

	$('.atlants-old-slider').slick({
		arrows: true,
		dots: true,
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 6,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			}, {
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}, {
				breakpoint: 767,
				settings: {
					variableWidth: true
				}
			}
		]
	})

	$('.partners-info-slider').slick({
		arrows: false,
		dots: true,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})

	$('[data-fancybox]').fancybox({
		toolbar: false
	});

	//$('.scroll-block').scrollbar();

	$('.tiles-scroll').kinetic({y: false});

})

oNavbar = {
	init: function () {
		this.eNav = $('.header .navbar'),
		this.sClass = 'navbar-fixed-top';
		this.top = this.eNav.offset().top;

		$('.header .navbar-toggler, .header .navbar-collapse .close').click(function () {
			$('.header .navbar-collapse').toggleClass('showing');
			$('.navbar-overlay').toggleClass('active');
			$('body').toggleClass('over');
		})
	},
	action: function () {
		if (!oNavbar.eNav.hasClass(oNavbar.sClass) && oNavbar.top <= t) {
			oNavbar.eNav.after($('<div/>', {style: 'height:'+ oNavbar.eNav.outerHeight() +'px'}))
			oNavbar.eNav.addClass(oNavbar.sClass);
		} else if (oNavbar.top > t) {
			oNavbar.eNav.removeClass(oNavbar.sClass);
			oNavbar.eNav.next('div[style]').remove();
		}
	}
}

function footNav () {
	var eFootNav = $('.foot-nav-list');
	if (w < 768) {
		eFootNav.addClass('list-accordion').find('ul').hide();
		eFootNav.find('h6').on('click.footAccordion', function () {
			eFootNav.find('ul:visible').not($(this).next('ul')).slideUp(200);
			$(this).toggleClass('active').next('ul').stop().slideToggle(200);
			return false;
		})
	} else {
		eFootNav.removeClass('list-accordion').find('ul').show();
		eFootNav.find('h6').removeClass('active').unbind('click.footAccordion');
	}
}

function priceSlider () {
	if (w < 1280) {
		if (!$('.prices-slider').hasClass('slick-initialized')) $('.prices-slider').slick({
			arrows: false,
			dots: true,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			variableWidth: true,
			// centerMode: true,
			responsive: [
				{
					breakpoint: 1199,
					settings: {
						slidesToScroll: 3,
						slidesToShow: 3
					}
				},{
					breakpoint: 991,
					settings: {
						slidesToScroll: 2,
						slidesToShow: 2
					}
				},{
					breakpoint: 767,
					settings: {
						slidesToScroll: 1,
						slidesToShow: 1
					}
				}
			]
		})
	} else {
		if ($('.prices-slider').hasClass('slick-initialized')) $('.prices-slider').slick('unslick');
	}
}

function initTimer () {
	// до конца недели
	/*var a = [6,5,4,3,2,1,0],
		now = new Date,
		day = now.getDay() == 0 ? 6 : now.getDay() - 1,
		date = new Date(now.getFullYear(), now.getMonth(),  
			now.getDate() + a[day],
			23, 59, 59
		);*/
	var eTimer = $('.js-timer'),
		//date = new Date(eTimer.data('date'));
		time = '+'+ eTimer.data('time');

	eTimer.countdown({
		until: time,
		padZeroes: true,
		format: 'HMS',//'dHMS'
	})
};
