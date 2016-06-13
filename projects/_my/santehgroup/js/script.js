$(document).ready(function () {

	/*setTimeout(function () {
		showWin ('.win-test')
	}, 1000);*/


	$('#logo').click(function () {
		showWin ('.win-test')
	});

	$(window).scroll(function (e) {
		var t = $(window).scrollTop(),
			y = -(t / 6),
			crd = 'center '+ y + 'px';
		oGlobal.scrl = t;
		$('.scroll-block-one').css({backgroundPosition: crd });

		animateSystemElems(t);

		//if ($('.hhh').length==0) $('body').append($('<span/>',{'class':'hhh'}));
		//$('body .hhh').html(t);
		
	})

})

oGlobal = {
	win: {
		w: window.innerWidth,
		h: window.innerHeight
	},
	scrl: 0
}

oElemSystem = {
	1: {
		sh1: {'right':0},
		hd1: {'right':'-150%'},
		sh2: {'left':0},
		hd2: {'left':'-150%'}
	},
	2: {
		sh1: {'right':0},
		hd1: {'right':'-150%'},
		sh2: {'left':0},
		hd2: {'left':'-150%'}
	},
	3: {
		sh1: {'right':0},
		hd1: {'right':'-150%'},
		sh2: {'right':0},
		hd2: {'right':'-150%'}
	},
	4: {
		sh1: {'right':0},
		hd1: {'right':'-150%'},
		sh2: {'left':0},
		hd2: {'left':'-150%'}
	},
	5: {
		sh1: {'right':0},
		hd1: {'right':'-150%'},
		sh2: {'left':0},
		hd2: {'left':'-150%'}
	},
	6: {
		sh1: {'left':0},
		hd1: {'left':'-150%'},
		sh2: {'right':0},
		hd2: {'right':'-150%'}
	}
}

function animateSystemElems (iScrlTop) {

	for (var i in oElemSystem) {
		var e = $('.system__item.item-'+ i),
			e1 = e.children('.system__elem'),
			e2 = e.children('.system__descr');

		if(
			iScrlTop >= e1.offset().top - oGlobal.win.h && 
			iScrlTop <= (e1.offset().top - oGlobal.win.h / 1.5) + e1.height()
		){
			e1.css(oElemSystem[i].sh1);
			e2.css(oElemSystem[i].sh2);
		} else {
			if (iScrlTop < e1.offset().top - oGlobal.win.h / 1.5) {
				e1.css(oElemSystem[i].hd1);
				e2.css(oElemSystem[i].hd2);
			}
		}
	}

}



function getSystemPrc (eItem, iScrl) {
	var h = iScrl + window.innerHeight - eItem.children('.system__elem').offset().top,
		r = h * 150 / eItem.children('.system__elem').outerHeight();
	r = 150 - r;
	return -r + '%';
}



function showWin (s) {
	var eWin = $('.window').filter(s);
	if (!eWin.parent().hasClass('window-wrap')) {
		eWin.wrap(
			$('<section/>',{'class':'window-wrap'})
		).prepend(
			$('<div/>',{'class':'window-close', 'text':'X'})
		).after(
			$('<div/>',{'class':'window-bg'})
		)
	};
	eWin.show().css({
		top: (window.innerHeight / 2) - ($('.window').outerHeight() / 2)
	}).parent().css('visibility','visible').animate({opacity: 1}, 200);
	$('body').addClass('hidden').on('click', '.window-close', function () {
		var eWin = $(this).parent(),
			eWrap = $(this).parents('.window-wrap');
		eWrap.animate({opacity: 0}, 200, function () {
			$(this).css('visibility','hidden');
			$('body').removeClass('hidden');
		})
	})
}
