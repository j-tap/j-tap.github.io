function swiperSlides() {
	{
		var e = (new Swiper(".swiper-container.promo-slider", {
			direction: "horizontal",
			loop: !1,
			paginationClickable: !0,
			pagination: ".swiper-container.promo-slider .swiper-pagination",
			nextButton: ".swiper-container.promo-slider .swiper-button-next",
			prevButton: ".swiper-container.promo-slider .swiper-button-prev"
		}), new Swiper(".swiper-container.shop-slider", {
			direction: "horizontal",
			loop: !1,
			paginationClickable: !0,
			slidesPerView: 3,
			pagination: ".swiper-container.shop-slider .swiper-pagination",
			nextButton: ".swiper-container.shop-slider .swiper-button-next",
			prevButton: ".swiper-container.shop-slider .swiper-button-prev"
		}));
		new Swiper(".swiper-container.gallery-slider", {
			direction: "horizontal",
			loop: !1,
			paginationClickable: !0,
			pagination: ".swiper-container.gallery-slider .swiper-pagination",
			nextButton: ".swiper-container.gallery-slider .swiper-button-next",
			prevButton: ".swiper-container.gallery-slider .swiper-button-prev"
		})
	}
	$(window).outerWidth() < 768 && (e.params.slidesPerView = 2, e.update()), $(window).outerWidth() < 500 && (e.params.slidesPerView = 1, e.update());
	for (var i = Math.ceil($(".swiper-container.shop-slider").find(".swiper-slide").length / e.params.slidesPerView), o = 0; i > o; o++) {
		var a = "swiper-pagination-bullet";
		0 == o && (a += " swiper-pagination-bullet-active"), $(".shop-slider__swiper-pagination").append('<span class="' + a + '"></span>')
	}
	e.params.onSlideChangeStart = function(e) {
		var i = "swiper-pagination-bullet-active";
		$(".shop-slider__swiper-pagination").children().removeClass(i).eq(e.activeIndex).addClass(i)
	}, $(".shop-slider__swiper-pagination").children().click(function() {
		e.slideTo($(this).index())
	})
}

function initMap() {
	mapShops = new ymaps.Map("mapShops", {
		center: [55.76, 37.64],
		zoom: 15,
		controls: []
	}, {
		searchControlProvider: "yandex#search"
	}), mapShops.behaviors.disable("scrollZoom")
}

function animateOnLoad() {
	var e = $(".header-top__nav"),
		i = $(".header__center"),
		o = $(".header__bottom"),
		a = $(".promo-block__hand"),
		t = $(".promo-block__hatch__text"),
		n = $(".promo-block__4g");
	eBreadcrumbs = $(".breadcrumbs"), setTimeout(function() {
		oGlob.isIe8 ? (a.show(300), n.show(300), t.show(300), i.show(500), o.show(500)) : (a.animate({
			opacity: 1
		}, 500), n.animate({
			opacity: 1
		}, 300), hatchSpriteAnim(function() {
			t.animate({
				opacity: 1
			}, 300, function() {
				e.is(":visible") && e.animate({
					opacity: 1
				}, 300), i.animate({
					opacity: 1,
					top: 0
				}, 500), setTimeout(function() {
					o.is(":visible") && o.animate({
						opacity: 1,
						top: 0
					}, 500), eBreadcrumbs.is(":visible") && eBreadcrumbs.animate({
						opacity: 1,
						top: 0
					}, 300)
				}, 200)
			})
		}))
	}, 1e3)
}

function moreShow() {
	$('[class^="js-more-body__"]').hide(), $('[class^="js-more-btn__"]').css("cursor", "pointer").click(function() {
		var e = $("body").find(".js-more-body__" + $(this).attr("class").split("__")[1]);
		e.hasClass("open") ? e.removeClass("open").slideUp(200) : e.slideDown(300).addClass("open")
	})
}

function hatchSpriteAnim(e) {
	var i = $(".promo-block__hatch"),
		o = 50,
		a = i.height(),
		t = 35,
		n = 0,
		s = setInterval(function() {
			n++, i.css("background-position", "0px -" + a * n + "px"), n == o && (clearInterval(s), e())
		}, 1e3 / t)
}

