t = $(window).scrollTop();
w = $(window).width();
h = $(window).height();

$(function () {
	$(window).scroll(function () {
		t = $(this).scrollTop();


	}).resize(function () {
		w = $(window).width();
		h = $(window).height();

		oMenu.init();
		navSlideAdaptive();

	}).on('load', function () {
		
	})

	$('.navbar-mobile-open').click(function () {
		$('.navbar-mobile').addClass('open');
	})
	$('.navbar-mobile-close').click(function () {
		$('.navbar-mobile').removeClass('open');
	})

	if ($('.services-carousel').length) {
		var eCarousel = new carouselPreview($('.services-carousel'));
	}
	if ($('.technology-list-popover')) {
		var eListPopover = new technologyListPopover($('.technology-list-popover'));
	}

	if ($('.home-services-images').length) {
		$('.home-services-images').each(function () {
			$(this).slick({
				infinite: false,
				arrows: true,
				dots: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 200,
				cssEase: 'ease-in-out',
				variableWidth: false,
				variableHeight: false,
				centerMode: false,
				appendArrows: $(this).next('.home-services-images-nav'),
				appendDots: $(this).next('.home-services-images-nav')
			})
		})
	}

	if ($('#homeClients').length) {
		$('#homeClients').slick({
			infinite: false,
			arrows: false,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			speed: 200,
			cssEase: 'ease-in-out',
			variableWidth: true,
			variableHeight: false,
			centerMode: false,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					centerMode: true
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					centerMode: true
				}
			}]
		})
	}

	if ($('#serviceProjects').length) {
		$('#serviceProjects').slick({
			infinite: false,
			arrows: false,
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			speed: 200,
			cssEase: 'ease-in-out',
			variableWidth: true,
			variableHeight: false,
			centerMode: false,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					centerMode: true
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					centerMode: true
				}
			}]
		})
	}

	if ($('.slider-photo').length) {
		$('.slider-photo').on('setPosition', function(slick) {
			var setBtnPosition = function () {
				if (w > 992) {
					var eSlick = $(slick.target),
						eSlide = eSlick.find('.slick-slide'),
						ePrev = eSlick.find('.slick-prev'),
						eNext = eSlick.find('.slick-next'),
						iOffset = (eSlick.outerWidth() - eSlide.outerWidth()) / 2 - ePrev.outerWidth() / 2;
					ePrev.css({'left': iOffset +'px'});
					eNext.css({'right': iOffset +'px'});
				}
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
					arrows: true,
				}
			}]
		});
	}

	$('[data-toggle="popover"]').popover({
		html: true,
		placement: 'auto'
	});

	navSlideAdaptive();

	oMenu.init();

	$('.custom-checkbox').prop('indeterminate', true);

	$('.right-fixed-bar-up').click(function () {
		$('html, body').stop().animate({ 
			scrollTop: 0
		}, 300);
	})

	if ($('.projects').length) {
		oProjects.init();
	}

	if ($('#headerBgNeural').length) {
		var ePar = $('#headerBgNeural').parent();
		neuralAnim('#headerBgNeural', 10, 300, 60, ePar.outerWidth() / 2 , ePar.outerHeight() - 115);
	}

})

