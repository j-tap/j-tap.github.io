t = $(window).scrollTop();
w = $(window).width();
h = $(window).height();
scrlDirection = 'down';
isScroll = false;

tIsScrl = false;

$(function () {
	$(window).scroll(function () {
		isScroll = true;
		if (t > $(this).scrollTop()) scrlDirection = 'up'
		else scrlDirection = 'down';
		t = $(this).scrollTop();

		if (tIsScrl) clearTimeout(tIsScrl);
		tIsScrl = setTimeout(function () {
			isScroll = false;
			scrollStop();
		}, 50);

		if (t == 0 && scrlDirection == 'up') {
			$('.scroll-ship').removeClass('active');
		} else if (t > 0 && scrlDirection == 'down') {
			$('.scroll-ship').addClass('active');
		}

		var oHeaderScrollBlur = new scrollBlur(
			'#headerMainBg', 
			$('#headerMainInfo').offset().top / 3, 
			$('#mainBlockShipsTypes').offset().top
		);

		oMainMap.setActive();

	}).resize(function () {
		w = $(window).width();
		h = $(window).height();

		oHeader.oExtra.sizeinit();
		oFooterNav.sizeinit();

	}).on('load', function () {
		
	})

	oHeader.oExtra.init();
	oHeader.oSerch.init();
	oLng.init();
	oFooterNav.init();

	var oShipsTypes = new oMarkSlide($('.ships-types-list'), $('.ships-type-item'), $('.ships-types-list-line'));
	var oSlideTabs = {};
	$('.nav-item-mark').each(function (i) {
		oSlideTabs[i] = new oMarkSlide($(this).parents('.nav-tabs'), $(this).siblings().children(), $(this));
	})

	$('.main-project-slider').on('setPosition', function(slick) {
		var setBtnPosition = function () {
			var eSlick = $(slick.target),
				eSlide = eSlick.find('.slick-slide'),
				ePrev = eSlick.find('.slick-prev'),
				eNext = eSlick.find('.slick-next'),
				iOffset = (eSlick.outerWidth() - eSlide.outerWidth()) / 2 - ePrev.outerWidth() / 2;
			ePrev.css({'left': iOffset +'px'});
			eNext.css({'right': iOffset +'px'});
		}
		setBtnPosition();
		$(window).resize(setBtnPosition);
	}).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 800,
		cssEase: 'ease-in-out',
		variableWidth: true,
		variableHeight: true,
		centerMode: true,
		centerPadding: 0,
		responsive: [{
			breakpoint: 992,
			settings: {
				arrows: false,
			}
		}]
	});

	$('.main-project-ships-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 800,
		cssEase: 'ease-in-out',
		variableWidth: false,
		variableHeight: false,
		centerMode: true,
		centerPadding: 0,
		responsive: [{
			breakpoint: 1200,
			settings: {
				arrows: false,
				variableWidth: true,
				variableHeight: true,
				centerMode: true
			}
		}]
	});

	$('#headerMain').mousemove(function (e) {
		$('#headerMainCircle').css({'transform': 'translateX('+ (e.pageX * -1 / 30) +'px) translateY('+ (-(e.pageY * -1 / 30)) +'px)'});
		$('#headerMainCompass').css({'left': (e.pageX * -1 / 80) +'px', 'top': (-(e.pageY * -1 / 80) / 4) +'px'});
	});

	$('.nav-tabs').on('shown.bs.tab', function (e) {
		var eContent = $($(e.target).attr('href')),
			eSlider = eContent.find('.slick-slider');
		if (eSlider.length) {
			eSlider.slick('setPosition');
		}
	})
	
	oService.init();
	oMainMap.init();	
	
})

function onYouTubePlayerAPIReady () {
	$(function () {
		oService.video('servicesVideoBg', '2G5YVhuNNu8');
	})
}

