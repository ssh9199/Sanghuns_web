var elm = ".box";
var elmSelecter;
$(".body").on("scroll touchmove mousewheel DOMMouseScroll", function(e) {
    e.preventDefault();
});
$("#kakao").on("scroll touchmove mousewheel DOMMouseScroll", function(e) {
    e.preventDefault();
});


window.onload = function() {

    $(".body").on("scroll touchmove mousewheel DOMMouseScroll", function(e) {
        e.preventDefault();
    });
    $("#kakao").on("scroll touchmove mousewheel DOMMouseScroll", function(e) {
        e.preventDefault();
    });

    var next;
    var first = false;
    var last = false;
    var a_pos;
    var a_speed;
    elm = ".box";

    $(elm).each(function(index) {
        var startY = 0,
            endY = 0;
        $(this).on('touchstart', function(event) {
            startY = event.originalEvent.changedTouches[0].screenY;
        });
        $(this).on('touchend', function(event) {
            endY = event.originalEvent.changedTouches[0].screenY;
            var moveTop = $(window).scrollTop();
            elmSelecter = $(elm).eq(index);
            if (startY - endY > 50) { // 아래로
                last = index > 4;
                if ($(elmSelecter).next() != undefined) {
                    next = elmSelecter.next();
                    if (!last) elmSelecter.find('.bgbg').fadeOut(600);
                    else elmSelecter.find('.bgbg').fadeIn(600);
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (event) {}
                }
            } else if (endY - startY > 50) { // 위로
                first = index < 2;
                if ($(elmSelecter).prev() != undefined) {
                    next = elmSelecter.prev();
                    if (!first) elmSelecter.find('.bgbg').fadeOut(600);
                    else elmSelecter.find('.bgbg').fadeIn(600);
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (event) {}
                }
            }
            switch (next.children(0).attr('id')) {
                case 'home':
                    a_pos = {
                        left: '40%'
                    };
                    a_speed = 1000;
                    break;
                case 'page1':
                    a_pos = {
                        left: '40%'
                    };
                    a_speed = 800;
                    break;
                case 'page2':
                    a_pos = {
                        left: '50%'
                    };
                    a_speed = 600;
                    break;
                case 'page3':
                    a_pos = {
                        left: '55%'
                    };
                    a_speed = 1000;
                    break;
            }

            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 900,
                complete: function() {
                    next.find('.bgbg').fadeIn(600);
                    next.find('.bg-m').animate(a_pos, a_speed);
                    first = false;
                    last = false;
                    startY = 0;
                    endY = 0;
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
            elmSelecter = $(elm).eq(index);
            if (mstartY - mendY > 50) {
                last = index > 4;
                if ($(elmSelecter).next() != undefined) {
                    next = elmSelecter.next();
                    if (!last) elmSelecter.find('.bgbg').fadeOut(600);
                    else elmSelecter.find('.bgbg').fadeIn(600);
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (event) {}
                }
            } else if (mendY - mstartY > 50) {
                first = index < 2;
                if ($(elmSelecter).prev() != undefined) {
                    next = elmSelecter.prev();
                    if (!first) elmSelecter.find('.bgbg').fadeOut(600);
                    else elmSelecter.find('.bgbg').fadeIn(600);
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (event) {}
                }
            }
            switch (next.children(0).attr('id')) {
                case 'home':
                    a_pos = {
                        left: '40%'
                    };
                    a_speed = 1000;
                    break;
                case 'page1':
                    a_pos = {
                        left: '40%'
                    };
                    a_speed = 800;
                    break;
                case 'page2':
                    a_pos = {
                        left: '50%'
                    };
                    a_speed = 600;
                    break;
                case 'page3':
                    a_pos = {
                        left: '55%'
                    };
                    a_speed = 1000;
                    break;
            }

            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 900,
                complete: function() {
                    next.find('.bgbg').fadeIn(600);
                    next.find('.bg-m').animate(a_pos, a_speed);
                    first = false;
                    last = false;
                    startY = 0;
                    endY = 0;
                }
            });
        });

        $(this).on("scroll touchmove", function(e) {
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
            elmSelecter = $(elm).eq(index);

            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                last = index > 4;
                if ($(elmSelecter).next() != undefined) {
                    next = elmSelecter.next();
                    if (!last) {
                        elmSelecter.find('.bgbg').fadeOut(600);
                        elmSelecter.find('.bg-m').animate({
                            left: "100%"
                        }, 600);
                    } else {
                        elmSelecter.find('.bgbg').fadeIn(600);
                        elmSelecter.find('.bg-m').animate({
                            left: "50%"
                        }, 600);
                    }
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) {}
                }
                // 마우스휠을 아래에서 위로
            } else if (delta > 0) {
                first = index < 2;
                if ($(elmSelecter).prev() != undefined) {
                    next = elmSelecter.prev();
                    if (!first) {
                        elmSelecter.find('.bgbg').fadeOut(600);
                        elmSelecter.find('.bg-m').animate({
                            left: "100%"
                        }, 600);
                    } else {
                        elmSelecter.find('.bgbg').fadeIn(600);
                        elmSelecter.find('.bg-m').animate({
                            left: "50%"
                        }, 600);
                    }
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) {}
                }
            }


            switch (next.children(0).attr('id')) {
                case 'home':
                    a_pos = {
                        left: '40%'
                    };
                    a_speed = 1000;
                    break;
                case 'page1':
                    a_pos = {
                        left: '40%'
                    };
                    a_speed = 800;
                    break;
                case 'page2':
                    a_pos = {
                        left: '50%'
                    };
                    a_speed = 600;
                    break;
                case 'page3':
                    a_pos = {
                        left: '55%'
                    };
                    a_speed = 1000;
                    break;
            }

            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 900,
                complete: function() {
                    next.find('.bgbg').fadeIn(600);
                    next.find('.bg-m').animate(a_pos, a_speed);
                    first = false;
                    last = false;
                    delta = 0;
                    next = 0;
                }
            });
        });
    });
}
