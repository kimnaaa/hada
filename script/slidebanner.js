 $(function(){
  var swiper = new Swiper('.slide', {
    speed: 3000,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복

      pagination: {//블릿 버튼
        el: '.slide2 .swiper-pagination',
        clickable: true,
      },
  
      effect: "fade",
    });

 var swiper = new Swiper('.slide2 ', {
    speed: 3000,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복

	    pagination: {//블릿 버튼
        el: '.slide2 .swiper-pagination',
        clickable: true,
      },
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["0%", 0, 0],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });
});