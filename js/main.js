function headerTyping(){var t=$(".header-logo");t.find(".char").remove();var n=t.children("span"),e=t.children("small"),o=0;function i(t,n){for(var e=0;e<n.length;e++){var i=$("<span/>",{text:n.charAt(e),class:"char char-"+(o+1)});t.append(i),o++}}i(n,n.children("span").textNode()),i(e,e.children("span").textNode())}function toggleIsClick(){$(this).toggleClass("is-click")}function isElementOnScreen(t){var n=$(window),e=n.scrollTop(),i=e+n.height(),o=e+n.height()/2,a=t.offset().top,s=a+t.height();return a<i&&e<=a||a<e&&o<s}function replaceAt(t,n,e){return t.substring(0,n)+e+t.substring(n+1)}$(function(){oLng.init(),oNav.init(),$(document).on("scroll",function(t){oNav.upd()})}),oLng={sDefault:"ru",init:function(){var n=this;localStorage.getItem("lng")&&(n.sDefault=localStorage.getItem("lng")),$.getJSON("/lang.json",function(t){n.oStrings=t,n.toggler($('[data-lng="'+n.sDefault+'"]')),n.set(n.sDefault,function(){$("[data-lng]").click(function(){n.toggler($(this))})})}).fail(function(t,n,e){console.error(e)})},toggler:function(t){t.addClass("active").siblings().removeClass("active");var n=t.data("lng");this.set(n,function(){headerTyping()})},set:function(e,i){var o=this;o.oStrings[e]||(e=o.sDefault),o.sCurrent=e,$("[lngstr]").each(function(t){var n=$(this).attr("lngstr");$(this).animate({opacity:0},200,function(){$(this).html(o.oStrings[e][n]),$(this).animate({opacity:1},200,function(){$("[lngstr]").length==t+1&&"function"==typeof i&&i()})})}),localStorage.setItem("lng",e)}},oNav={hash:"",elems:null,istimeout:!1,init:function(){this.elems=$(".section[id]"),oNav.upd()},upd:function(){oNav.istimeout&&clearTimeout(oNav.istimeout),oNav.istimeout=setTimeout(function(){oNav.elems.each(function(){if(isElementOnScreen($(this)))return oNav.elems.removeClass("active"),$(this).addClass("active"),oNav.hash="#"+$(this).attr("id"),!1;oNav.hash=""}),oNav.set()},20)},set:function(){0<oNav.hash.length?history.pushState(null,null,oNav.hash):history.pushState(null,null,window.location.pathname+window.location.search)}},function(e){e.fn.textNode=function(t,n){return arguments.length<2&&(n=""),arguments.length<1&&(t=""),e.map(this,function(t){return function(t,n){for(var e=[],i=t.firstChild;i;i=i.nextSibling)3==i.nodeType&&e.push(i.nodeValue);return e.join(n)}(t,n)}).join(t)}}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaGVhZGVyVHlwaW5nIiwiZUxvZ28iLCIkIiwiZmluZCIsInJlbW92ZSIsImVOYW1lIiwiY2hpbGRyZW4iLCJlU3RhdHVzIiwibCIsIl9hY3Rpb24iLCJlRWxlbSIsInNUZXh0IiwiaSIsImxlbmd0aCIsImVDaGFyIiwidGV4dCIsImNoYXJBdCIsImNsYXNzIiwiYXBwZW5kIiwidGV4dE5vZGUiLCJ0b2dnbGVJc0NsaWNrIiwidGhpcyIsInRvZ2dsZUNsYXNzIiwiaXNFbGVtZW50T25TY3JlZW4iLCJlbGVtIiwid2luIiwid2luZG93IiwidG9wU2NyZWVuIiwic2Nyb2xsVG9wIiwiYm90dG9tU2NyZWVuIiwiaGVpZ2h0IiwibWlkZGxlU2NyZWVuIiwidG9wRWxlbSIsIm9mZnNldCIsInRvcCIsImJvdHRvbUVsZW0iLCJyZXBsYWNlQXQiLCJzIiwibiIsInQiLCJzdWJzdHJpbmciLCJvTG5nIiwiaW5pdCIsIm9OYXYiLCJkb2N1bWVudCIsIm9uIiwiZSIsInVwZCIsInNEZWZhdWx0IiwiX3RoaXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0SlNPTiIsImRhdGEiLCJvU3RyaW5ncyIsInRvZ2dsZXIiLCJzZXQiLCJjbGljayIsImZhaWwiLCJ0eXBlIiwiaW5mbyIsImNvbnNvbGUiLCJlcnJvciIsImFkZENsYXNzIiwic2libGluZ3MiLCJyZW1vdmVDbGFzcyIsImxuZyIsImYiLCJzQ3VycmVudCIsImVhY2giLCJzTmFtZSIsImF0dHIiLCJhbmltYXRlIiwib3BhY2l0eSIsImh0bWwiLCJzZXRJdGVtIiwiaGFzaCIsImVsZW1zIiwiaXN0aW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwiZm4iLCJlbGVtZW50U2VwYXJhdG9yIiwibm9kZVNlcGFyYXRvciIsImFyZ3VtZW50cyIsIm1hcCIsImVsIiwic2VwYXJhdG9yIiwidGV4dENvbnRlbnRzIiwiY2hsZCIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsIm5vZGVUeXBlIiwicHVzaCIsIm5vZGVWYWx1ZSIsImpvaW4iLCJlbGVtZW50VGV4dCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkFBV0EsU0FBU0EsZUFDUixJQUFJQyxFQUFRQyxFQUFFLGdCQUNkRCxFQUFNRSxLQUFLLFNBQVNDLFNBRXBCLElBQUlDLEVBQVFKLEVBQU1LLFNBQVMsUUFDMUJDLEVBQVVOLEVBQU1LLFNBQVMsU0FDekJFLEVBQUksRUFLTCxTQUFTQyxFQUFTQyxFQUFPQyxHQUN4QixJQUFLLElBQUlDLEVBQUksRUFBR0EsRUFBSUQsRUFBTUUsT0FBUUQsSUFBSyxDQUN0QyxJQUFJRSxFQUFRWixFQUFFLFVBQVcsQ0FDdkJhLEtBQU1KLEVBQU1LLE9BQU9KLEdBQ25CSyxNQUFPLGNBQWVULEVBQUUsS0FFMUJFLEVBQU1RLE9BQU9KLEdBQ2JOLEtBVkZDLEVBQVFKLEVBQU9BLEVBQU1DLFNBQVMsUUFBUWEsWUFDdENWLEVBQVFGLEVBQVNBLEVBQVFELFNBQVMsUUFBUWEsWUFzRzNDLFNBQVNDLGdCQUNSbEIsRUFBRW1CLE1BQU1DLFlBQVksWUFHckIsU0FBU0Msa0JBQW1CQyxHQUMzQixJQUFJQyxFQUFNdkIsRUFBRXdCLFFBQ1hDLEVBQVlGLEVBQUlHLFlBQ2hCQyxFQUFlRixFQUFZRixFQUFJSyxTQUMvQkMsRUFBZUosRUFBWUYsRUFBSUssU0FBVyxFQUMxQ0UsRUFBVVIsRUFBS1MsU0FBU0MsSUFDeEJDLEVBQWFILEVBQVVSLEVBQUtNLFNBRTdCLE9BQVNFLEVBQVVILEdBQTZCRixHQUFYSyxHQUEwQkEsRUFBVUwsR0FBNEJJLEVBQWJJLEVBR3pGLFNBQVNDLFVBQVdDLEVBQUdDLEVBQUdDLEdBQ3pCLE9BQU9GLEVBQUVHLFVBQVUsRUFBR0YsR0FBS0MsRUFBSUYsRUFBRUcsVUFBVUYsRUFBSSxHQTFJaERwQyxFQUFFLFdBRUR1QyxLQUFLQyxPQUVMQyxLQUFLRCxPQUNMeEMsRUFB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bmcuaW5pdCgpO1xyXG5cclxuXHRvTmF2LmluaXQoKTtcclxuXHQkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdG9OYXYudXBkKCk7XHJcblx0fSk7XHJcblxyXG59KVxyXG5cclxuZnVuY3Rpb24gaGVhZGVyVHlwaW5nICgpIHtcclxuXHR2YXIgZUxvZ28gPSAkKCcuaGVhZGVyLWxvZ28nKTtcclxuXHRlTG9nby5maW5kKCcuY2hhcicpLnJlbW92ZSgpO1xyXG5cclxuXHR2YXIgZU5hbWUgPSBlTG9nby5jaGlsZHJlbignc3BhbicpLFxyXG5cdFx0ZVN0YXR1cyA9IGVMb2dvLmNoaWxkcmVuKCdzbWFsbCcpLFxyXG5cdFx0bCA9IDA7XHJcblxyXG5cdF9hY3Rpb24oZU5hbWUsIGVOYW1lLmNoaWxkcmVuKCdzcGFuJykudGV4dE5vZGUoKSk7XHJcblx0X2FjdGlvbihlU3RhdHVzLCBlU3RhdHVzLmNoaWxkcmVuKCdzcGFuJykudGV4dE5vZGUoKSk7XHJcblxyXG5cdGZ1bmN0aW9uIF9hY3Rpb24gKGVFbGVtLCBzVGV4dCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzVGV4dC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZUNoYXIgPSAkKCc8c3Bhbi8+Jywge1xyXG5cdFx0XHRcdFx0dGV4dDogc1RleHQuY2hhckF0KGkpLFxyXG5cdFx0XHRcdFx0Y2xhc3M6ICdjaGFyIGNoYXItJysgKGwrMSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0ZUVsZW0uYXBwZW5kKGVDaGFyKTtcclxuXHRcdFx0bCsrO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxub0xuZyA9IHtcclxuXHRzRGVmYXVsdDogJ3J1JyxcclxuXHRpbml0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG5nJykpIF90aGlzLnNEZWZhdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xuZycpO1xyXG5cclxuXHRcdCQuZ2V0SlNPTignL2xhbmcuanNvbicsIGZ1bmN0aW9uIChkYXRhKSB7XHJcblx0XHRcdF90aGlzLm9TdHJpbmdzID0gZGF0YTtcclxuXHJcblx0XHRcdF90aGlzLnRvZ2dsZXIoJCgnW2RhdGEtbG5nPVwiJysgX3RoaXMuc0RlZmF1bHQgKydcIl0nKSk7XHJcblxyXG5cdFx0XHRfdGhpcy5zZXQoX3RoaXMuc0RlZmF1bHQsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdFx0JCgnW2RhdGEtbG5nXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdF90aGlzLnRvZ2dsZXIoJCh0aGlzKSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9KS5mYWlsKGZ1bmN0aW9uIChlLCB0eXBlLCBpbmZvKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoaW5mbyk7XHJcbiAgICBcdH0pOztcclxuXHR9LFxyXG5cdHRvZ2dsZXI6IGZ1bmN0aW9uIChlRWxlbSkge1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHJcblx0XHRlRWxlbS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR2YXIgbG5nID0gZUVsZW0uZGF0YSgnbG5nJyk7XHJcblxyXG5cdFx0X3RoaXMuc2V0KGxuZywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRoZWFkZXJUeXBpbmcoKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0c2V0OiBmdW5jdGlvbiAobG5nLCBmKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0aWYgKCFfdGhpcy5vU3RyaW5nc1tsbmddKSBsbmcgPSBfdGhpcy5zRGVmYXVsdDtcclxuXHJcblx0XHRfdGhpcy5zQ3VycmVudCA9IGxuZztcclxuXHJcblx0XHQkKCdbbG5nc3RyXScpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0dmFyIHNOYW1lID0gJCh0aGlzKS5hdHRyKCdsbmdzdHInKTtcclxuXHRcdFx0JCh0aGlzKS5hbmltYXRlKHtvcGFjaXR5OiAwfSwgMjAwLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5odG1sKF90aGlzLm9TdHJpbmdzW2xuZ11bc05hbWVdKTtcclxuXHRcdFx0XHQkKHRoaXMpLmFuaW1hdGUoe29wYWNpdHk6IDF9LCAyMDAsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGlmICgkKCdbbG5nc3RyXScpLmxlbmd0aCA9PSBpKzEpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBmID09ICdmdW5jdGlvbicpIGYoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHR9KVxyXG5cclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsbmcnLCBsbmcpO1xyXG5cdH1cclxufVxyXG5cclxub05hdiA9IHtcclxuXHRoYXNoOiAnJyxcclxuXHRlbGVtczogbnVsbCxcclxuXHRpc3RpbWVvdXQ6IGZhbHNlLFxyXG5cdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZWxlbXMgPSAkKCcuc2VjdGlvbltpZF0nKTtcclxuXHRcdG9OYXYudXBkKCk7XHJcblx0fSxcclxuXHR1cGQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChvTmF2LmlzdGltZW91dCkgY2xlYXJUaW1lb3V0KG9OYXYuaXN0aW1lb3V0KTtcclxuXHJcblx0XHRvTmF2LmlzdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvTmF2LmVsZW1zLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGlmIChpc0VsZW1lbnRPblNjcmVlbigkKHRoaXMpKSkge1xyXG5cdFx0XHRcdFx0b05hdi5lbGVtcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdG9OYXYuaGFzaCA9ICcjJysgJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRvTmF2Lmhhc2ggPSAnJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRvTmF2LnNldCgpO1xyXG5cdFx0fSwgMjApO1xyXG5cdH0sXHJcblx0c2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAob05hdi5oYXNoLmxlbmd0aCA+IDApIFxyXG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBvTmF2Lmhhc2gpXHJcblx0XHRlbHNlXHJcblx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlSXNDbGljayAoKSB7XHJcblx0JCh0aGlzKS50b2dnbGVDbGFzcygnaXMtY2xpY2snKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbGVtZW50T25TY3JlZW4gKGVsZW0pIHtcclxuXHR2YXIgd2luID0gJCh3aW5kb3cpLFxyXG5cdFx0dG9wU2NyZWVuID0gd2luLnNjcm9sbFRvcCgpLFxyXG5cdFx0Ym90dG9tU2NyZWVuID0gdG9wU2NyZWVuICsgd2luLmhlaWdodCgpLFxyXG5cdFx0bWlkZGxlU2NyZWVuID0gdG9wU2NyZWVuICsgd2luLmhlaWdodCgpIC8gMixcclxuXHRcdHRvcEVsZW0gPSBlbGVtLm9mZnNldCgpLnRvcCxcclxuXHRcdGJvdHRvbUVsZW0gPSB0b3BFbGVtICsgZWxlbS5oZWlnaHQoKTtcclxuXHQvL3JldHVybiAoKGJvdHRvbUVsZW0gPD0gYm90dG9tU2NyZWVuKSAmJiAodG9wRWxlbSA+PSB0b3BTY3JlZW4pKTtcclxuXHRyZXR1cm4gKCh0b3BFbGVtIDwgYm90dG9tU2NyZWVuKSAmJiAodG9wRWxlbSA+PSB0b3BTY3JlZW4pIHx8ICh0b3BFbGVtIDwgdG9wU2NyZWVuKSAmJiAoYm90dG9tRWxlbSA+IG1pZGRsZVNjcmVlbikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlQXQgKHMsIG4sIHQpIHtcclxuXHRyZXR1cm4gcy5zdWJzdHJpbmcoMCwgbikgKyB0ICsgcy5zdWJzdHJpbmcobiArIDEpO1xyXG59XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHRmdW5jdGlvbiBlbGVtZW50VGV4dCAoZWwsIHNlcGFyYXRvcikge1xyXG5cdFx0dmFyIHRleHRDb250ZW50cyA9IFtdO1xyXG5cdFx0Zm9yKHZhciBjaGxkID0gZWwuZmlyc3RDaGlsZDsgY2hsZDsgY2hsZCA9IGNobGQubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aWYgKGNobGQubm9kZVR5cGUgPT0gMykgeyBcclxuXHRcdFx0XHR0ZXh0Q29udGVudHMucHVzaChjaGxkLm5vZGVWYWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0ZXh0Q29udGVudHMuam9pbihzZXBhcmF0b3IpO1xyXG5cdH1cclxuXHQkLmZuLnRleHROb2RlID0gZnVuY3Rpb24gKGVsZW1lbnRTZXBhcmF0b3IsIG5vZGVTZXBhcmF0b3IpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoPDIpe25vZGVTZXBhcmF0b3I9XCJcIjt9XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aDwxKXtlbGVtZW50U2VwYXJhdG9yPVwiXCI7fVxyXG5cdFx0cmV0dXJuICQubWFwKHRoaXMsIGZ1bmN0aW9uIChlbCkge1xyXG5cdFx0XHRyZXR1cm4gZWxlbWVudFRleHQoZWwsIG5vZGVTZXBhcmF0b3IpO1xyXG5cdFx0fSkuam9pbihlbGVtZW50U2VwYXJhdG9yKTtcclxuXHR9XHJcbn0gKGpRdWVyeSkpOyJdfQ==