oService = {
	init: function () {
		var _this = this,
			tBg = false;
			isBg: false;
		$('#mainBlockServices .services-tile').on('mouseenter', function () {
			isBg = true;
			_this.player.pauseVideo();
			$('#servicesVideoBgWrap').stop().fadeOut(400);
			if ($(this).data('bg')) {
				var eBg = $('#mainBlockServicesBg'),
					eBgEase = $('#mainBlockServicesBgEase'),
					sBg = $(this).data('bg'),
					sOldBg = eBg.css('backgroundImage').replace('url(','').replace(')','').replace(/\"/gi, "");

				if (sOldBg != 'none') eBgEase.css('backgroundImage', 'url('+ sOldBg +')').css('opacity', 1);
				eBg.css('backgroundImage', 'url('+ sBg +')');
				eBgEase.stop().animate({opacity: 0}, 500, function () {
					$(this).css('backgroundImage', 'none');
				})
			}
		}).on('mouseleave', function () {
			isBg = false;
			clearTimeout(tBg);
			tBg = setTimeout(function () {
				if (!isBg) {
					_this.player.playVideo();
					$('#servicesVideoBgWrap').stop().fadeIn(400);
				}
			}, 500);
		})
	},
	video: function (sElemId, sCodeVideo) {
		var _this = this;
		this.player = new YT.Player(sElemId, {
			playerVars: {
				'autoplay': 1,
				'controls': 0,
				'loop': 1,
				'wmode': 'opaque',
				'showinfo': 0,
				'playlist': sCodeVideo
			},
			videoId: sCodeVideo,
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onStateChange
			}
		});

		function onStateChange (e) {
			if (event.data == YT.PlayerState.ENDED) {
				_this.player.playVideo();
			}
		}
		function onPlayerReady (e) {
			e.target.mute();
			e.target.playVideo();
		}
		//this.player.pauseVideo();
		//this.player.playVideo();
	}
}

oMainMap = {
	init: function () {
		this.eMapWorld = $('#mainMapWorld'),
		this.eMapEurope = $('#mainMapEasteurope');
	},
	setActive: function () {
		if (t > this.eMapWorld.offset().top - h/2) {
			this.eMapWorld.not('.active').addClass('active');
		}
		if (t > this.eMapEurope.offset().top - h/2) {
			this.eMapEurope.not('.active').addClass('active');
		}
	}
}

oFooterNav = {
	init: function () {
		this.eTitles = $('.footer-nav-title');
		this.eList = this.eTitles.next('.footer-nav-list');

		oFooterNav.sizeinit();
	},
	sizeinit: function () {
		if (w < 768) {
			this.eList.addClass('footer-nav-list-collapse').slideUp(1);
			$('.footer-nav-list-collapse').prev().on('click.footerNavCollapse', function () {
				$('.footer-nav-list-collapse').stop().slideUp(200);
				$(this).next().stop().slideToggle(200);
			})
		} else {
			$('.footer-nav-list-collapse').unbind('click.footerNavCollapse').removeClass('footer-nav-list-collapse').slideDown(10);
		}
	}
}

function scrollBlur (elem, start, end) {
	this.eElem = $(elem),
	this.iStart = parseInt(start),
	this.iEnd = parseInt(end),
	this.iMaxVal = 10,
	this.iVal = (t - this.iStart) / ((this.iEnd - this.iStart) / this.iMaxVal);
	if (t < this.iEnd && t > this.iStart) 
		this.eElem.css('filter','blur('+ this.iVal +'px)');
	else 
		this.eElem.css('filter','blur(0)');
}

function scrollStop () {
	if (scrlDirection == 'down') $('.scroll-ship').removeClass('active');
}

function oMarkSlide (block, item, mark) {
	var _this = this;
	this.eBlock = block,
	this.eItem = item,
	this.eMark = mark;

	$(window).on('mousemove', function (e) {
		_this.initActive();
		var l = _this.iLeft, 
			w = _this.iWidth;
		if ($(e.target).closest(_this.eItem).length) {
			var eItem = $(e.target).closest(_this.eItem);
			l = eItem.offset().left - _this.eBlock.offset().left,
			w = eItem.outerWidth();
		}
		_this.eMark.css('left', l);
		_this.eMark.width(w);
	})

	this.initActive = function () {
		if (this.eItem.filter('.active').length) {
			this.eActive = this.eItem.filter('.active');
			this.iLeft = this.eActive.offset().left - this.eBlock.offset().left,
			this.iWidth = this.eActive.outerWidth();
		} else {
			this.eActive = false;
			this.iLeft = 0,
			this.iWidth = 0;
		}
	}
}

