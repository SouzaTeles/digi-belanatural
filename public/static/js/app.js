$(document).ready(function(){
    $('.header__nav ul li a').on('click', function(){
        var selector = this.dataset.href;
        $("html, body").animate({
            scrollTop: $(selector).offset().top - 130
        }, 800, 'easeInOutExpo');
    })
    $('#phone').mask('(99) 99999-9999')

    $('#lightslider').lightSlider({
        item: 1,
        loop: true,
        slideMargin: 0,
    });

})