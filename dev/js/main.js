$(function () {

	$(document).on('scroll', function (e) {
		oNav.upd();
	});

	//$('.js-header-addr').click(toggleIsClick)
	oNav.init();
})

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
