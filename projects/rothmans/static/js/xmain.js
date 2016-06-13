iWinWidth = 0;

$(window).load(function () {
	iWinWidth = $(window).width();
	if ($('.head-experts__list').length) oBxExpert.init();

});

$(window).resize(function () {
	iWinWidth = $(window).width();
});

var deviceAgent = navigator.userAgent.toLowerCase();
var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
var eventName = (agentID) ? "touchstart" : "click";

var pack1played = false;
var pack2played = false;
var slider_tab;
var oSlideTabSet = {
	onSliderLoad: function () {
		var sSelectors = '.bx_tabak_secret .fon3, .bx_tabak_secret .fon4 .secrets_fon_box';
		if ($.browser.safari) {
			var window_width = $(window).innerWidth();
			var width_menu;
			if (window_width > 1099) {
				width_menu = $('.nav-main').width();
			} else {
				width_menu = 0;
			}
			if (window_width > 1099) {
				var new_padding_main = window_width / 100 * 14.1 - width_menu;
				$(sSelectors).css({
					paddingLeft: new_padding_main,
				});
			}
			if (window_width >= 800 && window_width < 1100) {
				var window_width2 = $(window).innerWidth();
				var new_padding1000 = window_width2 / 100 * 7;
				$(sSelectors).css({
					paddingLeft: new_padding1000,
				});
			}
		} else {
			var window_width = window.innerWidth;
			var width_menu;
			if (window_width > 1099) {
				width_menu = $('.nav-main').width();
			} else {
				width_menu = 0;
			}
			if (window_width > 1099) {
				var window_width = $(window).innerWidth();
				var new_padding_main = window_width / 100 * 14.1 - width_menu;
				$(sSelectors).css({
					paddingLeft: new_padding_main,
				});
			}
			if (window_width >= 800 && window_width < 1100) {
				var window_width2 = $(window).innerWidth();
				var new_padding1000 = window_width2 / 100 * 7;
				$(sSelectors).css({
					paddingLeft: new_padding1000,
				});
			}
		}
	},
	pager: true,
	pagerType: 'full',
	controls: false,
	auto: true,
	pause: 7000,
	adaptiveHeight: true,
	startSlide: 0
};
var width_menu = $('.panel').width();

function size_panel() {
	if ($.browser.safari) {
		var window_width = $(window).innerWidth();
		if (window_width >= 800 && window_width < 1100) {
			$('.avatar').addClass('avatar_800');
			$('.points').addClass('points_800');
			$('.logo').addClass('logo_800');
			$('.account').addClass('account_800');
			$('.cart').addClass('cart_800');
			$('.chat').addClass('chat_800');
		} else {
			$('.avatar').removeClass('avatar_800');
			$('.points').removeClass('points_800');
			$('.logo').removeClass('logo_800');
			$('.account').removeClass('account_800');
			$('.cart').removeClass('cart_800');
		}       
		if (window_width >= 800 && window_width < 1100) {
			var window_width2 = $(window).innerWidth();
			var new_padding1000 = window_width2 / 100 * 7;
			var new_pad_icon = window_width2 / 2 - new_padding1000 - 37;
			console.log(window_width2);
			console.log(new_padding1000);
			console.log(new_pad_icon);
			$('.load_video .play-video_icon').css({ marginLeft: new_pad_icon });
			$('.pack-article-page .video_load_fon').css({ paddingLeft: new_padding1000 });
			$('.expert .columns.left.load_video').css({ paddingLeft: new_padding1000 });
			$('.expert .columns.left.reg_friend').css({ paddingLeft: new_padding1000 });
			$('.how_its_work_block').css({ paddingLeft: new_padding1000 });
			//          $('.bx_tabak_secret .fon3').css({paddingLeft: new_padding1000});
		}
	} else {
		var window_width = window.innerWidth;
		if (window_width >= 800 && window_width < 1100) {
			var window_width2 = $(window).innerWidth();
			var new_padding1000 = window_width2 / 100 * 7;
			var new_pad_icon = window_width2 / 2 - new_padding1000 - 37;

			$('.load_video .play-video_icon').css({ marginLeft: new_pad_icon });
			$('.pack-article-page .video_load_fon').css({ paddingLeft: new_padding1000 });
			$('.expert .columns.left.load_video').css({ paddingLeft: new_padding1000 });
			$('.expert .columns.left.reg_friend').css({ paddingLeft: new_padding1000 });
			$('.how_its_work_block').css({ paddingLeft: new_padding1000 });
			//          $('.bx_tabak_secret .fon3').css({paddingLeft: new_padding1000});
		}
		if (window_width >= 800 && window_width < 1100) {
			$('.avatar').addClass('avatar_800');
			$('.points').addClass('points_800');
			$('.logo').addClass('logo_800');
			$('.account').addClass('account_800');
			$('.cart').addClass('cart_800');
			$('.chat').addClass('chat_800');
		} else {
			$('.avatar').removeClass('avatar_800');
			$('.points').removeClass('points_800');
			$('.logo').removeClass('logo_800');
			$('.account').removeClass('account_800');
			$('.cart').removeClass('cart_800');
			$('.chat').removeClass('chat_800');
		}
	}
	if ($('.banner-info').length) {
		if (iWinWidth > 800) {
			$('.banner-info').each(function () {
				if ($(this).parent('.js-mobil-link').length) 
					$(this).unwrap();
			})
		} else {
			$('.banner-info').each(function () {
				if (!$(this).parent('.js-mobil-link').length && !$(this).find('a:visible').length) {
					$(this).wrap($('<a/>', {
						href: $(this).find('a').attr('href'),
						class: 'js-mobil-link'
					}))
				};
			})
		}
	}
}

$(window).load(size_panel);
$(window).resize(size_panel);

function windowSize() {
	if ($.browser.safari) {
		var window_width = $(window).innerWidth();
		var width_menu;
		if (window_width > 1099) {
			width_menu = $('.nav-main').width();
		} else {
			width_menu = 0;
		}
		if (window_width > 1099) {
			var new_padding = window_width / 100 * 12 - 80;
			var new_padding_main = window_width / 100 * 14.1 - width_menu;
			var marg_video_button = window_width / 2 - width_menu;
			var width_video_button = $('.play-video_icon').width() / 2;
			$('.play-video_icon').css({ marginLeft: marg_video_button - new_padding - width_video_button });
			$('.pack-article-page .video_load_fon').css({ paddingLeft: new_padding });
			$('.expert .columns.left.load_video').css({ paddingLeft: new_padding });
			$('.expert .columns.left.reg_friend').css({ paddingLeft: new_padding_main });
			$('.how_its_work_block').css({ paddingLeft: new_padding_main });
			//          $('.bx_tabak_secret .fon3').css({paddingLeft: new_padding_main});
		}
		if (window_width >= 800) {
			$('.text_for_load_info_change1').css('display', 'none');
			$('.text_for_load_info_change2').css('display', 'inline-block');
		} else {
			$('.text_for_load_info_change2').css('display', 'none');
			$('.text_for_load_info_change1').css('display', 'inline-block');
		}
		if ($('.bx_tabak_secret').length) {
			oSlideTabSet.startSlide = slider_tab.getCurrentSlide();
			slider_tab.reloadSlider();
		}
	} else {
		var window_width = window.innerWidth;
		var width_menu;
		if (window_width > 1099) {
			width_menu = $('.nav-main').width();
		} else {
			width_menu = 0;
		}
		var width_video_button = $('.play-video_icon').width() / 2;

		if (window_width > 1099) {
			var window_width = $(window).innerWidth();
			var new_padding = window_width / 100 * 12 - width_menu;
			var new_padding_main = window_width / 100 * 14.1 - width_menu;
			var marg_video_button = window_width / 2 - width_menu;
			$('.play-video_icon').css({ marginLeft: marg_video_button - new_padding - width_video_button });
			$('.pack-article-page .video_load_fon').css({ paddingLeft: new_padding });
			$('.expert .columns.left.load_video').css({ paddingLeft: new_padding });
			$('.expert .columns.left.reg_friend').css({ paddingLeft: new_padding_main });
			$('.how_its_work_block').css({ paddingLeft: new_padding_main });
			//          $('.bx_tabak_secret .fon3').css({paddingLeft: new_padding_main});
		}
		if (window_width >= 800) {
			$('.text_for_load_info_change1').css('display', 'none');
			$('.text_for_load_info_change2').css('display', 'inline-block');
		} else {
			$('.text_for_load_info_change2').css('display', 'none');
			$('.text_for_load_info_change1').css('display', 'inline-block');
		}
		if ($('.bx_tabak_secret').length) {
			oSlideTabSet.startSlide = slider_tab.getCurrentSlide();
			slider_tab.reloadSlider();
		}
	}
}
$(window).load(windowSize);
$(window).resize(windowSize);

