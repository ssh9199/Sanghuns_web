window.onload = function() {

    var elm = ".box";

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
                    } catch (e) {}
                }
            } else if (endY - startY > 50) {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) {}
                }
            }
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800,
                complete: function() {}
            });
        });

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
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800,
                complete: function() {}
            });
        });
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("scroll touchmove mousewheel DOMMouseScroll", function(e) {
            e.preventDefault()
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
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
                } else {
                    try {
                        moveTop = $(elmSelecter).current().offset().top;
                    } catch (e) {}
                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) {}
                } else {
                    try {
                        moveTop = $(elmSelecter).current().offset().top;
                    } catch (e) {}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800,
                complete: function() {}
            });
        });
    });
}
