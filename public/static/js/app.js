$(document).ready(function(){
    $('.header__nav ul li a').on('click', function(){
        var selector = this.dataset.href;
        $("html, body").animate({
            scrollTop: $(selector).offset().top - 130
        }, 800, 'easeInOutExpo');
    })
})