function first_pack(e) {
	e.preventDefault();
	$('.openpack1, .openpack1 ~.open, .openpack1 ~.close').unbind('click');
	if (pack1played === true) {
		$(".openpack1").spriteAnimation({
			frames: 25,
			fps: 25,
			action: 'close',
			onAnimationStart: function () {
				$('.openpack1 ~ .close').hide();
			},
			onAnimationFinish: function () {
				$('.openpack1, .openpack1~.open, .openpack1 ~ .close').on('click', first_pack);
				$('.openpack1 ~ .open').show();
			}
		});
		pack1played = false;
	} else {
		$(".openpack1").spriteAnimation({
			frames: 25,
			fps: 25,
			action: 'open',
			onAnimationStart: function () {
				$('.openpack1 ~ .open').hide();
			},
			onAnimationFinish: function () {
				$('.openpack1, .openpack1 ~ .open, .openpack1 ~ .close').on('click', first_pack);
				$('.openpack1 ~ .close').show();
			}
		});
		pack1played = true;
	}
}
function second_pack(e) {
	e.preventDefault();
	$('.openpack2, .openpack2 ~ .open, .openpack2 ~.close').unbind('click');
	if (pack2played === true) {
		$(".openpack2").spriteAnimation({
			frames: 30,
			fps: 25,
			action: 'close',
			onAnimationStart: function () {
				$('.openpack2 ~ .close').hide();
			},
			onAnimationFinish: function () {
				$('.openpack2, .openpack2 ~ .open,.openpack2 ~ .close').on('click', second_pack);
				$('.openpack2 ~ .open').show();
			}
		});
		pack2played = false;
	} else {
		$(".openpack2").spriteAnimation({
			frames: 30,
			fps: 25,
			action: 'open',
			onAnimationStart: function () {
				$('.openpack2 ~ .open').hide();
			},
			onAnimationFinish: function () {
				$('.openpack2, .openpack2 ~ .open,.openpack2 ~ .close').on('click', second_pack);
				$('.openpack2 ~ .close').show();
			}
		});
		pack2played = true;
	}

}

function openConfirmPopup(selector) {
	var $popup = selector ? $(selector) : $(".confirm-reg-popup-wrap");

	var offset = $(window).scrollTop();
	$popup.addClass("confirm-reg-popup-wrap_opened");
	$('body').css('overflow', 'hidden');

	$popup.css({
		"overflowY": "scroll"
	});

	if ($().jScrollPane) {
		$popup.find(".scroll-pane").jScrollPane({
			verticalGutter: 35
		});
	}

};

