/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=914e65590c7aa7f2b6a63ca212d6b89e)
 * Config saved to config.json and https://gist.github.com/914e65590c7aa7f2b6a63ca212d6b89e
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}function i(i){i&&3===i.which||(t(s).remove(),t(n).each(function(){var o=t(this),s=e(o),n={relatedTarget:this};s.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(s[0],i.target)||(s.trigger(i=t.Event("hide.bs.dropdown",n)),i.isDefaultPrevented()||(o.attr("aria-expanded","false"),s.removeClass("open").trigger(t.Event("hidden.bs.dropdown",n)))))}))}function o(e){return this.each(function(){var i=t(this),o=i.data("bs.dropdown");o||i.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(i)})}var s=".dropdown-backdrop",n='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.6",a.prototype.toggle=function(o){var s=t(this);if(!s.is(".disabled, :disabled")){var n=e(s),a=n.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!n.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(n.trigger(o=t.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;s.trigger("focus").attr("aria-expanded","true"),n.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var o=t(this);if(i.preventDefault(),i.stopPropagation(),!o.is(".disabled, :disabled")){var s=e(o),a=s.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&s.find(n).trigger("focus"),o.trigger("click");var r=" li:not(.disabled):visible a",d=s.find(".dropdown-menu"+r);if(d.length){var l=d.index(i.target);38==i.which&&l>0&&l--,40==i.which&&l<d.length-1&&l++,~l||(l=0),d.eq(l).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",n,a.prototype.toggle).on("keydown.bs.dropdown.data-api",n,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),s=o.data("bs.tab");s||o.data("bs.tab",s=new i(this)),"string"==typeof e&&s[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.data("target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var s=i.find(".active:last a"),n=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:s[0]});if(s.trigger(n),e.trigger(a),!a.isDefaultPrevented()&&!n.isDefaultPrevented()){var r=t(o);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){s.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:s[0]})})}}},i.prototype.activate=function(e,o,s){function n(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),s&&s()}var a=o.find("> .active"),r=s&&t.support.transition&&(a.length&&a.hasClass("fade")||!!o.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n(),a.removeClass("in")};var o=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=o,this};var s=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',s).on("click.bs.tab.data-api",'[data-toggle="pill"]',s)}(jQuery),+function(t){"use strict";function e(e){var i,o=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(o)}function i(e){return this.each(function(){var i=t(this),s=i.data("bs.collapse"),n=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);!s&&n.toggle&&/show|hide/.test(e)&&(n.toggle=!1),s||i.data("bs.collapse",s=new o(this,n)),"string"==typeof e&&s[e]()})}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};o.VERSION="3.3.6",o.TRANSITION_DURATION=350,o.DEFAULTS={toggle:!0},o.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},o.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,s=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(s&&s.length&&(e=s.data("bs.collapse"),e&&e.transitioning))){var n=t.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){s&&s.length&&(i.call(s,"hide"),e||s.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var d=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][d])}}}},o.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var s=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(o.TRANSITION_DURATION):s.call(this)}}},o.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},o.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,o){var s=t(o);this.addAriaAndCollapsedClass(e(s),s)},this)).end()},o.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var s=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=o,t.fn.collapse.noConflict=function(){return t.fn.collapse=s,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(o){var s=t(this);s.attr("data-target")||o.preventDefault();var n=e(s),a=n.data("bs.collapse"),r=a?"toggle":s.data();i.call(n,r)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one("bsTransitionEnd",function(){i=!0});var s=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);

oGlobal = {
	iScrlTop: 0,
	iWidth: $(window).width()
}

$(window).scroll(function () {
	oGlobal.iScrlTop = $(this).scrollTop();
	NavScrl.scrolling();
}).load(function () {
	
})


$(function () {

	$('.fc-btn, .nform_btn, .field_class').removeAttr('style');

	NavScrl.init();

	var oParamSlider1 = {
			//mode: 'fade',
			slideWidth: 200,
			slideMargin: 65,
			maxSlides: 4,
			minSlides: 1,
			moveSlides: 1,
			pager: false,
			infiniteLoop: true,
			hideControlOnEnd: false
		};

	if (oGlobal.iWidth < 1200) {
		oParamSlider1.maxSlides = 3;
		if (oGlobal.iWidth < 992) {
			oParamSlider1.maxSlides = 2;
			if (oGlobal.iWidth < 768) {
				oParamSlider1.maxSlides = 2;
				oParamSlider1.slideMargin = 20;
				if (oGlobal.iWidth < 480) {
					oParamSlider1.maxSlides = 1;
					oParamSlider1.slideMargin = 0;
				}
			}
		}
	}

	$('.js-slider1').bxSlider(oParamSlider1);

});

NavScrl = {
	sLast: null,
	eNav: null,
	eNavItem: null,
	scrlItem: null,
	iHeaderHeight: 40,
	init: function () {
		this.eNav = $('.navbar-nav'),
		this.eNavItem = $('.navbar-nav a'),
		this.scrlItem = this.eNavItem.map(function () {
			var sItem = $($(this).attr('href'));
			if (sItem.length) return sItem;
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
			if ($(this).offset().top < oGlobal.iScrlTop + window.innerHeight / 2) return this;
		});
		cur = cur[cur.length-1];
		var sHash = cur && cur.length ? cur[0].id : '';
		if (NavScrl.sLast !== sHash) {
			NavScrl.sLast = sHash;
			NavScrl.eNav.find('li').removeClass('active');
			if (sHash.length > 0) NavScrl.eNav.find('a[href=#'+ sHash +']').parent().addClass('active');
			sHash = '#'+ sHash.replace('goto-','');
			window.history.pushState(null, null, sHash);
			//window.location.hash = sHash;
		}
	}
};