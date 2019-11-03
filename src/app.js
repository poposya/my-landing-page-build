import './styles/index.scss';
import "velocity-animate/velocity.ui.min.js";
import "./js/form.js";
import "./js/main.js";


const $animation_elements = $('.fadeInAnimate');
const $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


$("a[href^='#']").click(function(e) {
    e.preventDefault();

    if (e.target.href.includes('#callback')) {
        $('.navigation-popup').velocity({
            display: 'none',
            opacity: '0'
        });
    }

    const position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    }, 500 /* speed */ );
});