$(function () {

	iWinWidth = $(window).width();

	$('.video-js').each(function (i) {
		if (!$(this).attr('id')) $(this).attr('id', 'video-js-player-' + i);
		var sId = $(this).attr('id');
		videojs(sId).on('play', function () {
			vjs_progress_bar()
		});
	})

	$('.openpack1, .openpack1 ~.open, .openpack1 ~.close').on('click', first_pack);
	$('.openpack2, .openpack2 ~ .open, .openpack2 ~.close').on('click', second_pack);

	if ($('.articles-block__loading').length) oLoadToScroll.init();
	oNavMain.init();

	// $('.dropmenu .box').height($(window).height()-40);
	// $('.lk_points, .lk_invite').css('min-height', $(window).height()-(-10));
	// $('.form_box').css('min-height', $(window).height());
	// $('.after_reg, .form_box .box').height($(window).height());
	
	/*$('.form select').selectbox();
	$("#owl-example").owlCarousel({
		itemsDesktop: [1500, 3],
		itemsDesktopSmall: [1050, 3],
		itemsMobile: [640, 2],
		navigation: true,
		pagination: false
	});

	$("#owl-example2").owlCarousel({
		itemsDesktop: [1500, 3],
		itemsDesktopSmall: [1050, 2],
		itemsMobile: [640, 2],
		navigation: true,
		pagination: false
	});*/

	$('.noti .close').click(function (e) {
		e.preventDefault();
		$('.noti').slideUp();
	});

	$('.panel .menu_link').click(function (e) {
		e.preventDefault();
		$('.dropmenu').fadeIn();
		$('#page-container-wrapper').css("overflow", "hidden");
		$('#page-container-wrapper').css("position", "fixed");
	});
	$('.dropmenu .close').click(function (e) {
		e.preventDefault();
		$('.dropmenu').fadeOut(200);
		$('#page-container-wrapper').css("overflow", "");
		$('#page-container-wrapper').css("position", "");
	});

	$('.carousel ul').bxSlider({ pager: false, mode: 'fade' });


	$('.banners-wrap ul.bxslider').bxSlider({
		pager: false,
		controls: false,
		auto: true,
		pause: 5000,
		mode: 'fade'
	});

	
	//FAQ
	$('.faq .name').click(function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next().stop().slideUp();
		} else {
			$('.faq .name').removeClass('active').siblings('.data').slideUp();
			$(this).addClass('active').next().stop().slideDown();
		}
	});


	$("form.form input[type=password]").keypress(function (e) {
		if (e.keyCode == 13) {
			$(this).parents("form.form").submit();
			return false;
		}
	});


	$(".registration-form input[name=agree]").on("change", function () {
		if ($(this).prop("checked")) {
			openConfirmPopup();
		};
	});

	$(".form .conditions a").on("click", function () {
		openConfirmPopup();
		return false;
	});

	$(".confirm-r-p-overlay, .confirm-r-p-closer, .confirm-btn").on("click", function () {
		$(this).parents(".confirm-reg-popup-wrap").removeClass("confirm-reg-popup-wrap_opened");
		$('body').css('overflow', 'auto');
		$('.confirm-reg-popup-wrap').css({ "overflowY": "hidden" });
		if ($('.b-certificate').length) certificate();
		return false;
	});


	$('.nashe2015-gallery .bxslider-wrap.big .bxslider').bxSlider({
		pager: false,
		autoWidth: true,
		autoHeight: true,
		autoResize: true,
		onSlideAfter: function ($slideElement, oldIndex, newIndex) {
			if (newIndex > 0 && $slideElement.html() == '&nbsp;') {
				$.ajax({
					method: "GET",
					url: "/ajaxGallery.php"
				})
					.done(function (response) {
						var images = jQuery.parseJSON(response);
						$slideElement.empty();
						$.each(images, function (index, img) {
							var item = $('<a class="zoom" data-fancybox-group="gallery" href="' + img.big + '"><img src="' + img.thumb + '" alt="" /></a>');
							$slideElement.append(item);
							item.hide().fadeIn(Math.floor(Math.random() * (1500 - 10 + 1)) + 10);
						});

					});
			}

		}
	});
	var slider3 = $('.nashe2015-gallery .bxslider-wrap.small .bxslider').bxSlider({
		pager: true,
		pagerType: 'short',
		adaptiveHeight: true
	});

	if ($().fancybox) {
		$('.bxslider-wrap.big .zoom').fancybox({
			scrolling: 'no',
			margin: 0,
			padding: 0,
			autoWidth: true,
			showCloseButton: true,
			maxWidth: '68%',
			maxHeight: '68%',
			beforeLoad: function () {
				//this.title = '<span>' + this.index + '/</span>';
			},
			helpers: {
				title: {
					type: 'inside'
				}
			}
		});
	}

	if ($('.winners-gallery').length) {

		var oWinnersSlider,
			tDelayPrint;

		function printSlider() {
			if ($(window).innerWidth() <= 800) {
				if ($('#carousel').length == 0 && $('.carousel-container').length == 0 && $('.carousel-feature').length == 0) {
					$('.winners-gallery__item').wrapAll('<div id="carousel"></div>');
					$('.winners-gallery__item').wrap('<div class="carousel-feature"></div>');
					$('#carousel').wrap('<div class="carousel-container"></div>');
					$('.winners-gallery__item').css({ 'minWidth': '100%' }).find('a').removeClass('zoom');
					oWinnersSlider = $('#carousel').featureCarousel({
						largeFeatureWidth: 420,
						largeFeatureHeight: 420,
						smallFeatureWidth: 320,
						smallFeatureHeight: 320,
						sidePadding: -167,
						autoPlay: 0,
						trackerIndividual: false,
						trackerSummation: false,
						movedToCenter: function (eCurElem) {
							eCurElem.addClass('carousel-feature-current').find('a').addClass('zoom');
						},
						leavingCenter: function (eOldElem) {
							eOldElem.removeClass('carousel-feature-current').find('a').removeClass('zoom');
						}
					})
				}
			} else {
				if ($('#carousel').length > 0 && $('.carousel-container').length > 0 && $('.carousel-feature').length > 0) {
					$("#carousel").unwrap();
					$('.carousel-feature').unwrap();
					$('.winners-gallery__item').unwrap();
					$('.tracker-summation-container').remove();
					$('.winners-gallery__item').css({ 'minWidth': 'auto' }).find('a').addClass('zoom');
				}
			}
		};
		var sDirection = false;
		oWinnersGallery = $('.winners-gallery .zoom').fancybox({
			afterLoad: function (current, previous) {
				if (previous !== null) {
					$(previous.href).find('video')[0].pause();
					$(previous.href).find('video')[0].currentTime = 0;
					sDirection = current.index > previous.index ? 'next' : 'prev';
				} else if (current !== null) {
					$(current.href).find('video')[0].pause();
					$(current.href).find('video')[0].currentTime = 0;
					sDirection = false;
				};
			},
			beforeShow: function () {
				this.wrap.addClass('winners-gallery-fancybox');
				var oSet = {
					opacity: 0,
					left: 200
				};
				if (sDirection && sDirection == 'next') oSet.left = 200
				else if (sDirection && sDirection == 'prev') oSet.left = -200;
				$(this.wrap).find('.fancybox-inner').css(oSet)
			},
			afterShow: function () {
				var eElem = $(this.wrap);
				eElem.find('.winners-video__item video')[0].player.play();
				var oSet = {
					opacity: 1,
					left: 0
				};
				eElem.find('.fancybox-inner').stop().animate(oSet, 300)
			},
			mouseWheel: false,
			width: '100%',
			autoSize: false,
			loop: false,
			scrolling: 'no',
			prevEffect: 'none',
			nextEffect: 'none',
			helpers: {
				media: {},
				overlay: {
					css: {
						background: 'rgba(0, 0, 0, 0.8)'
					}
				},
				title: {
					type: 'inside'
				}
			}
		});

		printSlider();

		$(window).resize(function () {
			if (iWinWidth != $(window).width()) {
				clearTimeout(tDelayPrint);
				tDelayPrint = setTimeout(function () {
					printSlider();
					if (oWinnersSlider) oWinnersSlider.initialize();
				}, 300)
				iWinWidth = $(window).width();
			}
		})
	}

	/*$('body').on('mousewheel', function (event) {
		if (!$('.winners-gallery-fancybox').length) $.fancybox.close();
	});*/

	$(".play-video").on("click", function () {
		$(this).parents(".nvideo-wrap").find(".nvideo-popup").show();
		$(this).parents(".nvideo-wrap").find(".vjs-big-play-button").trigger("click");
		vjs_progress_bar();
		return false;
	});
	$(".back-to-year.n2014").on("click", function () {
		$(this).parents(".nvideo-carousel").addClass("left");
		return false;
	});
	$(".back-to-year.n2015").on("click", function () {
		$(this).parents(".nvideo-carousel").removeClass("left");
		return false;
	});
	
	// History sliders
	var slider = $('.history_slider1 ul').bxSlider({ 
		// slideWidth: 100,
		adaptiveHeight: true,
		pager: true,
		pagerType: 'short'
	});

	var slider2 = $('.history_slider2 ul').bxSlider({
		// slideWidth: 100,
		adaptiveHeight: true,
		pager: true,
		pagerType: 'short'
	});


	/* Quiz answers */

	   $(".quiz-answers .answer").on("click", function (e) {
		var $this = $(this);
		if ($this.hasClass('final')) {
			return;
		}
		var data = $this.data();
		e.preventDefault();
		var $quizElem = $(this).parents('.quiz-element');
		$this.parent().find('.answer').removeClass('active');
		$this.addClass('active');
		$this.parents('.quiz-answers').find('input').val(data.id);
		if ($quizElem.hasClass('last')) {
			$('#quiz-form').submit();
		} else {
			$quizElem.removeClass('current').next().addClass('current');
		}
	});



	/* Store product info */

	$(".cartbox .item img, .cartbox .item .info, .cartbox .item .description").on('click', function (e) {
		e.preventDefault();
		current = $(this).parent();

		$(".cartbox .item .description").fadeOut(400);
		$(".cartbox .item img").removeClass('blur');
		$(".cartbox .item .price, .cartbox .item .buy").removeClass('hide');
		$(this).parent().parent().find('.item').not(current).removeClass('active');

		$(this).parent().toggleClass('active');

		if ($(this).parent().hasClass('active')) {
			$(this).parent().find('.description').fadeToggle(400);
			$(this).parent().find('img').toggleClass('blur');
			$(this).parent().find('.price').toggleClass('hide');
			$(this).parent().find('.buy').toggleClass('hide');
		}
	});


	$(".informer_block .close").on("click", function (e) {
		e.preventDefault();
		$(this).parent().fadeOut('300');
	});


	// $('.article-pack-pull-container').jScrollPane({autoReinitialise:true});
	//TweenMax.to($('.article-pack2'), 2, {css:{backgroundPosition :"46116px 0px"}, ease:SteppedEase.config(61), repeat:-1, yoyo:true});

	show1 = function () {
		$("#hide_area1").show();
	}
	hide1 = function () {
		$("#hide_area1").hide();
	}
	show2 = function () {
		$("#hide_area2").show();
	}
	hide2 = function () {
		$("#hide_area2").hide();
	}
	show3 = function () {
		$("#hide_area3").show();
	}
	hide3 = function () {
		$("#hide_area3").hide();
	}
	show4 = function () {
		$("#hide_area4").show();
	}
	hide4 = function () {
		$("#hide_area4").hide();
	}

	$('.invite .form .txt_1 .input').on("focus", function () {
		$('.account-pages .form .txt_1 .submit .button').addClass('button_hover');
		$('.account-pages .form .txt_2 .submit .button').removeClass('button_hover');
	});
	$('.invite .form .txt_2 .input').on("focus", function () {
		$('.account-pages .form .txt_2 .submit .button').addClass('button_hover');
		$('.account-pages .form .txt_1 .submit .button').removeClass('button_hover');
	});
	$('.invite .form .txt_1 .input').focusout(function () {
		$('.account-pages .form .txt_1 .submit .button').removeClass('button_hover');
	});
	$('.invite .form .txt_2 .input').focusout(function () {
		$('.account-pages .form .txt_2 .submit .button').removeClass('button_hover');
	});


	oVideoExpert.init();

	/**
	* ������ ������������ ��� ����������� � ������
	**/
	function scrollDisclaimer() {
		if (window.innerWidth > 750 && $('footer').length > 0) {
			var startPosDisclaimer = $('footer').offset().top;
			window.onload = function () {
				startPosDisclaimer = $('footer').offset().top;
			}
			var endPosDisclaimer = startPosDisclaimer + 200;
			var new_pos = $(window).scrollTop() + $(window).height();
			var scrol = (new_pos - startPosDisclaimer) / 200;
			var opt = 1 - scrol;
			if (new_pos > endPosDisclaimer) {
				$('.disclaimer.scroll').css({ 'display': 'none', 'opacity': 0 });
			} else {
				if (new_pos > startPosDisclaimer) {
					$('.disclaimer.scroll').css({ 'display': 'inline-block', 'opacity': opt });
				} else {
					$('.disclaimer.scroll').css({ 'display': 'inline-block', 'opacity': 1 });
				}
			}
			$(window).scroll(function () {

				new_pos = $(window).scrollTop() + $(window).height();
				scrol = (new_pos - startPosDisclaimer) / 200;
				opt = 1 - scrol;

				if (new_pos > endPosDisclaimer) {
					$('.disclaimer.scroll').css({ 'display': 'none', 'opacity': 0 });
				} else {
					if (new_pos > startPosDisclaimer) {
						$('.disclaimer.scroll').css({ 'display': 'inline-block', 'opacity': opt });
					} else {
						$('.disclaimer.scroll').css({ 'display': 'inline-block', 'opacity': 1 });
					}
				}

			});
		} else {
			$('.disclaimer.scroll').css('display', 'none');
		}
	}
	function caruselWigthLine() {
		var margFirst = 0;
		var margLast = 0;
		if ($(window).innerWidth() <= 1100) {
			margFirst = 38;
			margLast = 35;
		}

		if ($('.expert-carysel--circle').length > 0) {
			$('.expert-carysel--item').width(Math.floor($('.expert-carysel--container').width()));
			var cont = $('.expert-carysel--item').width();
			var box = cont / 4;
			$('.expert-carysel--item--box').width(Math.floor(box));

			$('.expert-carysel--circle').each(function () {

				var wb = ($(this).parent('.expert-carysel--item--box').outerWidth() - 34) / 2;

				$(this).prev('.carusel-line.left').css({ 'width': wb });
				$(this).next('.carusel-line.right').css({ 'width': wb });
				if ($(this).prev('.carusel-line.left').hasClass('first')) {
					var first = (wb + margFirst + 2);
					$(this).prev('.carusel-line.left').css({ 'marginLeft': '-' + margFirst + 'px', 'width': first + 'px', 'marginRight': '-2px' });
				} else {
					var first = (wb + 1);
					$(this).prev('.carusel-line.left').css({ 'marginRight': '-3px', 'width': first + 'px' });
				}
				if ($(this).next('.carusel-line.right').hasClass('last')) {
					var last = (wb + margLast + 2);
					$(this).next('.carusel-line.right').css({ 'marginRight': '-' + margLast + 'px', 'marginLeft': '-2px', 'width': last + 'px' });
				} else {
					var last = (wb + 2);
					$(this).next('.carusel-line.right').css({ 'width': last + 'px', 'marginLeft': '-2px' });

				}
			});

		}
	}
	function vjs_progress_bar() {
		if ($('.video-js').length) {
			$('.video-js').each(function () {
				var play = 0;
				var volume = 0;
				var time = 0;
				var res = 0;
				var fullscreen = 0;
				var elem = $(this);
				if (elem.find('.vjs-play-control').length) {
					play = elem.find('.vjs-play-control').width();
				}
				if (elem.find('.vjs-volume-menu-button').length) {
					volume = elem.find('.vjs-volume-menu-button').width();
				}
				if (elem.find('.vjs-current-time').length) {
					time = elem.find('.vjs-current-time').width();
				}
				if (elem.find('.vjs-res-button').length) {
					res = elem.find('.vjs-res-button').width();
				}
				if (elem.find('.vjs-fullscreen-control').length) {
					fullscreen = elem.find('.vjs-fullscreen-control').width();
				}
				var width_battons = play + volume + time + res + fullscreen;
				var width_control_bar = elem.find('.vjs-control-bar').width();
				var progress = width_control_bar - width_battons;
				elem.find('.vjs-progress-control').width(Math.floor(progress));
			});

		}

	}
	$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
		setTimeout(function () {
			vjs_progress_bar();
		}, 100);
		setTimeout(function () {
			vjs_progress_bar();
		}, 300);
		setTimeout(function () {
			vjs_progress_bar();
		}, 1000);

	});
	scrollDisclaimer();
	caruselWigthLine();
	certificate();
	vjs_progress_bar();
	$(window).resize(function () {
		scrollDisclaimer();
		certificate();
		caruselWigthLine();

		vjs_progress_bar();
	});
	// function padding_oclock(){   
	//  if($.browser.safari){
	//      var window_width = $(window).innerWidth();      
	//  } else{
	//      var window_width = window.innerWidth;           
	//  }   
	//  if($('.certificate-info__box.first div').length){
	//      var panel = 0;
	//      if(window_width > 1099){
	//          var panel = $('.panel').width();
	//      }
	//      var padd = $('.certificate-info__box.first div').offset().left;
	//      var padding = padd - panel;
	//      if(padd > 300 || window_width < 800){
	//          padding='';
	//      }
	//      $('.certificate-rules').css({'paddingLeft':padding});                   
	//  }       
	// }
	
	if ($('.expert-carysel').length > 0) {
		$('.expert-carysel--item--box:first').addClass('activ');
		$elem = $('.expert-carysel--item--box.activ');
		$elem.addClass('activ');
		$elem.find('.expert-carysel--image').stop().animate({
			opacity: 1,
			marginBottom: '0px'
		}, 250);
		$elem.find('.expert-carysel--text').stop().delay(100).animate({
			opacity: 1
		}, 150);
		$elem.find('.expert-carysel--scircle').stop().animate({
			opacity: 1
		}, 250);
	}
	$('.expert-carysel--circle').mouseenter(function () {
		if (!$(this).hasClass('activ')) {

			$elem = $('.expert-carysel--item--box');
			$newelem = $(this).parents('.expert-carysel--item--box');

			$elem.removeClass('activ');
			$newelem.addClass('activ');
			$oldelem = $('.expert-carysel--item--box:not(.activ)');

			$oldelem.find('.expert-carysel--text').stop().animate({
				opacity: 0
			}, 150);
			$oldelem.find('.expert-carysel--image').stop().animate({
				opacity: 0,
				marginBottom: '-20px'
			}, 250);
			$oldelem.find('.expert-carysel--scircle').stop().animate({
				opacity: 0
			}, 250);

			$newelem.find('.expert-carysel--image').stop().animate({
				opacity: 1,
				marginBottom: '0px'
			}, 250);
			$newelem.find('.expert-carysel--text').stop().delay(100).animate({
				opacity: 1
			}, 150);
			$newelem.find('.expert-carysel--scircle').stop().animate({
				opacity: 1
			}, 250);
		}
	});
	if ($('.bx-carysel').length && (typeof ($.fn.bxSlider) != 'undefined')) {
		var slider = $('.bx-carysel').bxSlider({
			pager: false,
			controls: false,
			auto: false,
			pause: 5000,
			mode: 'fade',
			speed: 0,
			onSliderLoad: function () {
				var li = $('.bx-carysel li:first');
				li.find('.image--box--container').stop().animate({
					opacity: 1,
					top: 0
				}, 250);
				li.find('.carysel-smal--text--box').stop().delay(100).animate({
					opacity: 1
				}, 150);
			},
			onSlideAfter: function ($slideElement) {
				$slideElement.find('.image--box--container').stop().animate({
					opacity: 1,
					top: 0
				}, 250);
				$slideElement.find('.carysel-smal--text--box').stop().delay(100).animate({
					opacity: 1
				}, 150);
			}
		});
		$('.image--box--container').on('click', function () {
			var elem = $(this).parents('li');
			elem.find('.carysel-smal--text--box').stop().animate({
				opacity: 0
			}, 150);
			elem.find('.image--box--container').stop().animate({
				opacity: 0,
				top: 20
			}, 250, function () {
				slider.goToNextSlide();
				return false;
			});
		});
	}

	slider_tab = $('.bx_tabak_secret').bxSlider(oSlideTabSet);

	$('.b-certificate').hover(function () {

	}
	/*function(){
		$(this).find('.b-certificate__logo_box').fadeOut(300);
		$(this).find('.b-certificate__text-blur').fadeIn(300);
		$(this).find('.b-certificate__bg_blur').animate({opacity:1},400);
					
	},
	function(){         
		$(this).find('.b-certificate__logo_box').fadeIn(300);
		$(this).find('.b-certificate__text-blur').fadeOut(300); 
		$(this).find('.b-certificate__bg_blur').animate({opacity:0},400);     
	}*/
		);

	$(".play-video_icon").on('click', function () {

		$('.video_load_fon').css('display', 'none');
		$('.size_video').css('display', 'block');
		var player = videojs('vjs_video_entertainment');
		player.play();
		player.on('ended', function () {
			$('.video_load_fon').css('display', 'block');
			$('.size_video').css('display', 'none');
		});
	});
	$(".play-button").on('click', function () {

		$('.winter-video .expert-background').css('display', 'none');
		$('.size_video').css('display', 'block');
		var player = videojs('vjs_video_entertainment');
		player.play();
		player.on('ended', function () {
			$('.winter-video .expert-background').css('display', 'block');
			$('.size_video').css('display', 'none');
		});
	});
	var width_scroll = $('.disclaimer.scroll').width() / 2;
	var width_content = $('.after-bar').innerWidth() / 2;
	$(window).resize(function () {
		width_scroll = $('.disclaimer.scroll').width() / 2;
		width_menu = $('.panel').width();
		width_content = $('.after-bar').innerWidth() / 2;

		$('.disclaimer.scroll').css({
			right: width_content,
		})


	});
	$('.disclaimer.scroll').css({
		right: width_content,
	});

	if ($('.js-history_bg_parallax').length) {



		var historyBoxPos = $('.js-history_bg_parallax').offset().top;
		$(document).scroll(function () {
			var scrollPos = $(document).scrollTop();
			if (scrollPos + $(window).height() >= historyBoxPos) {

				var bgPos = $('.his1').css('background-position').split(" ")[1];
				bgPos = bgPos.substr(0, bgPos.length - 2);
				var newBgPos = '';
				if ($(window).height() <= 1000) {
					newBgPos = (historyBoxPos - (scrollPos + $(window).height())) * .6;
				}
				if ($(window).height() > 1000 && $(window).height() <= 2000) {
					newBgPos = (historyBoxPos - (scrollPos + $(window).height())) * .3;
				}
				if ($(window).height() > 2000) {
					newBgPos = (historyBoxPos - (scrollPos + $(window).height())) * .1;
				}

				$('.his1').css({
					backgroundPosition: '50% ' + newBgPos + 'px'
				})
			}
		});

	}

	if ($('.pull-leaf__block').length) oPullLeaf.init();
	if ($('.article-block').length) oArticle.init();
	if ($('.product-slider').length) oProduct.init();

	if ($('.js-parallax-header').length) {
		$('.js-parallax').parent().parallaxify();
	}

});


