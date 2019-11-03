// Animation menu switcher lines

const menu_switcher_icon_open = $('.menu-switcher_icon_open');
const menu_switcher_icon_close = $('.menu-switcher_icon_close');

menu_switcher_icon_open.mouseover(() => {
    $('.menu-switcher_icon_line').each((i, line) => {
        $(line).addClass('full-width');
    })
});
menu_switcher_icon_open.mouseout(() => {
    $('.menu-switcher_icon_line').each((i, line) => {
        $(line).removeClass('full-width');
    })
});

menu_switcher_icon_open.click(() => {
    $('.navigation-popup').velocity({
        display: 'flex',
        opacity: '1'
    }, {
        duration: 400
    });

    $('.navigation-popup_list_item').each((i, elem) => {
        $(elem).velocity({
            transform: ["translateY(0)", "translateY(200px)"],
            opacity: ["1", "0"]
        }, {duration: 200, easing: "ease-in-out"});
    });
});

menu_switcher_icon_close.click(() => {
    $('.navigation-popup_list_item').each((i, elem) => {
        $(elem).velocity({
            transform: ["translateY(200px)", "translateY(0)"],
            opacity: '0'
        }, {duration: 100, easing: "ease-in-out"});
    });

    $('.navigation-popup').velocity({
        display: 'none',
        opacity: '0',
    },{
        duration: 400,
        delay: 400,
    });
});


// Animation activities blocks on hover

$('.activities_block_column').hover(function() {
    $(this).addClass('activities_block-bordo');
}, function() {
    $(this).removeClass('activities_block-bordo');
});
