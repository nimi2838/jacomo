function SliderType1__init() {
  var swiper = new Swiper('.slider-type-1 > .swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.slider-type-1 .swiper-pagination',
      clickable: true,
    },
  });
}

SliderType1__init();




// 비디오 팝업으로 나타나게 하기


// 첫번째 영상

$('.btn-show-video-1').click(function() {
  var iframe = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/gxPldjbx-2w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  
  $('.video-popup > .video-wrap').empty().append(iframe); 
  
  $('.video-popup').show();
});

$('.video-popup .btn-close').click(function() {
  $('.video-popup > .video-wrap').empty();
  $('.video-popup').hide();
});


// 두번째
$('.btn-show-video-2').click(function() {
  var iframe = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/u4fOrVLtCk4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  
  $('.video-popup > .video-wrap').empty().append(iframe); 
  
  $('.video-popup').show();
});

$('.video-popup .btn-close').click(function() {
  $('.video-popup > .video-wrap').empty();
  $('.video-popup').hide();
});


// 세번째 영상
$('.btn-show-video-3').click(function() {
  var iframe = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/TlzZX0VTWWc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  
  $('.video-popup > .video-wrap').empty().append(iframe); 
  
  $('.video-popup').show();
});

$('.video-popup .btn-close').click(function() {
  $('.video-popup > .video-wrap').empty();
  $('.video-popup').hide();
});


// 네번째 영상
$('.btn-show-video-4').click(function() {
  var iframe = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dSlFS74n3Zk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  
  $('.video-popup > .video-wrap').empty().append(iframe); 
  
  $('.video-popup').show();
});

$('.video-popup .btn-close').click(function() {
  $('.video-popup > .video-wrap').empty();
  $('.video-popup').hide();
});


// 다섯번째 영상
$('.btn-show-video-5').click(function() {
  var iframe = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/_xFrHqE_3io" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  
  $('.video-popup > .video-wrap').empty().append(iframe); 
  
  $('.video-popup').show();
});

$('.video-popup .btn-close').click(function() {
  $('.video-popup > .video-wrap').empty();
  $('.video-popup').hide();
});

// 자존심 슬라이더

function MySliderBox1__init() {
  var swiper = new Swiper('.my-slider-box-1 .swiper-container', {
    spaceBetween: 9,
    breakpoints: {
      1199: {
        slidesPerView: 2.1
      },
      767: {
        slidesPerView: 2.1
      }
    }, 
    slidesPerView : 1.1,
    scrollbar: {
      el: '.my-slider-box-1 .swiper-scrollbar',
      draggable: true,
    },
    navigation: {
      nextEl: '.my-slider-box-1 .button-next',
      prevEl: '.my-slider-box-1 .button-prev',
    },
    initialSlide : 0,
  });
}

MySliderBox1__init();
