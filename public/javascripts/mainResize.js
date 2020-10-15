$(document).ready(function(){
    var window_h = $(window).height();
    $(".main-cover").height(window_h);

    $(window).resize(function(){
        var window_h = $(window).height();
        $(".main-cover").height(window_h);
    });

    // $(window).scroll(function(){
    //     var window_scrollTop = $(window).scrollTop();
    //     var window_height = $(window).height();
    //
    //     if(window_scrollTop>=window_height){
    //         $("#mainNav").css({
    //             "position":"fixed",
    //             "top":"0"
    //         });
    //     }else{
    //         $("#mainNav").css({
    //             "position":"absolute",
    //             "top":"100%"
    //         });
    //     }
    // });
});