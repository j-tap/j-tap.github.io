$(function () {

	oLng.init();

	oNav.init();
	$(document).on('scroll', function (e) {
		oNav.upd();
	});

})

function headerTyping () {
	var eLogo = $('.header-logo');
	eLogo.find('.char').remove();

	var eName = eLogo.children('span'),
		eStatus = eLogo.children('small'),
		l = 0;

	_action(eName, eName.children('span').textNode());
	_action(eStatus, eStatus.children('span').textNode());

	function _action (eElem, sText) {
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
	sDefault: 'ru',
	init: function () {
		var _this = this;

		if (localStorage.getItem('lng')) _this.sDefault = localStorage.getItem('lng');

		$.getJSON('/lang.json', function (data) {
			_this.oStrings = data;

			_this.toggler($('[data-lng="'+ _this.sDefault +'"]'));

			_this.set(_this.sDefault, function () {

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
		if (!_this.oStrings[lng]) lng = _this.sDefault;

		_this.sCurrent = lng;

		$('[lngstr]').each(function (i) {
			var sName = $(this).attr('lngstr');
			$(this).animate({opacity: 0}, 200, function () {
				$(this).html(_this.oStrings[lng][sName]);
				$(this).animate({opacity: 1}, 200, function () {
					if ($('[lngstr]').length == i+1) {
						if (typeof f == 'function') f();
					}
				});
			})
			
		})

		localStorage.setItem('lng', lng);
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

$(document).ready(function() { 
	var ePreload = $('#preloader');
	ePreload.addClass('load')
	setTimeout(function () {
		ePreload.hide()
	}, 600) 
});