oNavMain = {
	ePanel: null,
	eNav: null,
	eNavSub: null,
	ePage: null,
	eBtnShow: null,
	eBtnClose: null,
	eOldNav: null,
	sItem: 'nav-main__item',
	sSub: 'nav-main-sub',
	sOverlay: 'nav-bg-overlay',
	iSubWidth: 0,
	iNavWidth: 0,
	iPageLeft: 0,
	iPageLeftOrig: 0,
	iPanelPdg: 0,
	isVis: false,
	iDrt: 300,
	iNavLeft: 0,
	oScroll: {
		oNav: null,
		oSub: null
	},
	aScrl: [],
	init: function () {
		oNavMain.ePanel = $('.nav-main-panel'),
		oNavMain.eNav = $('.nav-main'),
		oNavMain.eBtnShow = $('.btn-main-nav'),
		oNavMain.eBtnClose = $('.btn-main-nav-close'),
		oNavMain.eNavSub = $('.nav-main-sub-wrap'),
		oNavMain.eOldNav = $('.old-menu-new'),
		oNavMain.ePage = $('#page-container-wrapper.after-bar, body > .container.for-dropmenu.after-bar'),
		oNavMain.iPanelPdg = parseInt(oNavMain.ePanel.css('left')),
		oNavMain.iSubWidth = $('.' + oNavMain.sSub).width(),
		oNavMain.iPageLeft = parseInt(oNavMain.ePage.css('left')),
		oNavMain.iNavWidth = oNavMain.eNav.width(),
		oNavMain.iNavLeft = parseInt(oNavMain.eNav.css('left'));

		oNavMain.initScroll();

		if (oNavMain.eOldNav.length && iWinWidth > 900) oNavMain.ePage.addClass('old-menu-fix');

		if (iWinWidth > 1098) {
			oNavMain.iPageLeft = 0;
			oNavMain.ePage.css('left', oNavMain.iPageLeft);
		};

		oNavMain.ePage.append($('<div/>', { class: oNavMain.sOverlay }));
		oNavMain.iPageLeftOrig = oNavMain.iPageLeft;

		oNavMain.eBtnShow.click(oNavMain.mainRight);
		oNavMain.eBtnClose.click(oNavMain.mainLeft);

		$('.' + oNavMain.sItem).filter(function () {
			if ($('.' + oNavMain.sSub).eq($(this).index()).children().length) return this;
		}).hover(function () {
			oNavMain.subRight($(this));
		}, function (oEvt) {
			oNavMain.subLeft($(this), oEvt);
		});

		$('.' + oNavMain.sSub).mouseleave(function (oEvt) { // уход с подменю
			var eSub = $(this),
				iInd = eSub.index(),
				eItem = $('.' + oNavMain.sItem).eq(iInd),
				iIndTrgt = $(oEvt.relatedTarget).closest('.' + oNavMain.sItem).index();

			eItem.add(eSub).removeClass('active');
			if ($('.' + oNavMain.sSub).eq(iIndTrgt).not(':empty').length == 0 || iIndTrgt < 0
				|| !$('.' + oNavMain.sSub).eq(iIndTrgt).not(':empty').length) { // не на пункт с подменю
				oNavMain.eNav.add(oNavMain.eNavSub).removeClass('open');
				oNavMain.ePage.removeClass('open-nav');
				
				if (iWinWidth > 900) {
					oNavMain.ePage.css('left', oNavMain.iPageLeft);
					if (oNavMain.eOldNav.length) oNavMain.eOldNav.css('left', oNavMain.iNavWidth);
				};

				if (!oNavMain.eNav.hasClass('show')) oNavMain.ePage.find('.' + oNavMain.sOverlay).removeClass('show');
				oNavMain.isVis = false;
			}
		});

		$(window).resize(function () {

			oNavMain.eOldNav.removeAttr('style');

			oNavMain.iNavWidth = oNavMain.eNav.width(),
			oNavMain.iSubWidth = $('.' + oNavMain.sSub).width();

			if (oNavMain.eBtnShow.hasClass('show') && iWinWidth > 999) {
				oNavMain.eBtnShow.removeClass('show');
				oNavMain.eNav.removeClass('show');
			};
			if (oNavMain.eOldNav.length && iWinWidth > 900) oNavMain.ePage.addClass('old-menu-fix')
			else oNavMain.ePage.removeClass('old-menu-fix');
			if (iWinWidth > 1098) {
				oNavMain.iPageLeft = 0;
				oNavMain.ePage.css('left', oNavMain.iPageLeft);
			};
			oNavMain.reinitScroll();
		})
	},
	initScroll: function () {
		if ($("nav").is(".nav-main")){
			oNavMain.aScrl.push(oNavMain.eNav.jScrollPane({
				autoReinitialise: true,
				contentWidth: oNavMain.eNav.width() - 6
			}).data().jsp);
			oNavMain.aScrl.push($('.' + oNavMain.sSub).not(':empty').jScrollPane({
				autoReinitialise: true,
				contentWidth: $('.' + oNavMain.sSub).width() - 6
			}).data().jsp);
		}
	},
	reinitScroll: function () {
		oNavMain.aScrl[0].reinitialise();
		oNavMain.aScrl[1].reinitialise();
	},
	mainRight: function () {
		if (oNavMain.eBtnShow.is(':visible')) oNavMain.eBtnShow.hide(200);
		oNavMain.eNav.addClass('show');
		oNavMain.ePage.addClass('open-nav');

		oNavMain.ePage.css('left', oNavMain.iNavWidth + oNavMain.iPageLeft);
		if (oNavMain.eOldNav.length && iWinWidth > 900) oNavMain.eOldNav.css('left', oNavMain.iNavWidth + oNavMain.iPageLeft);

		oNavMain.ePage.find('.' + oNavMain.sOverlay).addClass('show');
		oNavMain.ePanel.css('left', oNavMain.iNavWidth + oNavMain.iPageLeft);
		oNavMain.iPageLeft = oNavMain.iNavWidth + oNavMain.iPageLeft;
	},
	mainLeft: function () {
		if (!oNavMain.eBtnShow.is(':visible')) oNavMain.eBtnShow.show(200);
		oNavMain.eNav.removeClass('show');
		oNavMain.ePanel.css('left', 0);
		oNavMain.iPageLeft = oNavMain.iPageLeftOrig;
		oNavMain.subLeft(oNavMain.eNav.find('.' + oNavMain.sItem + '.active'), {});
	},
	subRight: function (eItem) {
		var iInd = eItem.index(),
			eSub = oNavMain.eNavSub.find('.' + oNavMain.sSub).eq(iInd).not(':empty');
		if (!eSub.length) return false;
		eItem.add(eSub).addClass('active').siblings().removeClass('active');
		if (!oNavMain.isVis) {
			oNavMain.eNav.add(oNavMain.eNavSub).addClass('open');
			oNavMain.ePage.addClass('open-nav');
			
			if (iWinWidth > 900) {
				oNavMain.ePage.css('left', oNavMain.iSubWidth + oNavMain.iPageLeft);
				if (oNavMain.eOldNav.length) oNavMain.eOldNav.css('left', oNavMain.iSubWidth + oNavMain.iPageLeft + oNavMain.iNavWidth);
			};

			oNavMain.ePage.find('.' + oNavMain.sOverlay).addClass('show');
			oNavMain.isVis = true;
		}
	},
	subLeft: function (eItem, oEvt) {
		if ($(oEvt.relatedTarget).closest('.jspVerticalBar').length) return false;
		var iInd = eItem.index(),
			eSub = oNavMain.eNavSub.find('.' + oNavMain.sSub).eq(iInd).not(':empty');
		if (!eSub.length) return false;
		if (!$(oEvt.relatedTarget).closest(oNavMain.eNavSub).length) { // навели не на подменю текущего
			oNavMain.isVis = true;
			eItem.add(eSub).removeClass('active');
			var iIndTrgt = $(oEvt.relatedTarget).closest('.' + oNavMain.sItem).index();
			if ($('.' + oNavMain.sSub).eq(iIndTrgt).not(':empty').length == 0 || iIndTrgt < 0
			|| !$('.' + oNavMain.sSub).eq(iIndTrgt).not(':empty').length) { // не на пункт с подменю
				oNavMain.eNav.add(oNavMain.eNavSub).removeClass('open');
				oNavMain.ePage.removeClass('open-nav').css('left', oNavMain.iPageLeft);

				if (oNavMain.eOldNav.length) {
					if (iWinWidth > 1098) oNavMain.eOldNav.css('left', oNavMain.iNavWidth)
					else if (iWinWidth > 900) {
						if (oNavMain.eNav.hasClass('show')) oNavMain.eOldNav.css('left', oNavMain.iNavWidth);
						else oNavMain.eOldNav.css('left', 0);
					}
				};

				if (!oNavMain.eNav.hasClass('show')) oNavMain.ePage.find('.' + oNavMain.sOverlay).removeClass('show');
				oNavMain.isVis = false;
			}
		}
	}
}

