$(function () {

	oLng.init();

	oNav.init();
	$(document).on('scroll', function (e) {
		oNav.upd();
	});

})

function headerTyping () {
	var eElem = $('.header-logo'),
		eChild = eElem.children().not('.char'),
		l = 0;

	_action(eElem, eElem.textNode());
	_action(eChild, eChild.text());

	function _action (eElem, sText) {
		eElem.find('.char').remove();

		for (var i = 0; i < sText.length; i++) {
			var eChar = $('<span/>', {
					text: sText.charAt(i),
					class: 'char char-'+ (l+1)
				});
			eElem.append(eChar);
			l++;
		}
	}
}

oLng = {
	default: 'ru',
	init: function () {
		var _this = this;

		if (localStorage.getItem('lng')) _this.default = localStorage.getItem('lng');

		$.getJSON('/lang.json', function (data) {
			_this.oLng = data;

			_this.toggler($('[data-lng="'+ _this.default +'"]'));

			_this.set(_this.default, function () {
				headerTyping();

				$('[data-lng]').click(function () {
					_this.toggler($(this));
				})
			});
		}).fail(function (e, type, info) {
			console.error(info);
    	});;
	},
	toggler: function (eElem) {
		var _this = this;

		eElem.addClass('active').siblings().removeClass('active');
		var lng = eElem.data('lng');

		_this.set(lng, function () {
			headerTyping();
		});
	},
	set: function (lng, f) {
		var _this = this;
		if (!_this.oLng[lng]) lng = _this.default;

		$('[lngstr]').each(function () {
			var sName = $(this).attr('lngstr');
			$(this).animate({opacity: 0}, 200, function () {
				$(this).html(_this.oLng[lng][sName]);
				$(this).animate({opacity: 1}, 200);
			})
			
		})

		localStorage.setItem('lng', lng);
		if (typeof f == 'function') f();
	}
}

oNav = {
	hash: '',
	elems: null,
	istimeout: false,
	init: function () {
		this.elems = $('.section[id]');
		oNav.upd();
	},
	upd: function () {
		if (oNav.istimeout) clearTimeout(oNav.istimeout);

		oNav.istimeout = setTimeout(function () {
			oNav.elems.each(function () {
				if (isElementOnScreen($(this))) {
					oNav.elems.removeClass('active');
					$(this).addClass('active');
					oNav.hash = '#'+ $(this).attr('id');
					return false;
				} else {
					oNav.hash = '';
				}
			});
			oNav.set();
		}, 20);
	},
	set: function () {
		if (oNav.hash.length > 0) 
			history.pushState(null, null, oNav.hash)
		else
			history.pushState(null, null, window.location.pathname + window.location.search);
	}
}

function toggleIsClick () {
	$(this).toggleClass('is-click');
}

function isElementOnScreen (elem) {
	var win = $(window),
		topScreen = win.scrollTop(),
		bottomScreen = topScreen + win.height(),
		middleScreen = topScreen + win.height() / 2,
		topElem = elem.offset().top,
		bottomElem = topElem + elem.height();
	//return ((bottomElem <= bottomScreen) && (topElem >= topScreen));
	return ((topElem < bottomScreen) && (topElem >= topScreen) || (topElem < topScreen) && (bottomElem > middleScreen));
}

function replaceAt (s, n, t) {
	return s.substring(0, n) + t + s.substring(n + 1);
}

(function ($) {
	function elementText (el, separator) {
		var textContents = [];
		for(var chld = el.firstChild; chld; chld = chld.nextSibling) {
			if (chld.nodeType == 3) { 
				textContents.push(chld.nodeValue);
			}
		}
		return textContents.join(separator);
	}
	$.fn.textNode = function (elementSeparator, nodeSeparator) {
		if (arguments.length<2){nodeSeparator="";}
		if (arguments.length<1){elementSeparator="";}
		return $.map(this, function (el) {
			return elementText(el, nodeSeparator);
		}).join(elementSeparator);
	}
} (jQuery));