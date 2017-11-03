onScroll = false;
t = $(window).scrollTop();
w = $(window).width();
h = $(window).height();

eMain = $('.main');
mainPd = parseInt(eMain.css('paddingTop'));

//console.log(mainPd);

$(function () {

	NavScrl.init();
	oSliderPhoto.init();
	oHeader.init();

	$(window).scroll(function () {
		var d = 'down';
		if (t > $(this).scrollTop()) d = 'up';

		t = $(this).scrollTop();

		if (t==0 && d == 'up') oHeader.down()
		else if (t > 0 && d == 'down') oHeader.up();

		NavScrl.scrolling();
	}).resize(function () {
		w = $(window).width();
		h = $(window).height();

	}).on('load', function () {
		
	})

	if (t > 0) onScroll = true;
	
	$('#slider-photo').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		oSliderPhoto.ind = nextSlide;
	}).slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 300,
		autoplay: false,
		autoplaySpeed: 3000,
		dots: true,
		arrows: false,
		variableWidth: false,
		//prevArrow: $('.slick-arrow .slick-prev'),
		//nextArrow: $('.slick-arrow .slick-next'),		
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('#slider-main-img').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1,
		autoplay: false,
		dots: false,
		arrows: false,
		variableWidth: false,
		swipe: false,
		fade: true
	});

	$('#slider-main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$('#slider-main-img').slick('slickGoTo', nextSlide, true);
	}).slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		autoplay: false,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		variableWidth: false,
		adaptiveHeight: true,
		prevArrow: $('.slider-main__arrow .slick-prev'),
		nextArrow: $('.slider-main__arrow .slick-next')
	});

	$('#header-note-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: false,
		variableWidth: false
	});

	var wowHeader = new WOW({
		boxClass: 'wow-header',
		animateClass: 'animated',
		offset: 0,
		mobile: true,
		live: true
	});
	if ($(window).scrollTop() == 0) wowHeader.init();

	var wow1 = new WOW({
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	});
	wow1.init();

	$('body').on({
		'mousewheel': function (e) {
			if (onScroll) {
				if (t == 0 && e.originalEvent.wheelDelta / 120 > 0) oHeader.down();
				return;
			} else {
				e.preventDefault();
				e.stopPropagation();
				if (e.originalEvent.wheelDelta / 120 < 0) oHeader.up();
			}
		}
	})

	if (t > 0) $('html, body').scrollTop(t+1);

})

oSliderPhoto = {
	ind: 0,
	eModalPhoto: null,
	ePhotoImg: null,
	sPhotoPath: '',
	sPhotoAlt: '',
	eWrap: null,
	eWrapImg: null,
	eSlider: null,
	init: function () {
		oSliderPhoto.eModalPhoto = $('#modal-photo'),
		oSliderPhoto.eWrap = oSliderPhoto.eModalPhoto.find('.modal-photo__wrap'),
		oSliderPhoto.eWrapBg = oSliderPhoto.eWrap.children('.modal-photo__bg'),
		oSliderPhoto.eWrapImg = oSliderPhoto.eWrap.children('.modal-photo__img'),
		oSliderPhoto.eSlider = $('#slider-photo');
		oSliderPhoto.eWrapImg.empty().append($('<img/>'));
		$('.slider-photo__item .i-plus').click(function () {
			oSliderPhoto.ind = $(this).parents('.slick-slide').data('slick-index');
			oSliderPhoto.getParam();
			oSliderPhoto.setImg();
			oSliderPhoto.openModal();
		});
		oSliderPhoto.eWrapImg.click(function () {
			oSliderPhoto.eSlider.slick('slickNext');
			oSliderPhoto.getParam();
			oSliderPhoto.setImg();
			//oSliderPhoto.openModal();
		});
	},
	getParam: function () {
		oSliderPhoto.ePhotoImg = oSliderPhoto.eSlider.find('.slick-slide[data-slick-index="'+oSliderPhoto.ind+'"]').find('img'),
		oSliderPhoto.sPhotoPath = oSliderPhoto.ePhotoImg.data('photo'),
		oSliderPhoto.sPhotoAlt = oSliderPhoto.ePhotoImg.attr('alt');
	},
	setImg: function () {
		oSliderPhoto.eWrapBg.css('background-image', 'url('+oSliderPhoto.sPhotoPath+')');
		oSliderPhoto.eWrapImg.children('img').animate({opacity: 0}, 300, 'easeInOutQuint', function () {
			$(this).attr({
				src: oSliderPhoto.sPhotoPath, 
				alt: oSliderPhoto.sPhotoAlt
			})
		}).delay(300).animate({opacity: 1}, 300, 'easeInOutQuint');
	},
	openModal: function () {
		oSliderPhoto.eModalPhoto.modal('show');
	}
}