oHeader = {
	oExtra: {
		w: 0,
		h: 0,
		eNav: null,
		eBtn: null,
		init: function () {
			this.eNav = $('#navbarNavMore'),
			this.eBtn = $('#btnNavbarNavMore'),
			this.sizeinit();
			
			this.eBtn.click(function (e) {
				e.preventDefault();
				e.stopPropagation();
				$(this).toggleClass('active');
				oHeader.oExtra.toggle();
				return false;
			})
		},
		toggle: function () {
			if (oHeader.oExtra.eNav.hasClass('open')) { // Hide
				oHeader.oExtra.eNav.stop().animate({
					width: 0,
					height: 0
				}, 300, function () {
					oHeader.oExtra.eNav.removeAttr('style').hide().removeClass('open');
				});
			} else { // Show
				oHeader.oExtra.eNav.width(0).height(0).show();
				oHeader.oExtra.eNav.stop().animate({
					width: oHeader.oExtra.w,
					height: oHeader.oExtra.h
				}, 300, function () {
					oHeader.oExtra.eNav.addClass('open');
				})
			}
		},
		sizeinit: function () {
			this.h = this.eNav.height();
			this.w = this.eNav.width();
		}
	},
	oSerch: {
		eBtn: null,
		eField: null,
		init: function () {
			this.eBtn = $('#btnHeaderSearch'),
			this.eField = $('#inputHeaderSearch'),
			this.iWidth = 280;

			$(document).click(function (e) {
				if ($(e.target).closest(oHeader.oSerch.eBtn).length) {
					if (oHeader.oSerch.eField.hasClass('active')) oHeader.oSerch.send()
					else oHeader.oSerch.show();
				} else if (oHeader.oSerch.eField.hasClass('active') && !$(e.target).closest(oHeader.oSerch.eBtn.parent()).length) { 
					oHeader.oSerch.hide();
				}
			})

			this.eField.on('keypress', function (e) {
				if (e.charCode == 13) oHeader.oSerch.send();
			})
		},
		show: function () {
			this.initWidth();
			oHeader.oSerch.eField.addClass('active').stop().animate({width: this.iWidth +'px'}, 250);
		},
		hide: function () {
			oHeader.oSerch.eField.removeClass('active').animate({width: 0}, 250);
			oHeader.oSerch.eField.val('');
		},
		send: function () {
			var s = oHeader.oSerch.eField.val();
			if (s.length) {
				console.info('Send search: '+ s);
				oHeader.oSerch.hide();
			}
		},
		initWidth: function () {
			if (w < 576) this.iWidth = 240;
			if (w < 380) this.iWidth = 195;
		}
	}
}

oLng = {
	eBlock: null,
	eBtn: null,
	eList: null,
	lang: null,
	init: function () {
		this.eBlock = $('.lng-select'),
		this.eList = oLng.eBlock.children('ul'),
		this.eBtn = oLng.eBlock.children('div'),
		this.onChg();

		this.eBtn.text(oLng.eList.find('.active a').text());

		$(document).click(function (e) {
			if ($(e.target).is(oLng.eBtn)) { // Div
				if (oLng.eBlock.hasClass('open')) oLng.hide();
				else oLng.show();
			} else if ($(e.target).is(oLng.eList.find('a')) && oLng.eBlock.hasClass('open')) { // Link
				oLng.eBtn.text($(e.target).text());
				$(e.target).parent().siblings().removeClass('active');
				$(e.target).parent().addClass('active');
				oLng.onChg();
				oLng.hide();
			} else if (oLng.eBlock.hasClass('open')) { // Without lng
				oLng.hide();
			}
		})
	},
	show: function () {
		oLng.eBlock.addClass('open');
		oLng.eList.stop().slideDown(150);
	},
	hide: function () {
		oLng.eBlock.removeClass('open');
		oLng.eList.stop().slideUp(150);
	},
	onChg: function () {
		oLng.lang = oLng.eList.find('.active a').data('lng');
		//console.info('Current language: '+ oLng.lang);
	}
}
