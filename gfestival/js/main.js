jQuery(function(){

	$('#conFullPage').fullpage({
		verticalCentered: true, //콘텐츠 중앙정렬
		anchors: ['firstPage', 'secondPage', '3rdPage', 'endPage'],
		menu: '.mConMenu',
		css3: true,
		scrollBar: false,
		responsiveWidth: 1200,
		onLeave: function(index, nextIndex, direction){		
			$('#footer').on('focusin', function(){
				$('#footer').addClass('on');
			});
			$('#footer').on('focusout', function(){
				$('#footer').removeClass('on');
			});
			if(index == 3 && direction =='down'){				
				$('#footer').addClass('on');
			}else if(index == 4 && direction == 'up'){		
				$('#footer').removeClass('on');
			}	
		},
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.mConBox_1 .searchBox, .mSearchWrap .keyword').addClass('aniFadeLeft');
			}else{
				$('.mConBox_1 .searchBox, .mSearchWrap .keyword').removeClass('aniFadeLeft');
			}
			if(index == 2){
function regExp(str){  
  var reg = /\달\성/gi
  return str.replace(reg, "");    
}
	$('.listWrap li').each(function(){
	var percent = $(this).find('.percentBox').text();
	var percentCost = regExp(percent);
	percentCost = percentCost.trim();
	$(this).find('.percentBox img').animate({'width':percentCost},1000,'easeOutCubic');
	});
}else{
	$('.mConBox_2_4 .percentBox img').css('width','0');
}
			if(index == 4){				
				$('#footer').addClass('on');
			}
		}
	});
	/*
	$('.mConMenu a').on('click', function(){
		var wScroll = $($(this).attr('href')).offset().top;
		$('html body').stop().animate({scrollTop:wScroll},300,'easeInOutExpo');
		return false;
	});
	*/

$(window).scroll(function(){
	var winTop = $(this).scrollTop();
	var head = $('#header');
	
	if(winTop > 0){
		head.addClass('on')
	}else{
		head.removeClass('on')
	}
});

	
$(window).load(function(){
	var winH = $(window).height();
	$('.mLeftQuick').css('height',winH);	
})


	$('.btnTop').click(function(e){
		$('html, body').animate({scrollTop:0},300,'easeInOutExpo');
		return false;
	});


	//팝업레이어 슬라이드
	var $mpopSlide2 = $('.mConBox_pop');
	var $slidContr04 = $mpopSlide2.find('.control');
	var closeBtn = $mpopSlide2.find('.closeBtn');
	var mpopSlider2 = $('.popSlide').bxSlider({
		auto: true,
		autoHover:true,
		pause : 4000,
		//infiniteLoop: false,
		//touchEnabled:false,
		//pagerCustom: '#bx-pager',
		easing: 'easeOutCubic',
		controls: false,
		pager : false
	});
	$slidContr04.find('.next-slide').on( 'click', function () {
		mpopSlider2.goToNextSlide();
		mpopSlider2.stopAuto();
		$slidContr04.find('.stop-slide').hide().next().show();
	});
	$slidContr04.find( '.prev-slide' ).on( 'click', function () {
		mpopSlider2.goToPrevSlide();
		mpopSlider2.startAuto();
		$slidContr04.find('.stop-slide').hide().next().show();
	});
	$slidContr04.find( '.stop-slide' ).on( 'click', function () {
		mpopSlider2.stopAuto();
		$(this).hide().next().show().focus();
	});
	$slidContr04.find( '.start-slide' ).on( 'click', function () {
		mpopSlider2.startAuto();
		$(this).hide().prev().show().focus();
	});
	closeBtn.on('click', function(){
		$mpopSlide2.fadeOut(200);
	})



/* 메인 비주얼 

		$('.mVisual_wrap').addClass('visualSlide');
		$('.mConBox_1').css('height',$(window).height());
		var mConH = $(window).height();
		var mHeadH = $('#header').height();
		var mHNewsH = $('.hotNewsWrap').height();
		var mVisH = mConH - mHeadH - mHNewsH;
		$('.mVisual_wrap li').css('height',mVisH);

	//상단비주얼 슬라이드
	var $mvSlide = $('.mConBox_1');
	var $slidContr = $mvSlide.find('.control');
	var mvSlider = $('.visualSlide').bxSlider({
		auto: false,
		autoHover:true,
		pause : 4000,
		//infiniteLoop: false,
		//touchEnabled:false,
		//pagerCustom: '#bx-pager',
		easing: 'easeOutCubic',
		controls: false,
		pager : true
	});
*/				

	var mVisual = $('.mVisual_wrap > li');	
	mVisual.on('mouseenter focusin', function(){
		mVisual.removeClass('on').addClass('off');
		$(this).removeClass('off').addClass('on');
	})
	mVisual.on('mouseleave focusout', function(){
		mVisual.removeClass('on').removeClass('off');
	});		
	$('.mVisual_wrap').removeClass('visualSlide');
		




