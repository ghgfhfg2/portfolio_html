//PC상단메뉴



function overGNB(){
	//jQuery('[id^=gnb2th_]').attr('class','gnbsingle');
	var gnbMM = jQuery(this).attr('id');
	var gnbHeight = "H"+gnbMM;	
	var MLeft = $(this).find('a').position().left + 35;
	jQuery('#gnb_Bg').show().addClass('line');
	jQuery('#gnb_bottom_line').show();
	jQuery('.gnb_s').hide();
	jQuery('[id^=gm_] > a').removeClass('on');
	jQuery(this).children().children().show();
	jQuery('#gnb_Bg').stop().animate({height:"216px"},200, 'easeOutExpo')
	if (gnbHeight == "Hgm_1"){
		jQuery('> a',this).addClass('on')
		jQuery('#gnb_bottom_line').stop().animate({left:MLeft-35},200, 'easeOutExpo')
		jQuery('#gnb_bottom_line').css({'width':'90px'})
	} else if (gnbHeight == "Hgm_2"){
		jQuery('> a',this).addClass('on')
		jQuery('#gnb_bottom_line').stop().animate({left:MLeft},200, 'easeOutExpo')	
		jQuery('#gnb_bottom_line').css({'width':'60px'})
	} else if (gnbHeight == "Hgm_3"){
		jQuery('> a',this).addClass('on')
		jQuery('#gnb_bottom_line').stop().animate({left:MLeft},200, 'easeOutExpo')
		jQuery('#gnb_bottom_line').css({'width':'60px'})
	} else if (gnbHeight == "Hgm_4"){
		jQuery('> a',this).addClass('on')
		jQuery('#gnb_bottom_line').stop().animate({left:MLeft},200, 'easeOutExpo')		
		jQuery('#gnb_bottom_line').css({'width':'60px'})	
	} else if (gnbHeight == "Hgm_5"){
		jQuery('> a',this).addClass('on')
		jQuery('#gnb_bottom_line').stop().animate({left:MLeft},200, 'easeOutExpo')	
		jQuery('#gnb_bottom_line').css({'width':'60px'})	
	} else if (gnbHeight == "Hgm_6"){
		jQuery('> a',this).addClass('on')
		jQuery('#gnb_bottom_line').stop().animate({left:MLeft},200, 'easeOutExpo')	
		jQuery('#gnb_bottom_line').css({'width':'60px'})	
	} 
}
function closeGnb(){
	jQuery('#gnb_Bg').stop().animate({height:"0"},200, 'easeOutExpo').removeClass('line');
	jQuery('#gnb_bottom_line').hide();
	jQuery('.gnb_s').hide();
	jQuery('[id^=gm_] > a').removeClass('on');
	jQuery('.gnbsingle > ul > li > ul').hide();
	jQuery('.gnbsingle > ul > li > a').removeClass("on");
}
function nofunction(){
}
jQuery(function(){
	jQuery('[id^=gm_]').hover(overGNB,nofunction);
	jQuery('#gnb').hover(nofunction,closeGnb);
	jQuery('.btnTotalMenu').focusin(nofunction,closeGnb);
	jQuery('[id^=gm_] > a').keyup(function(){
		var mid = jQuery(this).parent().attr('id');
		jQuery('#'+mid).mouseover();
	});
	
	//3차메뉴
	jQuery('.gnbsingle > ul > li > a').on('mouseenter focusin', function () {
		jQuery('.gnbsingle > ul > li > a').removeClass("on");
		jQuery(this).addClass("on");
		jQuery('.gnbsingle > ul > li > ul').hide();
		jQuery('+ul',this).show();
  });
})

