t = $(window).scrollTop();
w = $(window).width();
h = $(window).height();

$(function () {

	$.smartbanner({
		price: 'Бесплатно', // Price of the app
		inAppStore: 'в App Store', // Text of price for iOS
		inGooglePlay: 'на Google Play', // Text of price for Android
		button: 'Просмотр' // Text on the install button
		// title: 'BurnsOffroad', // What the title of the app should be in the banner (defaults to <title>)
		// author: null, // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
		// appStoreLanguage: 'us', // Language code for App Store
		// icon: null, // The URL of the icon (defaults to <link>)
		// iconGloss: null, // Force gloss effect for iOS even for precomposed (true or false)
		// scale: 'auto', // Scale based on viewport size (set to 1 to disable)
		// speedIn: 300, // Show animation speed of the banner
		// speedOut: 400, // Close animation speed of the banner
		// daysHidden: 15, // Duration to hide the banner after being closed (0 = always show banner)
		// daysReminder: 90, // Duration to hide the banner after "VIEW" is clicked (0 = always show banner)
		// force: null // Choose 'ios' or 'android'. Don't do a browser check, just always show this banner
	});

	$(window).scroll(function () {
		t = $(this).scrollTop();

		oPrlx.scrl();
		//oNav.scrl();

	}).resize(function () {
		w = $(window).width();
		h = $(window).height();
	}).on('load', function () {
		$('html, body').animate({scrollTop: t + 1});

		var eventMouse = $.Event('mousemove');
		eventMouse.pageX = w / 2;
		eventMouse.pageY = t;
		
		$('#header, #main-block-1, #main-block-4, #block-auth').trigger(eventMouse);
	})


	$('#togglerNav, #navbarNav .close').click(function () {
		$('#navbarNav').toggleClass('active');
	})

	//oNav.init();
	oPrlx.init();
	oLng.init();
	oFunctions.init();

	$('#header').mousemove(function (e) {
		$('#header-bg-trees').css('background-position', (e.pageX * -1 / 40) +'px 100%');
		$('#header-bg-mountains').css('background-position', (e.pageX * -1 / 120) +'px 100%');
	});
	$('#main-block-1').mousemove(function (e) {
		$('#main-block-1-bg').css('margin-left', (e.pageX * -1 / 30) +'px');
	})
	$('#main-block-4').mousemove(function (e) {
		$('#main-block-4-mountains').css('background-position', (e.pageX * -1 / 120) +'px 100%');
		$('#main-block-4-trees').css('background-position', (e.pageX * -1 / 80) +'px 100%');
		$('#main-block-4-tech-3').css({'transform': 'translateX('+ (e.pageX * -1 / 40) +'px) translateY('+ (-(e.pageX * -1 / 40) / 4) +'px)'});
		$('#main-block-4-tech-2').css('transform', 'translateX('+ (e.pageX * -1 / 25) +'px)');
		$('#main-block-4-tech-1').css('transform', 'translateX('+ (e.pageX * -1 / 10) +'px)');
	});
	$('#block-auth').mousemove(function (e) {
		$('#block-auth-tech-2').css('transform', 'translateX('+ (e.pageX * -1 / 25) +'px)');
		$('#block-auth-tech-1').css('transform', 'translateX('+ (e.pageX * -1 / 10) +'px)');
	});

	$('#main-slider').slick({
		infinite: false,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000
	});

	$('#shop-slider').slick({
		infinite: false,
		dots: false,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					variableWidth: true
				}
			}
		]
	});

	if ($('.block-auth-form').length) {
		$('.block-auth-form').find('input[required]').change(function () {
			var isValid = true,
				eForm = $(this).parents('.block-auth-form');
			eForm.find('input[required]').each(function () {
				var is = $(this)[0].checkValidity();
				if (!is) isValid = false;
			})
			if (isValid) eForm.find('[type="submit"]').removeAttr('disabled')
			else eForm.find('[type="submit"]').prop('disabled', true);
		})
	}

})

oNav = {
	init: function () {
		this.eNavbar = $('#main-navbar'),
		this.ePseudo = this.eNavbar.next('.pseudo-navbar'),
		this.eSmartbanner = $('#smartbanner'),
		this.sFix = 'm-fix';
	},
	scrl: function () {
		if (t > 1) {
			if (!oNav.eNavbar.hasClass(oNav.sFix)) {
				oNav.eSmartbanner.slideUp(200);
				oNav.eNavbar.addClass(oNav.sFix);
				oNav.ePseudo.show();
			}
		} else {
			if (oNav.eNavbar.hasClass(oNav.sFix)) {
				oNav.eNavbar.removeClass(oNav.sFix);
				oNav.ePseudo.hide();
				oNav.eSmartbanner.slideDown(200);
			}
		}
	}
}

