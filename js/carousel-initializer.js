$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    navText: ['Siguiente','Anterior'],
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})