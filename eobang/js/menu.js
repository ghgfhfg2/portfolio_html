$(function(){
	//gnb lnb
    var page   = $navi.split("_");
    var depth1 = page[0] - 1;
    var depth2 = page[1] - 1;
    var depth3 = page[2] - 1;
        
    var sub1   = depth1 + 1;
    var sub2   = depth2 + 1;
    var sub3   = depth3 + 1;

	var mGnbD1   = $('.mb_gnb > ul > li:eq(' + depth1 + ')');
	var mGnbD2   = $('.mb_gnb > ul > li:eq(' + depth1 + ') > ul > li:eq(' + depth2 + ')');
	var mGnbD3   = $('.mb_gnb > ul > li:eq(' + depth1 + ') > ul > li:eq(' + depth2 + ') > ul > li:eq(' + depth3 + ')');
	var lnbD1   = $('#lnb > li:eq(' + depth2 + ')');
	var lnbD2   = $('#lnb > li:eq(' + depth2 + ') > ul > li:eq(' + depth3 + ')');
        
    if (page[1] != 0) {
		mGnbD1.addClass('open');
		mGnbD2.addClass('open');
		mGnbD3.addClass('on');
		lnbD1.addClass('open');
		lnbD2.addClass('on');
    }
	$('.mb_gnb > ul > li.open > ul').css('display','block');
	$('.mb_gnb > ul > li > ul > li.open > ul').css('display','block');
	$('#lnb > li.open > ul').css('display','block');
	
});

$(function(){

	
	/* pc메뉴 */
	$(".gnb-linker").each(function(){
		$('.gnb_sub').hide();
		var image = $(this).find("img");
		var imgsrc = $(image).attr("src");
		$(".gnb-linker").on("focusin", function(){
			var off = imgsrc.replace (/_on/,"_off");
			$(image).attr("src",off);
		});
		$(this).on("mouseover focusin", function(){
			var on = imgsrc.replace (/_off/,"_on");
			$(image).attr("src",on);
			$(".gnb_sub").hide();
			$(this).siblings("div").stop(true,true).show();
			return false;
		}).on('mouseleave',function(){
			var off = imgsrc.replace (/_on/,"_off");
			$(image).attr("src",off);
			$(".gnb > li > div").hide();
			return false;
		});
		
		$('+.gnb_sub',this).on("mouseover focusin", function(){
			var on = imgsrc.replace (/_off/,"_on");
			$(image).attr("src",on);
			$(this).show();
		}).on('mouseleave',function(){
			var off = imgsrc.replace (/_on/,"_off");
			$(image).attr("src",off);
			$(".gnb > li > div").hide();
			return false;
		});
		$('*:not(".gnb a")').focus(function(){
			var off = imgsrc.replace (/_on/,"_off");
			$(image).attr("src",off);
			$(".gnb > li > div").hide();
		});
	});
	
	
	/* 모바일메뉴, lnb메뉴 */
	$('.mb_gnb li.has-sub>a, #lnb li.has-sub>a').on('click', function(){
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

	//$('.mb_gnb>ul>li.has-sub>a').append('<span class="holder"></span>');
	
	//전체메뉴
	jQuery(".btn_menu_total > a").on('click', function() {
		jQuery('.total_menu').show();
		jQuery('.total_menu .total_bottom a').on('click', function() {
			jQuery('.total_menu').hide();
			return false;
		});
		return false;
	});

	//모바일 좌측에서 우측으로 이동
	$(".btn_menu").on('touchend click', function() {
		$(".mbSideMenu").stop().animate( { left: "0" }, 200, 'easeOutExpo' ).after('<div class="fix_bg"></div>');
		$("#wrapper").addClass("wra_box");
		$(".btn_mb_close").on('touchstart click', function() {
			$(".fix_bg").remove();
			$(".mbSideMenu").stop().animate( { left: "-290px" }, 100, 'easeOutExpo' );
			$(".wra_box").removeClass("wra_box");
			return false;
		});
	});

	//상단검색 열기
	jQuery(".btn_search > a").on('click', function() {
		jQuery('.topSearch').slideToggle('fast');
		jQuery(this).toggleClass('btnClose');
		return false;
	});

	


	/*$(window).resize(function(){
		var width = parseInt($(this).width());
		//$("#wrapper").text(width);
		if (width<1100) {
			$("#gnb").removeClass('pc_gnb');
			$("#gnb").addClass('mb_gnb');
			$('.mb_gnb').stop();
		} else if (width>1100) {
			$("#gnb").removeClass('mb_gnb');
			$("#gnb").addClass('pc_gnb');
			$('.mb_gnb').stop();
		}
	}).resize();*/
});