oFunctions = {
	init: function () {
		this.eModal = $('#modal-function'),
		this.eBlock = this.eModal.find('.modal-function-block'),
		this.eBtnPrev = this.eModal.find('.modal-function-prev'),
		this.eBtnNext = this.eModal.find('.modal-function-next');

		$('.functions-item').click(function () {
			oFunctions.eItem = $(this);
			oFunctions.upd();
		})
		this.eBtnPrev.click(function () {
			if (!oFunctions.eItem.prev().length) return false;
			oFunctions.eItem = oFunctions.eItem.prev();
			oFunctions.eBlock.fadeOut(200, function () {
				oFunctions.upd();
				$(this).fadeIn(200);
			});
		})
		this.eBtnNext.click(function () {
			if (!oFunctions.eItem.next().length) return false;
			oFunctions.eItem = oFunctions.eItem.next();
			oFunctions.eBlock.fadeOut(200, function () {
				oFunctions.upd();
				$(this).fadeIn(200);
			});
		})
	},
	upd: function () {
		var sSrc = this.eItem.data('img'),
			eImg = this.eModal.find('.modal-function-img');

		if (sSrc.length > 0) {
			eImg.empty().append(
				$('<img/>').attr('src', sSrc)
			).show();
		} else {
			eImg.empty().hide();
		}
		if (this.eItem.hasClass('functions-item-center')) this.eModal.addClass('modal-functions-center')
		else this.eModal.removeClass('modal-functions-center');
		if (this.eItem.hasClass('functions-item-dev')) this.eModal.addClass('modal-functions-dev')
		else this.eModal.removeClass('modal-functions-dev');
		this.eModal.find('.modal-function-descr').empty().append(
			$('<div>'+ this.eItem.data('descr') +'</div>')
		);
		this.eModal.find('.modal-function-title').empty().append(
			this.eItem.find('img').clone(),
			this.eItem.find('.functions-item-title span').clone()
		);

		if (this.eItem.prev().length) this.eBtnPrev.show()
		else this.eBtnPrev.hide();
		if (this.eItem.next().length) this.eBtnNext.show()
		else this.eBtnNext.hide();

		if (!this.eModal.hasClass('show')) this.eModal.modal('show');
	}
}