oArticle = {
	init: function () {
		oArticle.action();
		$(window).resize(function () {
			oArticle.action();
		})
	},
	action: function () {
		photoCover('.article-item__img img');
		if (iWinWidth <= 800) {
			$('.article-item__photo:first-child').each(function () {
				$(this).parent().append($(this).addClass('js-mobile-article-pos'));
			})
		} else {
			$('.js-mobile-article-pos').each(function () {
				$(this).parent().prepend($(this).removeClass('js-mobile-article-pos'));
			})
		}
	}
}

// mobile position article-experts
oArticlesPos = {
	oClone: null,
	init: function () {
		this.oClone = $('.articles-block').clone(true, true);
		oArticlesPos.evt();
	},
	evt: function () {
		$('.article-experts').hover(function () {
			$(this).find('img').toggleClass('hover');
		})
	},
	photo: function () {
		photoCover('.article-experts__img img');
	},
	action: function () {
		switch (true) {
			case iWinWidth < 1098 && iWinWidth >= 800:
				if (!$('js-mobile-article-pos').length) {
					oArticlesPos.res();
					var eArt = $('.articles-block__col').filter(function () {
						if (!$(this).find('.big').length) return this;
					}).find('.article-experts').addClass('js-mobile-article-pos'),
						oArt = {},
						iCnt = 0,
						isLeftPos = false,
						isBigFirst = false;

					eArt.each(function (i) { oArt[i] = $(this) }).detach();

					$('.articles-block__col').each(function (iInd) {
						if (Object.keys(oArt).length > 0) {
							var eCol = $(this),
								iMax = 0,
								isPrint = true;

							// если есть большие блоки в eCol - добавляем 1 статью (iMax) и запускаем чередование (isBigFirst) слева/справа большого блока
							if (eCol.children('.big').length && iInd > 0) {
								iMax = 1;
								isBigFirst = isBigFirst ? false : true;
								// если первый eCol или не первый и
							} else if ((iInd == 0 && $('.article-experts:not(.big)').length > 3 || iInd > 0 && 
								// все большие позади и
								$('.article-experts.big').length == $('.js-mobile-article-pos-modify .article-experts.big').length) && 
								// в текущем eCol нет больших
								!eCol.children('.big').length) {
								iMax = 3;
							} else {
								isPrint = false;
							};

							if (isPrint) {
								for (var i = 0; i < iMax; i++) {
									if (oArt[iCnt]) {
										var e = oArt[iCnt];
										// чередование сверху или снизу фото
										isLeftPos = (!isLeftPos || iMax == 1) ? true : false;

										// если html разметка нарушает чередование - исправляем
										if (!e.children('.article-experts__img.left:first-child').length > 0 === isLeftPos) {
											e.children().toggleClass('left');
											e.addClass('js-mobile-article-pos-toggle-first').append(e.children(':first-child'));
										};

										// если большой блок есть, проверяем на очерёдность положения слева/справа большого блока
										if (iMax == 1) isBigFirst ? eCol.append(e) : eCol.prepend(e)
										else eCol.append(e);

										eCol.addClass('js-mobile-article-pos-modify');
										iCnt++;
									}
								}
							}
						}
					});
				} break;
			case iWinWidth < 800:
				if (!$('js-mobile-big-pos').length) {
					oArticlesPos.res();
					$('.article-experts').filter('.big').parent().filter(':first-child')
						.addClass('js-mobile-big-pos').each(function () {
							$(this).parent().append($(this));
						});
				} break;
			default:
				oArticlesPos.res();
				break;
		};
		oArticlesPos.photo();
	},
	res: function () {
		$('.articles-block').replaceWith(oArticlesPos.oClone.clone());
		oArticlesPos.evt();
	}
}

