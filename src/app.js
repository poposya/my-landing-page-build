import './styles/main.scss';
import './libs/owl-carousel/dist/owl.carousel.min';

$('.owl-carousel').owlCarousel({
    animateOut: 'zoomOutLeft',
    animateIn: 'zoomInRight',
    items:1,
    margin:30,
    loop: false,
    nav: false,
    slideTransition: 'ease-in-out',
    dots: false,
    stagePadding:30,
    smartSpeed:450
});
