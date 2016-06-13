
$(function(){


    var mode = 0;
    //console.log($(window).width())
    $(window).resize(function(){
        var wWid = $(window).width();
        if (wWid<550){
            $('.expert-video-wrap').css({
                width:'100%'
            });
        }

    });
    $('.expert-video-wrap').on('click', function () {
        var wWid = $(window).width();
       if(wWid > 550){
            if($(this).parents('.expert').hasClass('active')){
                $(this).parents('.expert').removeClass('active');
                console.log('у');
                $(this).animate({
                    width: '50%'
                }, 1000); 
            }else{
                $(this).parents('.expert').addClass('active');
                console.log('д');
                $(this).animate({
                    width: '100%'
                }, 1000); 
            }
        }
    });
});