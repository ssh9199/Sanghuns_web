window.onload = function() {
    var elm = ".box";
    var moving = false;
    var lastY = null;
    $(elm).each(function(index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("scroll touchmove mousewheel DOMMouseScroll", function(e) {
            e.preventDefault();
            e.stopPropagation();
            var currentY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
            var delta = 0;
            var t_delta = currentY - lastY;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 10;
                if (window.opera) delta = -delta;
            } else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);


            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) {}
                }
                else {return;}
            } else if (delta > 0) {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) {}
                }
                else {return;}
            }
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 300,
                complete: function() {
                    moving = false;
                }
            });
        });


        $(this).on("touchstart", function(e) {
            lastY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
        });

        $(this).on("touchend", function(e) {
            e.preventDefault();
            e.stopPropagation();
            var currentY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
            var delta = currentY - lastY;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);

            // 터치를 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) {}
                }
                else {return;}
            } else if (delta > 0) {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) {}
                }
                else {return;}
            }
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 100,
                complete: function() {
                    moving = false;
                }
            });
        });
    });
}
