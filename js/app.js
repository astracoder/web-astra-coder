//Menu mobile
$(function() {
    $('.showcase-top-menu-mobile i').click(function() {
        $('.showcase-top-menu-mobile').find('ul').slideToggle();
    })
})

//Inicialize AOS
AOS.init();

/*Scroll*/ 
$(function() {
    $('nav a').click(function() {
        let href = $(this).attr('href');
        let offSetTop = $(href).offset().top;

        $('html, body').animate({
            scrollTop: offSetTop
        }, 1500)
    })
})

/*Call*/

/*Rest*/ 