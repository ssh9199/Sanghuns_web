$(document).ready(function(){

    mainSlide();
    rolling_banner();
});

$(window).load(function(){
    $("#header").height(document.body.scrollHeight);
});

/*gnb*/
function gnb(){
    var $gnb;
    var $menuLists;
    var $submenuLists;

    function initGnb(){
        $gnb = $("#gnb");
        $menuLists = $gnb.find(">ul>li>a");
        $submenuLists = $gnb.find(".gnb_sub a");
    }

/*
    function initEvent(){
        $menuLists.on("click",function(e){
            if($(this).next(".gnb_sub").length != 0){
                e.preventDefault();
                openSubMenu($(this).next());
                setSelectToggle($(this))
            }else{
                setSelectMenu($(this))
            }
        })

        $submenuLists.on("click",function(e){
            setSelectSubMenu($(this));
        })
    }

    function openSubMenu($item, animation){
      if(animation == false){
        $item.parent().siblings().find('.gnb_sub').hide()
        $item.show();
      }else{
        $item.parent().siblings().find('.gnb_sub').slideUp()
        $item.slideToggle();
      }
    }

    function setSelectMenu($item){
        $menuLists.removeClass("select");
        $item.addClass("select");
    }

    function setSelectToggle($item){
      $menuLists.not($item).removeClass("select");
      $item.toggleClass("select");
    }

    function setSelectSubMenu($item){
        $submenuLists.removeClass("select");
        $item.addClass("select");
    }

    function setSelectMenuAt(index){
        var $item = $menuLists.eq(index);
        setSelectSubMenu($item)
    }

    function setSelectSubMenuAt(index){
       var $item = $submenuLists.eq(index);
       setSelectSubMenu($item)

       openSubMenu($item.parent().parent(".gnb_sub"),false)
    }

    function selectMenu(index1,index2){
      setSelectMenuAt(index1);
      if(index2 != null){
        setSelectSubMenuAt(index2)
      }
    }

    initGnb();
    initEvent();

    return{
      selectMenu:selectMenu
    }
}

/*메인 슬라이드*/
function mainSlide(){
    var $mainSlide;
    var $slideBody;
    var $slideItems;
    var timerID =0;
    var current = 0;

    function initSlide(){
        $mainSlide = $("#main_slide");
        $slideBody = $mainSlide.find(".slide_body");
        $slideItems = $slideBody.find("li");

        $slideBody.height($slideItems.length * 100 + "%");
    }
    function nextSlide(index){
        var $imgBk =  $slideItems.eq(index).find(".img_bk");
        var $txt = $slideItems.eq(index).find(".txt");

        $imgBk.show();
        $txt.css({
            left: "-100%"
        });

        $slideBody.stop().animate({
            top: - index * 100 + "%"
        },600,"easeOutQuad",function(){
            $imgBk.fadeOut(3000);
            $txt.stop().delay(2000).animate({
                left:0
            },900,"easeOutBack")
        });
    }

    function autoStart(){
        if(timerID == 0){
            timerID = setInterval(function(){
                current += 1;
                if(current > $slideItems.length - 1){
                    current = 0
                }
                nextSlide(current)
            },6000)
        }
    }

    initSlide();
    nextSlide(0);
    autoStart();
}

function rolling_banner(){
    var timerID = 0;

    function nextBanner(){
        $(".left").stop().animate({
            marginTop : -800
        },function(){
            $(".left ul li:first-child").appendTo($(".left ul"))
            $(this).css("marginTop",0)
        })

        $(".right").stop().delay(1000).animate({
            marginTop : -800
        },function(){
            $(".right ul li:first-child").appendTo($(".right ul"))
            $(this).css("marginTop",0)
        })
    }

    function autoStart(){
        if(timerID == 0){
            timerID = setInterval(function(){
                nextBanner();
            },5000)
        }
    }

    autoStart()
}
