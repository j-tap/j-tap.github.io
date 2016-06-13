if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(window).stellar({
        positionProperty: 'transform',
        horizontalScrolling: false,
        hideDistantElements: false,
    });

}