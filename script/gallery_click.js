$(function(){
    $('.gallery .swiper-pagination-bullet').click(function(){
        $(this).animate({
            'height':'250px',
            'opacity':'1'
        });
        $(this).siblings().animate({
            'height':'23px',
            
        });
    });
});