function centerElem(e, i) {
	var o = (i - e.width()) / 2;
	e.css({
		left: o
	})
}
oGlob = {
	isIe8: !1
}, $(function() {
	$("html").hasClass("ie8") && (oGlob.isIe8 = !0), moreShow(), animateOnLoad(), oAnimate.init(), oMobNav.init();
	var e = 4;
	$(window).outerWidth() < 767 && (e = 2), oPrlx.init([
		[".promo-block__hand", e]
	]), oNavPage.init(), swiperSlides(), $(".js-scroll").jScrollPane();
	$.ajax({
		url: "http://api-maps.yandex.ru/2.1/?lang=ru_RU",
		dataType: "script",
		cache: !0,
		success: function() {
			ymaps.ready(initMap)
		}
	}), $(".js-accord-dl").AccordDl(), $(window).scroll(function() {
		var e = $(this).scrollTop();
		oPrlx.scrl(e), oNavPage.eNav.is(":visible") && (oNavPage.scrl(e), oNavPage.scrolling(e)), oAnimate.scrl(e)
	}), $(document).click(function(e) {
		var i = $(".promo-sublist__popup");
		0 === $(e.target).closest(".promo-sublist__popup").length && i.animate({
			opacity: 0
		}, 200, function() {
			$(this).hide()
		}).removeClass("open")
	}), $(".promo-sublist-item__name").click(function() {
		var e = $(this).parents(".steps-promo-sublist__item").find(".promo-sublist__popup");
		return e.hasClass("open") ? e.animate({
			opacity: 0
		}, 200, function() {
			$(this).hide()
		}).removeClass("open") : ($(".promo-sublist__popup").not(e).css("opacity", 0).hide().removeClass("open"), e.show().animate({
			opacity: 1
		}, 300).addClass("open")), !1
	})
}), oMobNav = {
	ePlace: null,
	init: function() {
		oMobNav.ePlace = $(".mobil-nav__place"), oMobNav.ePlace.height($(window).outerHeight()), $(".mobil-nav__btn").click(oMobNav.show), $(".mobil-nav__place__close").click(oMobNav.hide)
	},
	show: function() {
		oMobNav.ePlace.animate({
			opacity: 1,
			right: 0
		}, 300)
	},
	hide: function() {
		oMobNav.ePlace.animate({
			opacity: 0,
			right: "-91%"
		}, 300)
	}
}, oAnimate = {
	eHead: null,
	eListItem: null,
	eHatchLine: null,
	eImg1: null,
	eImg2: null,
	eVideoInfoParams: null,
	init: function() {
		oAnimate.eHead = $(".steps-promo-head"), oAnimate.eListItem = $(".steps-promo-list__item"), oAnimate.eHatchLine = $(".steps-promo__hatch-line"), oAnimate.eImg1 = $(".steps-promo__img-1"), oAnimate.eImg2 = $(".steps-promo__img-2"), oAnimate.eVideoInfoParams = $(".video-info-params__item"), oAnimate.scrl($(window).scrollTop())
	},
	scrl: function(e) {
		function i(e) {
			setTimeout(function() {
				e.animate({
					opacity: 1,
					top: 0
				}, 300)
			}, a), t++, a = 250 * t
		}
		var o = $(window).height() / 1.5,
			a = 0,
			t = 0;
		e > oAnimate.eVideoInfoParams.first().offset().top - o && oAnimate.eVideoInfoParams.each(function(e) {
			if (e % 2) {
				var o = $(this).add($(this).prev());
				i(o)
			}
		}), e > oAnimate.eHead.offset().top - o && (i(oAnimate.eHead), oAnimate.eListItem.each(function() {
			i($(this))
		}), i(oAnimate.eHatchLine), oAnimate.eImg1.is(":visible") && (i(oAnimate.eImg1), i(oAnimate.eImg2)))
	}
}, oNavPage = {
	sLast: null,
	eNav: null,
	eLinkNav: null,
	eSection: null,
	iTopNav: 0,
	iHeightNav: 0,
	init: function() {
		oNavPage.eNav = $(".nav-by-page"), oNavPage.eNav.is(":visible") && (oNavPage.eLinkNav = oNavPage.eNav.find(".nav-by-page__item a"), oNavPage.iTopNav = oNavPage.eNav.offset().top, oNavPage.iHeightNav = oNavPage.eNav.outerHeight(!0), oNavPage.eSection = oNavPage.eLinkNav.map(function() {
			var e = $($(this).attr("href"));
			return e.length ? e : void 0
		}), oNavPage.scrl($(window).scrollTop()), window.location.hash.length && setTimeout(function() {
			oNavPage["goto"](window.location.hash)
		}, 1), $(".nav-by-page__item a").click(function() {
			return oNavPage["goto"]($(this).attr("href")), !1
		}))
	},
	scrl: function(e) {
		e > oNavPage.iTopNav ? oNavPage.eNav.addClass("m-fix").parent().height(oNavPage.iHeightNav) : oNavPage.eNav.removeClass("m-fix").parent().height("auto")
	},
	"goto": function(e) {
		var i = oNavPage.eNav.find("a[href=" + e + "]");
		i.parent().addClass("active").siblings().removeClass("active"), $(e).length && $("html, body").animate({
			scrollTop: $(e).offset().top - 104
		}, "500")
	},
	scrolling: function(e) {
		var i = oNavPage.eSection.map(function() {
			return $(this).offset().top < e + $(window).outerHeight() / 2 ? this : void 0
		});
		i = i[i.length - 1];
		var o = i && i.length ? i[0].id : "";
		oNavPage.sLast !== o && (oNavPage.sLast = o, $(".nav-by-page__item").removeClass("active"), o.length > 0 && $(".nav-by-page__item a[href=#" + o + "]").parent().addClass("active"), o = "#" + o.replace("goto-", ""), window.history.pushState(null, null, o))
	}
}, oPrlx = {
	aBubbles: [],
	init: function(e) {
		$.each(e, function(e, i) {
			var o = {};
			o.top = $(i[0]).position().top || 0, o.mod = parseInt(i[1]), o.elem = $(i[0]), oPrlx.aBubbles.push(o)
		})
	},
	scrl: function(e) {
		$.each(oPrlx.aBubbles, function(i, o) {
			var a = -(e / o.mod) + o.top;
			$(o.elem).css("top", a)
		})
	}
}, $.fn.AccordDl = function() {
	return this.children("dt").click(function() {
		var e = $(this);
		e.hasClass("active") ? e.next("dd").slideUp(200).andSelf().removeClass("active") : (e.siblings().removeClass("active"), e.siblings("dd").slideUp(200), e.next("dd").slideDown(300).andSelf().addClass("active"))
	}), this
}, $(window).resize(function() {
	$(".video-promo__video").is(":visible") && centerElem($(".video-promo__video video"), $("#page").width())
}), $(window).load(function() {
	$(".video-promo__video").is(":visible") && centerElem($(".video-promo__video video"), $("#page").width())
});