oLoadToScroll = {
	isLoading: false,
	iLoadMax: 3,
	iLoadCur: 0,
	eLoading: null,
	eBlock: null,
	eItem: null,
	iTop: -1,
	tResize: null,
	init: function () {
		oArticlesPos.init();
		this.eLoading = $('.articles-block__loading'),
		this.eBlock = $('.articles-block'),
		this.eItem = $('.article-experts');
		$('<style>').prop('type', 'text/css').html('\
			.articles-block .article-experts.js-loadscrl {\
				display: block;\
				opacity: 1;\
				-webkit-animation-duration: 0.2s;\
				animation-duration: 0.2s;\
				-webkit-animation-name: animShow;\
				animation-name: animShow;\
				-webkit-animation-fill-mode: forwards;\
				animation-fill-mode: forwards;\
			}\
			.articles-block .article-experts.js-loadscrl-hide {\
				opacity: 0;\
				display: none;\
				-webkit-animation: none;\
				animation: none;\
			}\
			@-webkit-keyframes animShow {\
				0% {opacity: 0}\
				100% {opacity: 1}\
			}\
			@keyframes animShow {\
				0% {opacity: 0}\
				100% {opacity: 1}\
			}\
		').appendTo('head');
		oLoadToScroll.start();
		$(window).resize(function () {
			if (oLoadToScroll.tResize) clearTimeout(oLoadToScroll.tResize);
			oLoadToScroll.tResize = setTimeout(oLoadToScroll.start, 100);
		}).load(oLoadToScroll.initop);
	},
	start: function () {
		if (iWinWidth < 800) oLoadToScroll.set()
		else oLoadToScroll.destroy();
		oArticlesPos.action();
	},
	set: function () {
		oLoadToScroll.eItem.filter(':visible').addClass('js-loadscrl').each(function (i) {
			if (i + 1 > oLoadToScroll.iLoadMax) $(this).addClass('js-loadscrl-hide');
			++oLoadToScroll.iLoadCur;
		});
		oLoadToScroll.initop();
		$(window).scroll(function () {
			oLoadToScroll.scrl();
		})
	},
	initop: function () {
		oLoadToScroll.iTop = oLoadToScroll.eBlock.find('.articles-block-helper-pos').offset().top;
	},
	scrl: function () {
		if (($(window).scrollTop() + $(window).height() * 0.8) >= oLoadToScroll.iTop && oLoadToScroll.eBlock.find('.js-loadscrl-hide').length) {
			if (!oLoadToScroll.isLoading) {
				oLoadToScroll.isLoading = true;
				oLoadToScroll.eLoading.show();
				oLoadToScroll.printed();
			}
		}
	},
	printed: function (fBack) {
		oLoadToScroll.eBlock.find('.js-loadscrl-hide').each(function (i) {
			if (i < oLoadToScroll.iLoadMax) {
				$(this).removeClass('js-loadscrl-hide');
				++oLoadToScroll.iLoadCur;
			}
		});
		oLoadToScroll.initop();
		oLoadToScroll.eLoading.hide();
		oLoadToScroll.isLoading = false;
	},
	destroy: function () {
		if (oLoadToScroll.eBlock.find('.js-loadscrl').length)
			oLoadToScroll.eBlock.find('.js-loadscrl').removeClass('js-loadscrl js-loadscrl-hide');
	}
}

