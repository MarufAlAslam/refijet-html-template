// Initialize the slider
$('.continuous-slider').slick({
    slidesToShow: 12,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    infinite: true,
    speed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 8
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});