oHeader = {
	eHead: null,
	isAnim: true,
	init: function () {
		oHeader.eHead = $('#pageblock-0');
		if (t > 0) oHeader.up();
	},
	up: function () {
		if (!oHeader.eHead.hasClass('is-anim') && oHeader.isAnim) {
			oHeader.isAnim = false;
			oHeader.eHead.stop().animate({
				left: 30,
				right: 30
			}, 300, function () {
				oHeader.eHead.addClass('is-anim');
			});
			oHeader.eHead.animate({top: -mainPd + 1}, 1000, 'easeOutQuart');
			eMain.stop().delay(100).animate({paddingTop: 0}, 1000, 'easeInQuad', function () {
				onScroll = true;
				oHeader.isAnim = true;
			});
		}
	},
	down: function () {
		onScroll = false;
		if (oHeader.eHead.hasClass('is-anim') && oHeader.isAnim) {
			oHeader.isAnim = false;
			oHeader.eHead.removeClass('is-anim');
			eMain.stop().animate({paddingTop: mainPd}, 1000, 'easeOutQuad');
			oHeader.eHead.stop().delay(100).animate({top: 0}, 1000, 'easeInQuart', function () {
				oHeader.isAnim = true;
			});
			oHeader.eHead.animate({
				left: 0,
				right: 0
			}, 300);
		}
	}
}

NavScrl = {
	sLast: null,
	eNav: null,
	eNavItem: null,
	scrlItem: null,
	iHeaderHeight: 60,
	init: function () {
		this.eNav = $('.navbar-nav, .footer-nav'),
		this.eNavItem = $('.navbar-nav a, .footer-nav a'),
		this.scrlItem = this.eNavItem.map(function () {
			var sElem = $(this).attr('href');
			if (sElem.length > 1) {
				var sItem = $(sElem);
				if (sItem.length) return sItem;
			}
		})
		if (window.location.hash.length) {
			setTimeout(function () {
				NavScrl.scrollToElem(window.location.hash);
			},1)
		}
		this.eNavItem.click(function (event) {
			NavScrl.clicked(event, this)
		});
		//NavScrl.scrolling();
	},
	clicked: function (event, elem) {
		var sHref = $(elem).attr('href');
		NavScrl.scrollToElem(sHref);
		event.preventDefault();
	},
	scrollToElem: function (sHref) {
		if (!$(sHref).offset()) {
			console.info('not element '+ sHref);
			return false;
		};
		var offsetTop = sHref === '#' ? 0 : $(sHref).offset().top - NavScrl.iHeaderHeight;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 300);
		//window.location.hash = sHref.substring(1);
	},
	scrolling: function () {
		if (!NavScrl.scrlItem) return false;
		var cur = NavScrl.scrlItem.map(function () {
			if ($(this).offset().top < t + window.innerHeight / 2) return this;
		});
		cur = cur[cur.length-1];
		var sHash = cur && cur.length ? cur[0].id : '';
		if (NavScrl.sLast !== sHash) {
			NavScrl.sLast = sHash;
			NavScrl.eNav.find('li').removeClass('active');
			if (sHash.length > 0) NavScrl.eNav.find('a[href="#'+ sHash +'"]').parent().addClass('active');
			sHash = '#'+ sHash.replace('goto-','');
			window.history.pushState(null, null, sHash);
			//window.location.hash = sHash;
		}
	}
};

