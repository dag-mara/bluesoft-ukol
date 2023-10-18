import '../css/main.scss';
import { documentReady } from './documentReady';
import $ from '../../node_modules/jquery/dist/jquery.min.js';
//import '../../node_modules/slick-carousel/slick/slick'; 



documentReady(() => {
    //$('.slider-item').slick();
    
    (function () {
        $('.hamburger-wrapper').on('click', function() {
            $('.hamburger-menu').toggleClass('animate');
            $('.mobile-menu-overlay').toggleClass('visible');
        })
        $('.mobile-menu-overlay > ul > li > a').on('click', function () {
            $('.hamburger-menu').removeClass('animate');
            $('.mobile-menu-overlay').removeClass('visible');
        })
    })();
});
