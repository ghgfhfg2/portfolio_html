$(function(){
/* 메인 비주얼 */

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


});
