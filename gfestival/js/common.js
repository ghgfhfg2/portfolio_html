jQuery(function(){

	//탭메뉴
	$(".gj_tab_con").hide(); 
	$("ul.gj_tab_menu li a:first").addClass("on").show();
	$(".gj_tab_con:first").show(); 
	$("ul.gj_tab_menu li a").click(function() {
			$("ul.gj_tab_menu li a").removeClass("on");
			$(this).addClass("on"); 
			$(".gj_tab_con").hide(); 
			var activeTab = $(this).attr("href");
			$(activeTab).show(); 
		return false;
	});

	//탭메뉴2
	$(".gj_tab_con2").css({"visibility":"hidden","height":"0","overflow":"hidden"}); 
	$("ul.gj_tab_menu2 li a:first").addClass("on").show();
	$(".gj_tab_con2:first").css({"visibility":"visible","height":"auto"}); 
	$("ul.gj_tab_menu2 li a").click(function() {
			$("ul.gj_tab_menu2 li a").removeClass("on");
			$(this).addClass("on"); 
			$(".gj_tab_con2").css({"visibility":"hidden","height":"0","overflow":"hidden"}); 
			var activeTab = $(this).attr("href");
			$(activeTab).css({"visibility":"visible","height":"auto"}); 
		return false;
	});

	//셀렉트 바로가기
	$(".mb_tab").each(function(){
		var mbstr = $("ul li a.on",this).html();
		$(".selet_txt",this).html(mbstr);
		$(".selet_txt",this).click(function(){
			$("+ul",this).slideToggle("fast");
			$(this).toggleClass("on");
			//모바일일때 한페이지 이동시
			$("+ul li a",this).click(function(){
				var mbstr2 = $(this).html();
				$(this).parent().parent().siblings('.selet_txt').html(mbstr2);
				$(this).parent().parent().hide();
				$(".selet_txt").removeClass('on');
				return false;
			});
			return false;
		});
	});

	//상단검색 열기
	$(".btnSearch, .pc_btnSearch").click(function(){
		$(".topSearch").slideToggle('fast');
		$(this).toggleClass('on');
		return false;
	});

	//공통펼침
	$(".openBtn button").on('click', function() {
		$('#openView').slideToggle('fast');
		$(this).toggleClass('on');
	});
	
	//하단 위로가기
	$('.botBtTop button').click(function(e){
		$('html, body').animate({scrollTop:0},300,'easeInOutExpo');
		return false;
	});

	//테블릿 모바일 탑이동
	$(window).scroll(function () {
		if($(document).scrollTop()>150){ 
			$('.botBtTop').fadeIn(); 
		}else {
			$('.botBtTop').fadeOut();
		}
	});

	//사진 슬라이드
	var $mvSlide = $('.slideBox');
	var $slidContr = $mvSlide.find('.control');
	var mvSlider = $('.slidePhoto').bxSlider({
		auto: false,
		autoHover:true,
		pause : 4000,
		easing: 'easeOutCubic',
		controls: false,
		pager : false
	});
	
	$slidContr.find('.next-slide').on( 'click', function () {
		mvSlider.goToNextSlide();
		mvSlider.stopAuto();
	});
	$slidContr.find( '.prev-slide' ).on( 'click', function () {
		mvSlider.goToPrevSlide();
		mvSlider.stopAuto();
	});

	//클라우드펀딩
	$('.listWrap li').on('mouseenter focusin',function(){
		$(this).find('.msk').addClass('on');
	});
	$('.listWrap li').on('mouseleave focusout',function(){
		$(this).find('.msk').removeClass('on');
	});

	$('.shareBox .btnShare, .cloudView .btn_share').on('click',function(){
		$(this).toggleClass('on');
		if($(this).parent().find('.btnSns').hasClass('on')){
		$(this).parent().find('.btnSns').removeClass('on');
		$(this).parent().find('.btnSns').addClass('off');
	}else{
		$(this).parent().find('.btnSns').addClass('on');
		$(this).parent().find('.btnSns').removeClass('off');
	}
		return false;
	});



	/* 댓글삭제 */
	$('.replyCon .btnDel').on('click',function(){
		$('.replyDel').fadeIn(300);
		return false;
	});
	$('.replyDelBg, .passwordBox a').on('click',function(){
		$('.replyDel').fadeOut(300);
		return false;
	});




});