function neuralAnim (sElem, countBall, distance, speed, w, h) {
	var canvas = document.querySelector(sElem),
		cntBall = countBall || canvas.width * canvas.height / (70*70),
		distanceMax = distance || 100,
		fps = speed || 20;

	canvas.width = w || canvas.parentNode.offsetWidth;
	canvas.height = h || canvas.parentNode.offsetHeight;
	var ctx = canvas.getContext('2d'),
		TAU = 2 * Math.PI;

	times = [];
	function loop () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		update();
		draw();
		requestAnimationFrame(loop);
	}

	function Ball (startX, startY, startVelX, startVelY) {
		this.x = startX || Math.random() * canvas.width;
		this.y = startY || Math.random() * canvas.height;
		this.vel = {
			x: startVelX || Math.random() * 2 - 1,
			y: startVelY || Math.random() * 2 - 1
		};
		this.update = function (canvas) {
			if (this.x > canvas.width - 10 || this.x < 10) {
				this.vel.x = -this.vel.x;
			}
			if (this.y > canvas.height - 10 || this.y < 10) {
				this.vel.y = -this.vel.y;
			}
			this.x += this.vel.x;
			this.y += this.vel.y;
		};
		this.draw = function(ctx, can) {
			ctx.beginPath();
			//ctx.globalAlpha = .4;
			ctx.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, 5, 0, TAU, false);
			ctx.fillStyle = '#497bc2';
			ctx.fill();

			ctx.lineWidth = 8;
			ctx.strokeStyle = 'rgba(255,255,255,.2)';
			ctx.stroke();
		}
	}

	var balls = [];
	for (var i = 0; i < cntBall; i++) {
		balls.push(new Ball(Math.random() * canvas.width, Math.random() * canvas.height));
	}

	var lastTime = Date.now();
	function update() {
		var diff = Date.now() - lastTime;
		for (var frame = 0; frame * fps < diff; frame++) {
			for (var index = 0; index < balls.length; index++) {
				balls[index].update(canvas);
			}
		}
		lastTime = Date.now();
	}
	var mouseX = -1e9, mouseY = -1e9;
	document.addEventListener('mousemove', function(event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	});

	function distMouse (ball) {
		return Math.hypot(ball.x - mouseX, ball.y - mouseY);
	}

	function draw () {
		//ctx.globalAlpha = 1;
		ctx.fillStyle = 'rgba(0,0,0,0)';
		//ctx.fillRect(0,0,canvas.width, canvas.height);
		for (var index = 0; index < balls.length; index++) {
			var ball = balls[index];
			ball.draw(ctx, canvas);
			ctx.beginPath();
			for (var index2 = balls.length - 1; index2 > index; index2 += -1) {
				var ball2 = balls[index2];
				var dist = Math.hypot(ball.x - ball2.x, ball.y - ball2.y);
					if (dist < distanceMax) {
						ctx.strokeStyle = '#0692cb';
						//ctx.globalAlpha = 1 - (dist > 100 ? .8 : dist / 150);
						ctx.lineWidth = 1;
						ctx.moveTo((0.5 + ball.x) | 0, (0.5 + ball.y) | 0);
						ctx.lineTo((0.5 + ball2.x) | 0, (0.5 + ball2.y) | 0);
					}
			}
			ctx.stroke();
		}
	}
	loop();
}

oProjects = {
	iCurId: 0,
	eCurCheckbox: $(),
	init: function () {
		var _this = this;
		this.eMaterialList = $('#filterMaterialList');
		this.eMaterialList.hide();

		$('.projects-filter-title').click(function () {
			$(this).toggleClass('active').parents('.projects-filter').toggleClass('active')
			.find('.projects-filter-fields').stop().slideToggle(200);
		})

		$('.projects-filter-clear-btn').click(function () {
			$('.projects-filter').find('[type="checkbox"]').prop('checked', false);
			_this.eMaterialList.stop().fadeOut(170);
		})

		$('.projects-filter').find('[type="checkbox"]').change(function () {
			_this.eCurCheckbox = $(this);
			_this.chgCheckbox();
		})


		_this.showMore.eProjectsPager = $('#projectsPager'),
		_this.showMore.eNextLink = _this.showMore.eProjectsPager.find('#navigation_1_next_page');
		if (_this.showMore.eNextLink.length) {
			_this.showMore.sNextPage = _this.showMore.eNextLink.attr('href'),
			_this.showMore.iNextPage = parseInt(_this.showMore.sNextPage.split('?')[1].split('&')[0].split('=')[1]),
			_this.showMore.iCurPage = _this.showMore.iNextPage - 1;

			$('.more-list-btn').click(function () {
				_this.eBtnMore = $(this);
				_this.showMore();
			})
		} else {
			$('.more-list-btn').hide();
		}
	},
	chgCheckbox: function () {
		var _this = this;
		_this.iCurId = _this.eCurCheckbox.attr('id').match(/\d+$/)[0];
		_this.showHideMaterial();
		// формирование фильтра <--

		$.ajax({
			type: 'POST',
			dataType: 'html', // html, json
			url: '',
			data: {filter: true},
			complete: function (xhr, status) {
				if (status === 'error' || !xhr.responseText) {
					if (status === 'error') {
						console.error('error send ajax');
					} else {
						console.info('xhr.responseText is empty!');
					}console.info(xhr.responseText);
				} else {
					console.info(xhr.responseText);
					$('#projectsList').empty();
				}
			}
		})
	},
	showHideMaterial: function () {
		var _this = this;
		if (in_array(_this.iCurId, [9, 10])) { // print or modeling services
			if (_this.eCurCheckbox.is(':checked')) {
				_this.eMaterialList.stop().fadeIn(170);
			} else {
				_this.eMaterialList.stop().fadeOut(170);
			}
		}
	},
	showMore: function () {
		var _this = this;

		_this.eBtnMore.addClass('loading');

		$.ajax({
			type: 'POST',
			dataType: 'html', // html, json
			url: _this.showMore.sNextPage,
			data: {},
			complete: function (xhr, status) {
				_this.eBtnMore.removeClass('loading');
				if (status === 'error' || !xhr.responseText) {
					if (status === 'error') {
						console.error('error send ajax');
					} else {
						console.info('xhr.responseText is empty!');
					}console.info(xhr.responseText);
				} else {
					var eNewPage = $($.parseHTML(xhr.responseText)),
						eNewElems = eNewPage.find('#projectsList').children().hide();

					_this.showMore.eProjectsPager = eNewPage.find('#projectsPager'),
					_this.showMore.eNextLink = _this.showMore.eProjectsPager.find('#navigation_1_next_page');

					if (!_this.showMore.eNextLink.length) _this.eBtnMore.fadeOut(200);

					_this.showMore.sNextPage = _this.showMore.eNextLink.attr('href');
					$('#projectsList').append(eNewElems.fadeIn(200));
				}
			}
		})
	}
}