oShare = {
	init: function () {
		$('.js-soc').click(function () {
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

oMeta = {
	change: function (newTitle, newDescr, newImg, newLink) {
		this.eTitle = $('meta[name="title"], meta[property="og:title"]'),
		this.eDescr = $('meta[name="description"], meta[property="og:description"]'),
		this.eImg1 = $('meta[property="og:image"]'),
		this.eImg2 = $('link[rel="image_src"]'),
		this.eLink = $('meta[property="og:url"]');

		var sTitle = this.eTitle.attr('content'),
			sDescr = this.eDescr.attr('content'),
			sImg1 = this.eImg1.attr('content'),
			sImg2 = this.eImg2.attr('href'),
			sLink = this.eLink.attr('content');

		this.eTitle.data('default', sTitle).prop('content', newTitle);
		this.eDescr.data('default', sDescr).prop('content', newDescr);
		this.eImg1.data('default', sImg1).prop('content', newImg);
		this.eImg2.data('default', sImg2).prop('content', newImg);
		this.eLink.data('default', sLink).prop('content', newLink);
	},
	default: function () {
		var sTitle = this.eTitle.data('default'),
			sDescr = this.eDescr.data('default'),
			sImg1 = this.eImg1.data('default'),
			sImg2 = this.eImg2.data('default'),
			sLink = this.eLink.data('default');

		this.eTitle.prop('content', sTitle).removeAttr('data-default');
		this.eDescr.prop('content', sDescr).removeAttr('data-default');
		this.eImg1.prop('content', sImg1).removeAttr('data-default');
		this.eImg2.prop('content', sImg2).removeAttr('data-default');
		this.eLink.prop('content', sLink).removeAttr('data-default');
	}
}

oModalMsg = {
	init: function () {
		this.eModal = $('#modal-msg'),
		this.eTitle = this.eModal.find('.modal-title'),
		this.eBody = this.eModal.find('.modal-body');
	},
	toggle: function (sTitle, sHtml) {
		if (sTitle.length > 0 || sHtml.length > 0) {
			$('.modal').modal('hide');
			this.eTitle.empty();
			this.eBody.empty();
			if (sTitle) this.eTitle.text(sTitle).show();
			if (sHtml) this.eBody.text(sHtml).show();
			setTimeout(function () {
				oModalMsg.eModal.modal('show');
			}, 401);
		} else {
			this.eTitle.empty();
			this.eBody.empty();
			this.eModal.modal('hide');
		}
	}
}

oLng = {
	init: function () {
		this.eDrop = $('.lng-block'),
		this.eBtn = this.eDrop.find('.btn'),
		this.eItems = this.eDrop.find('.dropdown-item');
		this.eCurrentItem = this.eItems.eq(0).filter('.active');

		this.upd();

		this.eItems.click(function () {
			$(this).addClass('active').siblings('.active').removeClass('active');
			oLng.eCurrentItem = $(this);
			oLng.upd();
			return false;
		})
	},
	upd: function () {
		var sClass = this.eCurrentItem.getClassByCont(/lng-/);
		this.eDrop.each(function () {
			$(this).find('.btn').text(oLng.eCurrentItem.text()).removeClassCont(/lng-/).addClass(sClass);
		})
	}
}

oPrlx = {
	init: function () {
		this.aItems = [
			['#header-img', -2],
			['#header-bg-mountains', 7]
		];

		if (w > 991) {
			this.aItems.push(['#devices-review-img', 9]);
			this.aItems.push(['#main-block-1-bg', -20]);
		}

		this.aItems.forEach(function (o) {
			var p = {};
			p.top = parseInt($(o[0]).css('top')) || 0,
			p.mod = parseInt(o[1]),
			p.elem = $(o[0]);
			oPrlx.aItems.push(p);
		})
	},
	scrl: function () {
		oPrlx.aItems.forEach(function (e) {
			var iPos = -(t / e.mod) + e.top;
			$(e.elem).css('top', iPos)
		})
	}
}


function goPageUp () {
	$('html, body').animate({scrollTop: 0}, 600);
	return false;
}

function getUrlParamByName (name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function insertGetParam (key, val) {
	var sig = '?';
	window.history.pushState({} , '', sig + key +'='+ val);
}
function removeGetParam (key) {
	var url = window.location.href,
		newUrl = url.substring(0, url.indexOf(key));
	if (newUrl.indexOf('?') == newUrl.length - 1) 
		newUrl = newUrl.replace('?','');
	window.history.pushState(null, null, newUrl);
}



$.fn.getClassByCont = function (val) {
	var result = '';
	this.each(function () {
		var c = this.classList;
		for (var i = c.length - 1; i >= 0; i--) {
			sClass = ''+ c[i];
			if (sClass.match(val)) result = sClass;
		}
	})
	return result;
}

$.fn.removeClassCont = function (val) {
	return this.each(function () {
		var c = this.classList;
		for (var i = c.length - 1; i >= 0; i--) {
			var sClass = ''+ c[i];
			if (sClass.match(val)) c.remove(sClass)
		}
	})
}


$.fn.ulSelect = function (isRemove) {
	var ul = $(this);
	if (isRemove) {
		ul.removeClass('zg-ul-select').removeClass('active');
		$('#selected--zg-ul-select').remove();
		$('li #ul-arrow', ul).remove();
		return this;
	}
	if (ul.hasClass('zg-ul-select')) return this;

	if (!ul.hasClass('zg-ul-select')) ul.addClass('zg-ul-select');

	if (!$('li.active', this).length) $('li:first-of-type', this).addClass('active');

	var arrow = '<svg id="ul-arrow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32"><line stroke-width="1" x1="" y1="" x2="" y2="" stroke="#449FDB" opacity=""/><path d="M4.131 8.962c-0.434-0.429-1.134-0.429-1.566 0-0.432 0.427-0.432 1.122 0 1.55l12.653 12.528c0.434 0.429 1.133 0.429 1.566 0l12.653-12.528c0.432-0.429 0.434-1.122 0-1.55s-1.136-0.429-1.566-0.002l-11.87 11.426-11.869-11.424z" fill="#111"/></svg>';
	if (!$('li.active', this).children('svg').length) $('li.active', this).append(arrow);

	$(this).on('click', 'li', function (event) {
		if ($('#selected--zg-ul-select').length) {
			$('#selected--zg-ul-select').remove();
		}
		ul.before('<div id="selected--zg-ul-select">');
		var selected = $('#selected--zg-ul-select');
		$('li #ul-arrow', ul).remove();
		ul.toggleClass('active');
		ul.children().removeClass('active');
		$(this).toggleClass('active');
		var selectedText = this.innerText;
		if (ul.hasClass('active')) {
			selected.text(selectedText).addClass('active').append(arrow);
		}
		else {
			selected.text('').removeClass('active'); 
			$('li.active', ul).append(arrow);
		}
	});
	// Make ul tabbable
	/*$(ul).focus(function () {
		$(this).keydown(function(e) {
			if (e.which == 38 || 40) { // Up or down keypress
				$(this).addClass('active');
				var liActive =  $('li.active', ul);
				var liPrev = $('li.active', ul).prev();
				var liNext =  $('li.active', ul).next();
				if(e.which == 38) { // Down
					liActive.removeClass('active');
					liPrev.addClass('active');
				}
				if(e.which == 40) { // Down
					liActive.removeClass('active');
					liNext.addClass('active');
				}
			}
		});
		$(this).keydown(function(){
			if(e.which == 13) { // Down
				ul.removeClass('active');
			}
		});
	});*/
	$(document).on('click', function (event) {
		if($('ul.zg-ul-select').length) {
			if(!$('ul.zg-ul-select').has(event.target).length == 0) {
				return;
			} else {
				$('ul.zg-ul-select').removeClass('active');
				$('#selected--zg-ul-select').removeClass('active').text('');
				$('#ul-arrow').remove();
				$('ul.zg-ul-select li.active').append(arrow);
			} 
		}
	});
}
