(async () => {
    $(".scroller").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
        variableWidth: true,
    });

    $(".filtro").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        variableWidth: true,
    });
})();