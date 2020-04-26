var elm = ".box";
$(".body").on("scroll touchmove mousewheel DOMMouseScroll", function(e){e.preventDefault();});
$("#kakao").on("scroll touchmove mousewheel DOMMouseScroll", function(e){e.preventDefault();});


window.onload = function() {

    $(".body").on("scroll touchmove mousewheel DOMMouseScroll", function(e){e.preventDefault();});
    $("#kakao").on("scroll touchmove mousewheel DOMMouseScroll", function(e){e.preventDefault();});

    var tex = $(".textContainer");
    var bgimg = $(".bgbg");
    var next = 0;
    var first = false;
    var last = false;

    $(elm).each(function(index) {
        var startY = 0,
            endY = 0;
        $(this).on('touchstart', function(event) {
            startY = event.originalEvent.changedTouches[0].screenY;
        });
        $(this).on('touchend', function(event) {
            endY = event.originalEvent.changedTouches[0].screenY;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            if (startY - endY > 50) { // 아래로
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (event) {}
                }
            } else if (endY - startY > 50) {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (event) {}
                }
            }

            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 400,
                complete: function() {
                    startY=0; endY=0;
                }
            });
        });


        //mouse click
        var mstartY = 0,
            mendY = 0;
        $(this).on('mousedown', function(event) {
            mstartY = event.pageY;
        });
        $(this).on('mouseup', function(event) {
            mendY = event.pageY;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            if (mstartY - mendY > 50) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (event) {}
                }
            } else if (mendY - mstartY > 50) {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (event) {}
                }
            }

            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 600,
                complete: function() { startY=0; endY=0; }
            });
        });

        $(this).on("scroll touchmove",function(e){
            e.preventDefault();
        });

        // mouse wheel
        $(this).on("mousewheel DOMMouseScroll", function(e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail)
                delta = -event.detail / 3;

            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);

            var nx = $(elmSelecter).next();
            var pr;

            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                last = index > 4;
                if ($(elmSelecter).next() != undefined) {
                    next=1;
                    if(!last) elmSelecter.find('.bgbg').fadeOut(300);
                    else elmSelecter.find('.bgbg').fadeIn(500);
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) {}
                }
            // 마우스휠을 아래에서 위로
            } else if(delta >0) {
                first = index < 2;
                if ($(elmSelecter).prev() != undefined) {
                    next=-1;
                    if(!first) elmSelecter.find('.bgbg').fadeOut(300);
                    else elmSelecter.find('.bgbg').fadeIn(500);
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) {}
                }
            }

            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 600,
                complete: function() {
                    if(next == 1) elmSelecter.next().children(0).children(0).fadeIn(500);
                    else if(next == -1) elmSelecter.prev().children(0).children(0).fadeIn(500);
                    first = false; last = false;
                    delta=0;
                    next=0;
                }
            });
        });
    });
}
