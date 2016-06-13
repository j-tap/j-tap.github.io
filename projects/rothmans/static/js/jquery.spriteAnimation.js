/*!
 *
 * Copyright (c) 2015 Nickolay Artemyev; Licensed MIT
 *
 */

(function ($, window, undefined) {

    'use strict';

    function play_step(obj) {
        var params = obj.data('spriteAnimationParams');
        
        if (params.x < 100 && params.x > 0) { 
            params.timer = setTimeout(function() { play(obj) }, 1000 / params.fps);
        } else {
            params.onAnimationFinish.call();
        }
    }

    function play(obj) {
        var params = obj.data('spriteAnimationParams');
        
        if(params.x == 0 && params.step < 0){
            params.x = 100;            
        }
        
        params.x = params.x + params.step;
        
        if(params.x + params.step < 0 ){
            params.x = 0;            
        }
        
        obj.css('background-position', params.x + '% 0');

        play_step(obj);
    }

    $.fn.spriteAnimation = function (options) {
        return this.each(function() {

            var elem   = $(this);
            var params = $.extend({}, $.fn.spriteAnimation.defaults, options);
            elem.data('spriteAnimationParams', params);
            if(options.action == 'open'){
                params.step = 100 / (params.frames - 1);
            }else{
                params.step = 100 / (params.frames - 1) * -1;                
            }

            params.onAnimationStart.call();
            play(elem);
        });
    };

    $.fn.spriteAnimation.defaults = {
        nframes:    120,
        fps:        120,
        step:       1,
        x:          0,
        timer:      null,

        onAnimationStart: function() { },
        onAnimationFinish: function() { }
    };


})(jQuery, window);