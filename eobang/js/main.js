jQuery(function(){
	//메인 fullpage


	$('#conFullPage').fullpage({
		verticalCentered: true, //콘텐츠 중앙정렬
		anchors: ['firstPage', 'secondPage', '3rdPage', 'endPage'],
		menu: '.mConMenu',
		easing: 'easeInOutExpo',
		css3: true,
		scrollBar: true,
		responsiveWidth: 1000,
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
				$('.icMouse.btnUp').fadeOut(200);
				$('#section0').find('.tit').delay(100).fadeIn(500);
				$('.mQucik_menu li:nth-child(1)').animate({"bottom":"0px","opacity":"1"},500);
				$('.mQucik_menu li:nth-child(2)').delay(200).animate({"bottom":"0px","opacity":"1"},500);
				$('.mQucik_menu li:nth-child(3)').delay(400).animate({"bottom":"0px","opacity":"1"},500);
			}

			if(index > 1){
				$('.icMouse.btnUp').fadeIn(200);
				$('#section0').find('.tit').hide();
				$('.mQucik_menu li').css({"opacity":"0","bottom":"-50px"});		
			}
			if(index == 2){
				$('.icMouse.btnDown').addClass('on');
				$('.icMouse.btnUp').addClass('on');
				$('.mPopup_wrap').animate({"left":"0px","opacity":"1"},700, 'easeOutCubic');
				$('.mBorad_wrap').animate({"right":"0px","opacity":"1"},700, 'easeOutCubic');
				$('.inforBttomCon').delay(300).animate({"bottom":"0px","opacity":"1"},700, 'easeOutCubic');
			}
			if(index > 2 || index < 2){
				$('.icMouse.btnDown').removeClass('on');
				$('.icMouse.btnUp').removeClass('on');
				$('.mPopup_wrap').css({"opacity":"0","left":"-80px"});
				$('.mBorad_wrap').css({"opacity":"0","right":"-80px"});
				$('.inforBttomCon').css({"opacity":"0","bottom":"-80px"});
			}
			if(index >= 3){	
				$('.mGallery_wrap .mPhoto').animate({"left":"0px","opacity":"1"},700, 'easeOutCubic');
				$('.mGallery_wrap .mVideo').delay(200).animate({"right":"0px","opacity":"1"},700, 'easeOutCubic');
			}
			if(index < 3){		
				$('.mGallery_wrap .mPhoto').css({"opacity":"0","left":"-300px"});
				$('.mGallery_wrap .mVideo').css({"opacity":"0","right":"-300px"});
			}
			if(index == 4){				
				$('#footer').addClass('on');
				$('.icMouse.btnDown').fadeOut(200);
			}
			if(index < 4){
				$('.icMouse.btnDown').fadeIn(200);
			}
		}
	});

	$('.icMouse.btnUp').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionUp();
	});
	$('.icMouse.btnDown').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});



	//배경 슬라이드
	$('.bgSlide').bxSlider({
		mode:'fade',
		auto: true,
		pause: 10000,
		easing: 'easeOutCubic',
		controls: false,
		autoHover: false,
		pager : false,
	});

	//팝업 슬라이드
	var $mpopSlide = $('.mPopup_wrap');
	var $slidContr2 = $mpopSlide.find('.control');
	var popSlider = $('.mPopSlide').bxSlider({
		auto: true,
		pause: 5000,
		easing: 'easeOutCubic',
		controls: false,
		autoHover: true,
		pager : false,
		// pagerType : 'short',

	});
	$slidContr2.find('.next-slide').on( 'click', function () {
		popSlider.goToNextSlide();  
	});
	$slidContr2.find( '.prev-slide' ).on( 'click', function () {
		popSlider.goToPrevSlide();  
	});
	$slidContr2.find( '.stop-slide' ).on( 'click', function () {
		popSlider.stopAuto();
		$(this).hide().next().show().focus();
	});
	$slidContr2.find( '.start-slide' ).on( 'click', function () {
		popSlider.startAuto();
		$(this).hide().prev().show().focus();
	});

	//게시판 텝메뉴
	$('.mNoticeTab > li > a').on("click focusin", function () {
		$('.mNoticeTab > li > a').removeClass("on");
		$(this).addClass("on");
		$('.mNoticeTab .mTabCon').hide();
		$(this).parent().find('.mTabCon').show();
		return false;
	});


	// 축제가이드
	$('.mGuide > li').on('mouseenter focusin' , function(){
		$(this).addClass('on');
	})
	$('.mGuide > li').on('mouseleave focusout' , function(){
		$(this).removeClass('on');
	});

	// 포토갤러리, 동영상
	var mGalleryList = $('.mGallery_wrap > div ul li a');

	mGalleryList.on('mouseenter focusin' , function(){
		$(this).find('.msk').css('opacity','1')
		$(this).find('img').css({"transform":"translate(-50%,-50%) scale(0.9)"})
	});
	mGalleryList.on('mouseleave focusout' , function(){
		$(this).find('.msk').css('opacity','0');
		$(this).find('img').css({"transform":"translate(-50%,-50%) scale(1)"});
	});

	var mGalleryMore = $('.mGallery_wrap .info_box .more');
	mGalleryMore.on('mouseenter focusin' , function(){
		$(this).parent().find('.tit span').addClass('bounce');
	});		
	mGalleryMore.on('mouseleave focusout' , function(){
		$(this).parent().find('.tit span').removeClass('bounce');	
	});



	//하단배너 슬라이드
	var $mbanSlide = $('.bannCon');
	var $slidContr4 = $mbanSlide.find('.control');
	var banSlider = $('.bannerSide').bxSlider({
		auto: true,
		pause: 5000,
		easing: 'easeOutCubic',
		controls: false,
		pager : false,
	});
	$slidContr4.find('.next-slide').on( 'click', function () {
		banSlider.goToNextSlide();
	});
	$slidContr4.find( '.prev-slide' ).on( 'click', function () {
		banSlider.goToPrevSlide();
	});
	$slidContr4.find( '.stop-slide' ).on( 'click', function () {
		banSlider.stopAuto();
		$(this).hide().next().show().focus();
	});
	$slidContr4.find( '.start-slide' ).on( 'click', function () {
		banSlider.startAuto();
		$(this).hide().prev().show().focus();
	});	


});	