oBxExpert = {
	tResizeTimeout: null,
	oSlider: null,
	init: function () {
		$(window).resize(function () {
			clearTimeout(oBxExpert.tResizeTimeout);
			oBxExpert.tResizeTimeout = setTimeout(function () {
				oBxExpert.slider();
			}, 200)
		});

		$('.head-expert').hover(function () {
			$(this).removeClass('deactive').addClass('active').siblings().removeClass('active').addClass('deactive');
		}, function () {
			$(this).siblings().andSelf().removeClass('active deactive');
		});

		oBxExpert.slider();
	},
	slider: function () {
		if (iWinWidth < 800 && !$('.head-experts__list').hasClass('bx-experts')) {
			oBxExpert.oSlider = $('.head-experts__list').addClass('bx-experts').bxSlider({
				pager: true,
				controls: false,
				auto: true,
				pause: 5000,
				mode: 'fade'
			});
		} else if (iWinWidth < 800 && $('.head-experts__list').hasClass('bx-experts')) {
			oBxExpert.oSlider.reloadSlider();
		} else if (iWinWidth >= 800 && $('.head-experts__list').hasClass('bx-experts')) {
			$('.head-experts__list').removeClass('bx-experts');
			oBxExpert.oSlider.destroySlider();
		}
	}
}

oProduct = {
	eSlider: null,
	eSlideItem: null,
	oSlider: null,
	tResizeTimeout: null,
	init: function () {
		oProduct.eSlider = $('.product-slider'),
		oProduct.eSlideItem = oProduct.eSlider.children();
		oProduct.printed();
		oProduct.headerPos();
		$(window).resize(function () {
			clearTimeout(oProduct.tResizeTimeout);
			oProduct.tResizeTimeout = setTimeout(function () {
				oProduct.printed();
			}, 200);
			oProduct.headerPos();
		});
	},
	headerPos: function () {
		var eWrap = $('.product-header'),
			eInfo = eWrap.find('.product-header-info'),
			eImg = eInfo.find('.product-header-info__img');
		if (iWinWidth > 800) {
			if (eWrap.outerWidth() / 2 > eInfo.outerWidth() - eImg.outerWidth() / 2) {
				eInfo.css({
					left: '50%',
					marginLeft: (eImg.outerWidth() / 2 * -1),
					right: 'auto'
				})
			} else {
				eInfo.css({
					left: 'auto',
					right: 20
				})
			};
		} else {
			eInfo.css({
				left: 68,
				marginLeft: 0,
				right: 'auto'
			});
		}
	},
	printed: function () {
		if (iWinWidth > 800 && !oProduct.eSlider.hasClass('bx-product')) {
			oProduct.eSlider.addClass('bx-product');
			oProduct.oSlider = oProduct.eSlider.bxSlider({
				pager: true,
				controls: true,
				auto: false,
				mode: 'horizontal'
			})
		} else if (iWinWidth > 800 && oProduct.eSlider.hasClass('bx-product')) {
			oProduct.oSlider.reloadSlider();
		} else if (iWinWidth <= 800 && oProduct.eSlider.hasClass('bx-product')) {
			oProduct.oSlider.destroySlider();
			oProduct.eSlider.removeClass('bx-product');
		};

		if (iWinWidth > 800) {
			$('.js-filter-premium-compare').click(oProduct.compare);

			$('.product-slider-info').each(function () {
				$(this).prepend($(this).children('.product-slider-info__img'));
			});
			$('.product-stats-block').each(function () {
				$(this).prepend($(this).children('.product-stats-img'));
			});
			$('.product-description-block').each(function () {
				$(this).children('.product-description-head').after($(this).children('.product-description-img'))
			})
		} else {
			$('.product-slider-info').each(function () {
				$(this).append($(this).children('.product-slider-info__img'));
			});
			$('.product-stats-block').each(function () {
				$(this).find('.product-stats-note').before($(this).children('.product-stats-img'));
			});
			$('.product-description-block').each(function () {
				$(this).append($(this).children('.product-description-img'))
			})
		}
	},
	compare: function () {
		var eBtn = $(this);
		//if (!eBtn.parents('.compare-filter-premium').hasClass('is-compare')) {
			eBtn.stop().animate({
				opacity: 0
			}, 300, function () {
				eBtn.hide();
			});
		//};
		eBtn.parents('.compare-filter-premium').toggleClass('is-compare');
		eBtn.toggleClass('is-compare').siblings('.filter-premium-animate__bg1').toggleClass('is-compare');
		if (eBtn.parents('.compare-filter-premium').hasClass('is-compare')) {
			spriteAnim(eBtn.siblings('.filter-premium-animate__bg2'), '50%',0 , 26, 25, false, _action);
		} else {
			spriteAnim(eBtn.siblings('.filter-premium-animate__bg2'), '50%',26, 49, 25, false, function(){_action(true)});
		};
		function _action (is) {
			var eText = eBtn.children('span'),
				sText = eText.text();
			eText.text(eText.data('text')).siblings('i').toggleClass('is-revert');
			eText.data('text', sText);
			var eElems = $('.compare-filter-premium__list, .compare-filter-premium__more');
			if (eElems.is(':visible')) eElems.slideUp(500)
			else eElems.delay(300).slideDown(700);
			if (is) eBtn.siblings('.filter-premium-animate__bg2').css({backgroundPosition: '50% 0'});
			setTimeout(function () {
				eBtn.show().stop().animate({
					opacity: 1
				}, 400);
			}, 1500);
		}
	}
}

function spriteAnim (eElem, sX, i, iCnt, iFps, isBack, fCallback) {
	var iHeight = eElem.height(),
		p = -1,
		iEnd = isBack ? 0 : iCnt,
		interval = setInterval(function () {
			isBack ? i-- : i++;
			eElem.css('background-position', sX +' '+ (iHeight * i * p) + 'px');
			if (i == iEnd) {
				clearInterval(interval);
				fCallback();
			}
		}, 1000 / iFps);
}

