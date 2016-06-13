$(function () {
	if ($(window).width() > 767) mainBannerSize();
	if ($(window).width() > 767) mainNavMarker();
})

$(window).resize(function() {
	autoReload();
})

function mainNavMarker () {
	var sStyle = 'easeOutExpo',
		eNav = $('#header-nav'),
		eNavUl = eNav.children('ul'),
		eNavItem = eNav.find('.header-nav__item'),
		eNavItemActive = eNavItem.filter('.active'),
		eNavMarker = eNav.find('.header-nav__marker'),
		iLeft = Math.round(eNavItemActive.offset().left - eNavUl.offset().left),
		iWidth = eNavItemActive.outerWidth();
	eNavMarker.css({left: iLeft, width: iWidth});	
	eNavItem.hover(function () {
		left = Math.round($(this).offset().left - eNavUl.offset().left);
		width = $(this).outerWidth();
		eNavMarker.stop(false, true).animate({left: left, width: width},{duration:500, easing: sStyle});	
	}).click(function () {
		eNavItem.removeClass('active');	
		$(this).addClass('active');
	});
	eNavUl.mouseleave(function () {
		iLeft = Math.round(eNavItemActive.offset().left - eNavUl.offset().left);
		iWidth = eNavItemActive.outerWidth();
		eNavMarker.stop(false, true).animate({left: iLeft, width: iWidth},{duration:1500, easing: sStyle});	
	})
}

function mainBannerSize () {
	var eWrap = $('#main-banner'),
		eImg = $('#main-banner__img'),
		iDuration = 30000,
		iDelay = 100;
	setTimeout(function () {
		eImg.animate({
			backgroundSize: '150%'
		}, iDuration, 'easeInOutCubic', function () {
			setTimeout(function () {
				eImg.animate({
					backgroundSize: '100%'
				}, iDuration, 'easeInOutCubic', mainBannerSize)
			}, iDelay)
		})
	}, iDelay)
}

function autoReload () {
	location.href = self.location;
}