$(window).resize(function(){
	if($(this).width() > 640){
	setTimeout(function () {
	var winH = $(window).height();
	$('.mLeftQuick').css('height',winH);	
    }, 250);
	}
})



	//핫뉴스 슬라이드
	var $mhSlide = $('.hotNewsBox');
	var $slidContr02 = $mhSlide.find('.control');
	var mhSlider = $('.hotSlide').bxSlider({
		mode: 'vertical',
		auto: true,
		//autoHover:true,
		pause : 4000,
		easing: 'easeOutCubic',
		controls: false,
		pager : false
	});

	$slidContr02.find('.next-slide').on( 'click', function () {
		mhSlider.goToNextSlide();
		mhSlider.stopAuto();
		$slidContr02.find('.stop-slide').hide().next().show();
	});
	$slidContr02.find( '.prev-slide' ).on( 'click', function () {
		mhSlider.goToPrevSlide();
		mhSlider.startAuto();
		$slidContr02.find('.stop-slide').hide().next().show();
	});
	$slidContr02.find( '.stop-slide' ).on( 'click', function () {
		mhSlider.stopAuto();
		$(this).hide().next().show().focus();
	});
	$slidContr02.find( '.start-slide' ).on( 'click', function () {
		mhSlider.startAuto();
		$(this).hide().prev().show().focus();
	});


/* 박스 글넘침 */
	$('.dotdotdot').dotdotdot();


/* 청년꿀팁 슬라이드 */

	var tipSlide = $(".tipSlide");
  tipSlide.slick({
      autoplay: false,
      autoplaySpeed:3000,
      dots: true,
      infinite: true,
      // centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      accessibility: false,      
      pauseOnFocus: false,
			responsive:	[
					{
						breakpoint: 640,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
  });
  $(".tipSlideBox").append($('.tipSlideBox .slick-arrow, .tipSlideBox .slick-dots'))
	function tipOn(){  
  tipSlide.find('.slick-slide').on('mouseenter focusin', function(){
  	$(this).addClass('on');
  })
  tipSlide.find('.slick-slide').on('mouseleave focusout', function(){
  	$(this).removeClass('on');
  });
};
	if($(this).width() > 1280){
	tipOn();
	};

  
	//공지사항
	$('.mtab').each(function(){
		var $tabVew = $('li .mtabView',this);
		$('> li .mtabView',this).hide();
		$('> li:first-child',this).addClass("on");
		$('> li:first-child .mtabView',this).show();
		$('> li > a',this).on("click focusin", function () {
			$(this).parent().parent().find('li').removeClass("on");
			$(this).parent().addClass("on");
			$tabVew.hide();
			$(this).parent().find('.mtabView').show();
			return false;
		});
	});	


	//갤러리 슬라이드
	var $mpopSlide = $('.mConBox_2_2');
	var $slidContr03 = $mpopSlide.find('.control');
	var mpopSlider = $('.gallerySlide').bxSlider({
		auto: true,
		autoHover:true,
		pause : 4000,
		//infiniteLoop: false,
		//touchEnabled:false,
		//pagerCustom: '#bx-pager',
		easing: 'easeOutCubic',
		controls: false,
		pager : false
	});
	$slidContr03.find('.next-slide').on( 'click', function () {
		mpopSlider.goToNextSlide();
		mpopSlider.stopAuto();
	});
	$slidContr03.find( '.prev-slide' ).on( 'click', function () {
		mpopSlider.goToPrevSlide();
		mpopSlider.stopAuto();
	});




	//서비스
	$('.mServiceBox .more').on('click', function(){
		$('.mServiceBox dd').stop().slideUp(300,'easeOutCubic');
		$(this).parent().parent().find('dd').stop().slideDown(300,'easeOutCubic');
		return false;
	})


	//배너 슬라이드
	var $mquiSlide = $('.mConBox_4_2');
	var $slidContr3 = $mquiSlide.find('.control');
	var mquiSlider = $('.mbanSlide').bxSlider({
		auto: true,
		slideWidth: 150,
		minSlides: 1,
		maxSlides: 5,
		moveSlides: 1,
		slideMargin: 35,
		//infiniteLoop: false,
		easing: 'easeOutCubic',
		controls: false,
		pager : false
	});
	$slidContr3.find('.next-slide').on( 'click', function () {
		mquiSlider.goToNextSlide();
		mquiSlider.stopAuto();
		$slidContr3.find('.stop-slide').hide().next().show();
	});
	$slidContr3.find( '.prev-slide' ).on( 'click', function () {
		mquiSlider.goToPrevSlide();
		mquiSlider.startAuto();
		$slidContr3.find('.stop-slide').hide().next().show();
	});
	$slidContr3.find( '.stop-slide' ).on( 'click', function () {
		mquiSlider.stopAuto();
		$(this).hide().next().show().focus();
	});
	$slidContr3.find( '.start-slide' ).on( 'click', function () {
		mquiSlider.startAuto();
		$(this).hide().prev().show().focus();
	});

	//인기검색어 목록
	$('.keyword .searchCtr a').on('click',function(){
		$('.keyword > ul').toggleClass('on');
	})




});


