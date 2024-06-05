jQuery(function(){

/* 메인비주얼 */
	var $mVisualSlide = $('.mainVisual');
	var $visContr = $mVisualSlide.find('.control');
	var visSlider = $('.bgSlide').bxSlider({
		mode:'fade',
		auto: true,
		pause: 10000,
		easing: 'easeOutCubic',
		controls: false,
		autoHover: false,
		pager : true,
	});

	$visContr.find( '.stop-slide' ).on( 'click', function () {
		visSlider.stopAuto();
		$(this).hide().next().show().focus();
	});
	$visContr.find( '.start-slide' ).on( 'click', function () {
		visSlider.startAuto();
		$(this).hide().prev().show().focus();
	});

	$('.mainVisual .bx-pager').append($('.mainVisual .control'));


/* 공지사항 */
	var $mNoticelSlide = $('.mNotice');
	var $notContr = $mNoticelSlide.find('.control');
	var notSlider = $('.noticeSlide').bxSlider({
		//mode:'fade',
		auto: false,
		pause: 5000,
		slideWidth: 420,
		minSlides: 1,
		maxSlides: 2,
		moveSlides: 1,
		easing: 'easeOutCubic',
		controls: false,
		autoHover: false,
		pager : false,
	});
	$notContr.find('.next-slide').on( 'click', function () {
		notSlider.goToNextSlide();
	});
	$notContr.find( '.prev-slide' ).on( 'click', function () {
		notSlider.goToPrevSlide();
	});


/* 사업안내 */
	$('.division li').on('mouseenter focusin', function(){
		$('.division li').removeClass('on');
		$(this).addClass('on');
	});
	$('.division li').on('mouseleave', function(){
		$(this).removeClass('on');
	});
	$('.mNotice .control .next-slide, .mConBox2_1').on('focusin', function(){
		$('.division li').removeClass('on');
	});	


/* 고객센터 */
	$('.mConBox2_1, .mConBox2_2').on('mouseenter focusin', function(){
		$('.mConBox2_1, .mConBox2_2').removeClass('on');
		$(this).addClass('on');
	});
	$('.mConBox2_1, .mConBox2_2').on('mouseleave', function(){
		$(this).removeClass('on');
	});
	$('.division li.bg03, .mConBox2_3 .control a').on('focusin', function(){
		$('.mConBox2_1, .mConBox2_2').removeClass('on');
	});	


/* 쇼핑슬라이드 */
	var $mShopSlide = $('.mConBox2_3');
	var $shopContr = $mShopSlide.find('.control');
	var shopSlider = $('.shopSlide').bxSlider({
		//mode:'fade',
		auto: false,
		pause: 5000,
		slideWidth: 281,
		minSlides: 1,
		maxSlides: 2,
		moveSlides: 1,
		easing: 'easeOutCubic',
		controls: false,
		autoHover: false,
		pager : false,
	});
	$shopContr.find('.next-slide').on( 'click', function () {
		shopSlider.goToNextSlide();
	});
	$shopContr.find( '.prev-slide' ).on( 'click', function () {
		shopSlider.goToPrevSlide();
	});	



});