function navSlideAdaptive () {
	var eNav = $('.js-nav-slide');
	if (eNav.length) {
		if (w < 992) {
			eNav.not('.slick-initialized').slick({
				infinite: false,
				arrows: false,
				variableWidth: true,
				swipeToSlide: true
			});
		} else {
			eNav.filter('.slick-initialized').slick('unslick');
		}
	}
}

function technologyListPopover (eList) {
	var _this = this;
	this.eList = eList;
	this.eList.children('dt').on('mouseenter', function () {
		_this.eCurItem = $(this);
		$(this).addClass('active').siblings().removeClass('active');
	}).on('mouseleave', function (e) {
		var target = e.relatedTarget;
		if (target == _this.eCurItem.next('dd')[0]) {
			$(target).on('mouseleave', function (e) {
				if (e.relatedTarget != _this.eCurItem) {
					_this.eCurItem.removeClass('active');
				}
			})
		} else {
			$(this).removeClass('active');
		}
	})
}

function carouselPreview (eCarousel) {
	var _this = this;
	this.eCarousel = eCarousel;
	var sEvent = 'click';
	if (w > 768) sEvent = 'mouseenter';
	this.eCarousel.children('dt').on(sEvent, function () {
		_this.eCurItem = $(this);
		$(this).addClass('active').siblings().removeClass('active');
	})
}

oMenu = {
	init: function () {
		if (w < 768) {
			$('.menu-sublist').hide().each(function () {
				$(this).prev('.menu-title').addClass('menu-title-accordion').unbind('click').click(function () {
					$('.menu-sublist').stop().slideUp(200).prev().not($(this)).removeClass('active');
					$(this).toggleClass('active').next().stop().slideToggle(200);
				});
			})
		} else {
			$('.menu-title-accordion').removeClass('menu-title-accordion').unbind('click');
			$('.menu-sublist').show();
		}
	}
}

oShare = {
	init: function () {
		$('.js-share').click(function () {
			var sType = $(this).data('type');
			switch (sType) {
				case 'vk':
					oShare.vk();
					break
				case 'fb':
					oShare.fb();
					break
				case 'ok':
					oShare.ok();
					break
				case 'tw':
					oShare.tw();
					break
				case 'go':
					oShare.go();
					break
			};
			return false;
		})
	},
	fb: function() {
		var uriLocation;
		if (typeof fb_post_id != 'undefined') 
			uriLocation = "https://www.facebook.com/raznogo/posts/"+fb_post_id                  
		else if (typeof fb_post_link != 'undefined') 
			uriLocation = fb_post_link
		else 
			uriLocation = window.location.href;
		url = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(uriLocation);
		this.popup(url);
	},
	vk: function() {
		image = jQuery('.image-popup').attr('href');
		url = 'http://vk.com/share.php?url=' + encodeURIComponent(window.location.href);
		url += '&image='+encodeURIComponent(image);
		this.popup(url);
	},
	ok: function() {
		url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=' + encodeURIComponent(window.location.href);
		this.popup(url);
	},
	go: function() {
		url = 'https://plus.google.com/share?url=' + encodeURIComponent(window.location.href);
		this.popup(url);
	},
	tw: function() {
		url = 'http://twitter.com/home?status=' + encodeURIComponent(window.location.href);
		this.popup(url);
	},
	popup: function(url) {
		var width = 600;
		var height = 400;
		var top = (screen.height/2)-(height/2);
		var left = (screen.width/2)-(width/2);
		window.open(url,'','toolbar=0,status=0,width='+width+',height='+height+',top='+top+',left='+left);
	}
};

//in_array('van', ['Kevin', 'van', 'Zonneveld']); //= true
function in_array (needle, haystack, strict) {
	var found = false, key, strict = !!strict;
	for (key in haystack) {
		if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
			found = true;
			break;
		}
	}
	return found;
}