oPullLeaf = {
	tResizeTimeout: null,
	init: function () {
		oPullLeaf.set();
		oPullLeaf.evt();
		$(window).resize(function () {
			clearTimeout(oPullLeaf.tResizeTimeout);
			oPullLeaf.tResizeTimeout = setTimeout(function () {
				oPullLeaf.set();
				oPullLeaf.reset();
			}, 200)
		});
	},
	set: function () {
		oPullLeaf.eBlock = $('.pull-leaf__block');
		oPullLeaf.eImg = $('.pull-leaf__img');
		oPullLeaf.eImgOpacity = $('.pull-leaf__img-opacity');
		oPullLeaf.iHeightImg = oPullLeaf.eImg.height();
		oPullLeaf.iMoveStart = 0;
		oPullLeaf.iCurImg = 0;
		oPullLeaf.iTmpCur = 0;
		oPullLeaf.iLast = 0;
		oPullLeaf.iOpc = 1;
		oPullLeaf.isAnim = true;
		oPullLeaf.sDirection = 'right';
	},
	evt: function () {
		oPullLeaf.eBlock.on('mousedown', function (evt) {
			$(this).addClass('active');
			oPullLeaf.iLast = evt.pageX;
		}).on('mouseup', function () {
			$(this).removeClass('active');
			oPullLeaf.iMoveStart = 0;
			oPullLeaf.iOpc--;
		}).on('mousemove', function (evt) {
			if ($(this).hasClass('active')) oPullLeaf.move(evt.pageX); //, evt.pageY
		}).on('touchstart', function (evt) {
			$(this).addClass('active');
			oPullLeaf.iLast = evt.originalEvent.touches[0].pageX;
		}).on('touchend', function () {
			$(this).removeClass('active');
			oPullLeaf.iMoveStart = 0;
		}).on('touchmove', function (evt) {
			if ($(this).hasClass('active')) oPullLeaf.move(evt.originalEvent.touches[0].pageX);
		});
	},
	reset: function () {
		oPullLeaf.eImg.css({ backgroundPosition: '0 0' });
		oPullLeaf.eImgOpacity.css({ backgroundPosition: '0 0' });
	},
	move: function (x, isImportant) {
		if (oPullLeaf.isAnim && (x > oPullLeaf.iLast + 30 || x < oPullLeaf.iLast - 30)) {

			if (x < oPullLeaf.iLast) {
				if (oPullLeaf.sDirection == 'right') oPullLeaf.iMoveStart = 0;
				oPullLeaf.sDirection = 'left'
			} else {
				if (oPullLeaf.sDirection == 'left') oPullLeaf.iMoveStart = 0;
				oPullLeaf.sDirection = 'right';
			};

			if (oPullLeaf.iMoveStart == 0) {
				oPullLeaf.iMoveStart = x;
				oPullLeaf.iTmpCur = 0;
			};

			if (oPullLeaf.iCurImg < 15 && oPullLeaf.sDirection == 'right' || oPullLeaf.sDirection == 'left' && oPullLeaf.iCurImg > 0) {
				//console.log(oPullLeaf.iCurImg, oPullLeaf.iOpc, oPullLeaf.iTmpCur);
				oPullLeaf.isAnim = false;
				if (x > oPullLeaf.iMoveStart + oPullLeaf.iTmpCur * 20 && oPullLeaf.sDirection == 'right') {
					oPullLeaf.iCurImg++;
					oPullLeaf.iTmpCur++;
					oPullLeaf.iOpc = oPullLeaf.iCurImg - 1;
				} else if (x < oPullLeaf.iMoveStart - oPullLeaf.iTmpCur * 20 && oPullLeaf.sDirection == 'left') {
					oPullLeaf.iCurImg--;
					oPullLeaf.iTmpCur--;
					oPullLeaf.iOpc = oPullLeaf.iCurImg + 1;
				};
				if (oPullLeaf.iOpc < oPullLeaf.iCurImg && oPullLeaf.sDirection == 'right' || oPullLeaf.iOpc > oPullLeaf.iCurImg && oPullLeaf.sDirection == 'left') {
					//console.log(oPullLeaf);
					oPullLeaf.eImgOpacity.css({
						backgroundPosition: '0 ' + (oPullLeaf.iHeightImg * oPullLeaf.iOpc * -1) + 'px',
						opacity: 1
					}).animate({ opacity: 0 }, 60, function () {
						oPullLeaf.isAnim = true;
					});
					oPullLeaf.eImg.css({ backgroundPosition: '0 ' + (oPullLeaf.iHeightImg * oPullLeaf.iCurImg * -1) + 'px' });

					oPullLeaf.iLast = x;
				} else oPullLeaf.isAnim = true;
			} // else console.log('not animate');
		}
	}
};

var tPhotoCoverTimeout;
function photoCover (sImg) {
	clearTimeout(tPhotoCoverTimeout);
	tPhotoCoverTimeout = setTimeout(function () {
		$(sImg).each(function () {
			var ePhoto = $(this),
				iWrapW = ePhoto.parent().width(),
				iWrapH = ePhoto.parent().height(),
				iW = ePhoto.width(),
				iH = ePhoto.height(),
				iWrapRat = iWrapW / iWrapH,
				iRat = iW / iH;

			ePhoto.css({
				left: 0,
				top: 0
			});

			switch (true) {
				case iW > iWrapW:
					ePhoto.css({
						position: 'relative',
						left: (iW - iWrapW) / 2 * -1
					});
				case iH > iWrapH:
					ePhoto.css({
						position: 'relative',
						top: (iH - iWrapH) / 2 * -1
					});
			}
		})
	}, 100)
};

var oVideoExpert = {
	wWidth: 0,
	resize: function () {
		oVideoExpert.wWidth = $(window).width();

		$(window).resize(function () {
			oVideoExpert.wWidth = $(window).width();
			if (oVideoExpert.wWidth <= 550) {
				$('.expert-video-wrap').css({
					width: '100%'
				});
			} else {
				$('.expert-video-wrap').css({
					width: '50%'
				});
			}
		});
	},
	initVideo: function () {
		var videos = [];
		for (var i = 1; i <= 3; i++) {
			if ($('#vjs_video_expert_' + i).length) {
				var video = videojs('vjs_video_expert_' + i).ready(function () {
					var player = this,
						jqPlayer = $('#vjs_video_expert_' + i),
						videoWrap = jqPlayer.closest('.expert-video-wrap'),
						poster = jqPlayer.find('.vjs-poster'),
						bigPlay = jqPlayer.find('.vjs-big-play-button'),
						controlBar = jqPlayer.find('.vjs-control-bar');

					player.on('play', function () {
						/*if (oVideoExpert.wWidth > 550){
							videoWrap.stop().animate({
								width: '100%'
							}, 1000);
						}*/
						poster.hide();
						bigPlay.hide();
						controlBar.show();
					});
					player.on('pause', function () {
						if (oVideoExpert.wWidth > 550) {
							videoWrap.stop().animate({
								width: '50%'
							}, 1000);
						}
					});
					player.on('ended', function () {
						poster.show();
						bigPlay.show();
						controlBar.hide();
					});

				});
			}

			videos.push(video);

		}

	},
	init: function () {
		//this.resize();
		this.initVideo();
	}
}


Informer = {
	show: function (text) {
		$("#informer_text").html(text);
		$(".informer_block").fadeIn('300');
	}
}

VideoValidate = {
	click: function () {
		$('form').parents('.err_load').removeClass('err_load').addClass('load')
			.find('#id_video').prop('disabled', false).parents('label').attr('style', 'cursor: pointer');
	},

	validate: function () {
		var max_size = $("form").find('[name="MAX_FILE_SIZE"]').val();
		var file_field = $("form").find('[type="file"]');
		var type_suport = ['video/mp4', 'video/quicktime', 'video/x-troff-msvideo', 'video/avi', 'video/msvideo', 'video/x-msvideo'];
		file_field.each(function () {
			jThis = $(this);
			if (this.files && this.files.length == 1 && this.files[0].size > max_size) {
				jThis.prop('disabled', true).parents('label').attr('style', '').parents('.load')
					.removeClass('load').addClass('err_load');
				$(".invite_form")[0].reset();
			}
			else if (($.inArray(this.files[0].type, type_suport)) == -1) {
				jThis.prop('disabled', true).parents('label').attr('style', '').parents('.load')
					.removeClass('load').addClass('err_load');
				$(".invite_form")[0].reset();
			}
			else {
				$("form").submit();
			}
		});
	}
};

function certificate() {
	if ($('.b-certificate').length && $('.b-5oclock').length) {
		if ($(window).innerWidth() > 800) {
			var window_width = $('.b-5oclock').innerWidth();
			var block_wigth = window_width / 4;
			$('.b-certificate').each(function () {
				$(this).width(Math.floor(block_wigth))
			});
			$('.certificate-container').css({ 'marginRight': '-4px' });
		} else {
			$('.b-certificate').each(function () {
				$(this).css({ 'width': '' });
			});
			$('.certificate-container').css({ 'marginRight': '0px' });
		}
	}

}

if (typeof videojs !== 'undefined') {
	videojs.options.children.controlBar = {
		children: [
			{
				name: 'playToggle'
			},
			{
				name: 'volumeMenuButton',
				volumeBar: {
					vertical: true
				}
			},
			{
				name: 'currentTimeDisplay'
			},
			{
				name: 'progressControl'
			},
			{
				name: 'fullscreenToggle'
			}
		]
	}
}

$(function(){
    $("#winter-rules .modal-close").on('click', function(){
        $("#winter-rules").hide();
    });
});

$(function(){
    $("#show-rules").on('click', function(){
        $("#winter-rules").show();
    });
});