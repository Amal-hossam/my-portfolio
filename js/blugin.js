$(document).ready(function () {

    //nice scroll

    $("Html").niceScroll();

    $(".carousel").carousel({
        interval: 2500
    });
    //navbar

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


    $(function () {
        function isScrolledIntoView($elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        function count($this) {
            var current = parseInt($this.html(), 10);
            if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
                $this.html(++current);
                $this.data("isCounting", true);
                setTimeout(function () {
                    $this.data("isCounting", false);
                    count($this);
                }, 50);
            }
        }

        $(".c-count").each(function () {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            $(this).data("isCounting", false);
        });

        function startCount() {
            $(".c-count").each(function () {
                count($(this));
            });
        };

        $(window).scroll(function () {
            startCount();
        });

        startCount();
    });

});
