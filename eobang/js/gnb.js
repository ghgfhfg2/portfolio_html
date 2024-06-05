$(function(){
	function overGNB(){		
		$('#gnb li').find('.depth_wrap').hide();
		$(this).addClass('on');
		$(this).find('.depth_wrap').show();


		$('.result').html($(this).index())
	};
	function closeGnb(){
		$('#gnb li').find('.depth_wrap').hide();
	};
	function nofunction(){
	};

	$(function(){
		$('[id^=gm]').hover(overGNB,nofunction);
		$('[id^=gm]').focusin(overGNB);		
		$('.gnb_wrap').siblings().focusin(closeGnb);		
		$(".gnb_wrap").hover(nofunction,closeGnb);
	});



});