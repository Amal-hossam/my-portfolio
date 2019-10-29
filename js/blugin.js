$(document).ready(function () {

    //nice scroll

    $("Html").niceScroll();

    $(".carousel").carousel({
        interval: 2500
    });
    //navbar
});
    var scroll_start = 0;
    var startChange = $('.header-info');
    var offset = startChange.offset();
    if (startChange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-default").css('background', 'rgb(97, 48, 93 ');
            } else {
                $(".navbar-default").css('background', 'transparent');

            }
        });
    }
    // closed collapse when selected item
    $('.navbar-collapse').click('li', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //js typed
    if ($('.element').length) {
        $('.element').each(function () {
            $(this).typed({
                strings: [$(this).data('text1'), $(this).data('text2')],
                loop: $(this).data('loop') ? $(this).data('loop') : false,
                backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 500,
                typeSpeed: 150,
            });
        });
    }


    //counter


    function countUp() {
        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
              Counter: $(this).text()
            }, {
              duration: 4000,
              easing: 'swing',
              step: function(now) {
                $(this).text(Math.ceil(now));
              }
            });
          });
        }
        $(function() {
          "user strict";
          var bAnimate = true;
          $(".count").css ("opacity", "0.0");
          
          $(window).scroll(function() {
            // console.log("scroll top=" + $(this).scrollTop());
            // console.log("div offset top=" + $("div").offset().top);
            var scrolling = $(this).scrollTop(),
              divoffset = $(".count").offset().top,
              screenBottom = scrolling + $(window).height(), 
              elemBottom = divoffset + $(".count").outerHeight (); // 
            if (screenBottom > elemBottom) {
              if (bAnimate) {
                 $(".count").css ("opacity", "1.0");
                countUp();
                bAnimate = false;
              }
            }
          })
        })

        
        $(window).scroll(function(){
            let scrollTop = $(window).scrollTop();
            if(scrollTop >1500){
                $("#btnUp").fadeIn(500);
            }else{
                $("#btnUp").fadeOut(500);
            }
            })
            $("#btnUp").click(function(){
                $("body,html").animate({"scrollTop":0},1000);
            })
            
            /***smoth scroll on links on navs */
            $("nav a, .home-down").click(function(){
                let aHref =$(this).attr("href");
                let offsett=$(aHref).offset().top;
                $("body, html").animate({scrollTop:offsett},1000);
            })
            
            /***loadingscreen */
            $(window).ready(function(){
                $("#loadingS").fadeOut(2000,function(){
                    $("body").css("overflow","auto");
                })
            })

