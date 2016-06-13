$( window ).resize(function() {resizeWindow();});
resizeWindow();

$('.article-pack-pull-container .jspDrag').mousedown(function(){ 
  $(this).addClass('nozoom');             
}).mouseup(function(){s   
    $(this).removeClass('nozoom');                        
}).mouseout(function(){
  $(this).removeClass('nozoom');          
});

function resizeWindow(){
var h = $(".scroll").height();
var scale = h/560;
var togglerWidth = $('.article-pack-pull-container').width();
TweenMax.set($(".article-pack2"), {scale:scale, transformOrigin:"left 40px"});



Draggable.create(".article-pack-pull-container .jspDrag", {
        type: "x",
        bounds: ".article-pack-pull-container",
        onDrag: function(e) {
        var step = ($(".article-pack-pull-container").width()-80)/60;
        var posX = -Math.round(this.x/step)*520;
        $(".article-pack-pull-container .jspDrag span").addClass('hide');

TweenMax.set($('.article-pack2'), {css:{backgroundPosition :posX+"px 0px"}});
         },
        onPress: function(e) {
            $(".article-pack-pull-container .jspDrag").addClass('on');
        },
        onRelease: function(e) { 
        $(".article-pack-pull-container .jspDrag").removeClass('on');
        if(this.x == togglerWidth-80 ) {
            $(".article-pack-pull-container .jspDrag").addClass('back');
        }
        if(this.x == 0 ) {
            $(".article-pack-pull-container .jspDrag").removeClass('back');
        }

    },
        onDragStart: function(e) {},
        onDragEnd: function(e)   {
            $(".article-pack-pull-container .jspDrag span").removeClass('hide');
        }
    });



}//resizeWindow
