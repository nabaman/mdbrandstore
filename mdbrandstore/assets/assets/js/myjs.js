$("#testimonial-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    nav: false,
    responsiveClass: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true
        },
        600: {
            items: 2,
            nav: false,
            autoplay: true
        },
        1000: {
            items: 3,
            nav: false,
            loop: true,
            autoplay: true
        }
    }
})

document.querySelector('#about2').scrollIntoView({
    behavior: 'smooth'
});