$(function(){
	//왼쪽메뉴, 모바일메뉴
	var page   = $navi.split("_");
	var depth1 = page[0] - 1;
	var depth2 = page[1] - 1;
	var depth3 = page[2] - 1;
	//var depth4 = page[3] - 1;
			
	var sub1   = depth1 + 1;
	var sub2   = depth2 + 1;
	var sub3   = depth3 + 1;
	//var sub4   = depth4 + 1;
	
	var GnbD1   = $('.gnb > li:eq(' + depth1 + ')');
	var mGnbD1   = $('.total_m > ul > li:eq(' + depth1 + ')');
	var mGnbD2   = $('.total_m > ul > li:eq(' + depth1 + ') > ul > li:eq(' + depth2 + ')');
	var mGnbD3   = $('.total_m > ul > li:eq(' + depth1 + ') > ul > li:eq(' + depth2 + ') > ul > li:eq(' + depth3 + ')');
	//var mGnbD4   = $('.total_m > ul > li:eq(' + depth1 + ') > ul > li:eq(' + depth2 + ') > ul > li:eq(' + depth3 + ') > ul > li:eq(' + depth4 + ')');
	var lnbD1   = $('#lnb > ul > li:eq(' + depth2 + ')');
	var lnbD2   = $('#lnb > ul > li:eq(' + depth2 + ') > ul > li:eq(' + depth3 + ')');
	//var lnbD3   = $('#lnb > ul > li:eq(' + depth2 + ') > ul > li:eq(' + depth3 + ') > ul > li:eq(' + depth4 + ')');
        
    if (page[1] != 0) {
		GnbD1.addClass('open');
		mGnbD1.addClass('open');
		mGnbD2.addClass('open');
		mGnbD3.addClass('open');
		//mGnbD4.addClass('on');
		lnbD1.addClass('open');
		lnbD2.addClass('open');
		//lnbD3.addClass('on');
    }
	$('.total_m > ul > li.open > ul').css('display','block');
	$('.total_m > ul > li > ul > li.open > ul').css('display','block');
	$('.total_m > ul > li > ul > li > ul > li.open > ul').css('display','block');
	$('#lnb > ul > li.open > ul').css('display','block');
	$('#lnb > ul > li > ul > li.open > ul').css('display','block');
	$('.categoryBox > ul > li.open > ul').css('display','block');
	$('.categoryBox > ul > li > ul > li.open > ul').css('display','block');

	/* 모바일메뉴 / 카테고리 메뉴 */
	$('.total_m li.has-sub>button, .categoryBox li.has-sub>a').on('click', function(){
		//$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp('fast');
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown('fast');
			element.siblings('li').children('ul').slideUp('fast');
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp('fast');
		}
		return false;
	});

	/* 왼쪽메뉴 */
	$('#lnb > ul > li').on('mouseover focusin', function(){
		$('#lnb > ul > li > a').removeClass('on');
		$('#lnb > ul > li > a').addClass('off');
		$('#lnb > ul > li > ul').hide();
		$('>a',this).addClass('on');
		$('>a + ul',this).show();
	}).on('mouseleave', function(){
		$('#lnb > ul > li > a').removeClass('on');
		$('#lnb > ul > li > a').removeClass('off');
		$('#lnb > ul > li > ul').hide();
		$('#lnb > ul > li.open > ul').show();
	});
	
	//전체메뉴
	$(".btnTotalMenu").on('click', function() {
		$("#total_m_lay").slideDown('fast');
		$("#total_m_lay .btnClose").click(function(){
				$("#total_m_lay").slideUp('fast');
		});
		return false;
	});

	//모바일 좌측에서 우측으로 이동
	$(".btnMenu").click(function(){
		//$(".btnCategory").hide();
		$(".fix_bg").show();
		$(".top_link").stop().animate( { left: "0" }, 200, 'easeOutExpo' );
		$("#total_m_lay").stop().animate( { left: "0" }, 200, 'easeOutExpo' );
		$("#wrapper").addClass("wra_box");
		$(".wra_box").stop().animate( { left: "230px" }, 200, 'easeOutExpo' );
		$("#total_m_lay").after('<div class="btnMenuClose"><a href="#">닫기</a></div>').show();
		$(".fix_bg, .btnMenuClose").click(function(){
			//$(".btnCategory").show();
			$(".btnMenuClose").remove();
			$(".top_link").stop().animate( { left: "-230px" }, 100, 'easeOutExpo' );
			$("#total_m_lay").stop().animate( { left: "-230px" }, 100, 'easeOutExpo' );
			$(".wra_box").stop().animate( { left: "0" }, 100, 'easeOutExpo', function() {
				$("#wrapper").removeClass("wra_box");
				$(".fix_bg").hide();
			});
			return false;
		});
		return false;
	});
	
	//카테고리 메뉴 열기
	$(".btnCategory").on('click', function() {
		$("#wrapper").addClass("wra_box");
		$(".categoryBox").stop().animate( { right: "0" }, 100, 'easeOutExpo' );
		$(".categoryBox").after('<div class="fix_bg2"></div><div class="btnCateClose"><a href="#">닫기</a></div>').show();
		$(".btnCateClose, .fix_bg2").click(function(){
				$(".categoryBox").stop().animate( { right: "-240px" }, 100, 'easeOutExpo');
				$(".fix_bg2").remove();
				$(".btnCateClose").remove();
				$("#wrapper").removeClass("wra_box");
				return false;
		});
		return false;
	});

	
});