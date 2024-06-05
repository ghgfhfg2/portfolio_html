
$(function(){


/* 포탈pc메뉴 */
function overGNB(){
		//$('[id^=gnb2th_]').attr('class','gnbsingle');
	var gnbMM = $(this).attr('id');
	var gnbHeight = "H"+gnbMM;
	$('.gnb_Bg').show();
	$('.gnbsingle').hide();
	$('.action').removeClass();
	$(this).children().show();
	if (gnbHeight == "Hmenu_1"){
		$('#menu_1>a').addClass('action');
		$('.gnb_Bg').stop().animate({height:"265px"},200, 'easeOutExpo');
	} else if (gnbHeight == "Hmenu_2"){
		$('#menu_2>a').addClass('action');
		$('.gnb_Bg').stop().animate({height:"265px"},200, 'easeOutExpo');
	} else if (gnbHeight == "Hmenu_3"){
		$('#menu_3>a').addClass('action');
		$('.gnb_Bg').stop().animate({height:"265px"},200, 'easeOutExpo');
	} else if (gnbHeight == "Hmenu_4"){
		$('#menu_4>a').addClass('action');
		$('.gnb_Bg').stop().animate({height:"265px"},200, 'easeOutExpo');
	} else if (gnbHeight == "Hmenu_5"){
		$('#menu_5>a').addClass('action');
		$('.gnb_Bg').stop().animate({height:"265px"},200, 'easeOutExpo');
	} else if (gnbHeight == "Hmenu_6"){
		$('#menu_6>a').addClass('action');
		$('.gnb_Bg').stop().animate({height:"265px"},200, 'easeOutExpo');
	} 
		
}
function closeGnb(){
	$('.gnb_Bg').stop().animate({height:"0"},300, 'easeOutExpo').hide();
	$('.gnbsingle').slideUp(100, 'easeOutExpo');
	$('.action').removeClass();
	$('.gnbsingle > .part_link > ul').hide();
}


function nofunction(){
}

function jgMenu(){
	$('[id^=menu_]').hover(overGNB,nofunction);
	$('#gnbArea').hover(nofunction,closeGnb);
	$('[id^=menu_] > a').keyup(function(){
		var mid = $(this).parent().attr('id');
		$('#'+mid).mouseover();
	});
	$('.btnSearch').keyup(nofunction,closeGnb);
	
	//분야별 정보메뉴 2차메뉴
	$('.gnbsingle > .part_link > li > a').on('mouseenter focusin', function () {
		$('.part_link > li > a').removeClass("on");
		$(this).addClass("on");
		$('.part_link > li > ul').hide();
		$('+ul',this).show();
		
		var gnbSmenu = $('.gnbsingle > .part_link > li > a');
		gnbSmenu.on('mouseenter focusin', function () {
			$('#gnb_Bg').removeClass('on');
		});
        return false;
    });
}

$( document ).ready(jgMenu);

/*
	function overGnb(){
			$('#gnb .depth02').show();
			$('.totalM_on_bg').show();
			$('.totalM_bg').stop().slideDown(200, 'easeOutExpo');
	};
	function closeGnb(){
			$('#gnb .depth02').hide();
			$('.totalM_on_bg').hide();
			$('.totalM_bg').stop().slideUp(200, 'easeOutExpo');	
	};
	function nofunction(){
	};

	$('#gnb .depth01 > li').hover(overGnb,nofunction);
	$('#gnb').hover(nofunction,closeGnb);
	$('.totalM_bg').focusin(nofunction,closeGnb);
	$('#gnb .depth01 > li > a').keyup(function(){
		$('#gnb .depth01 > li').mouseenter();	
	});
	$('.sitemap').on('focusin', function(){
		closeGnb();
	});

	 $('#gnb .depth01 > li').on('mouseenter',function(){
		var navL = $(this).offset().left;
		var navW = $(this).find('a').width();
		$('#header .menuBar').show().css({width:navW}).stop().animate({left:navL},300, 'easeOutBack')
	});
	 $('#gnb .depth01 > li').on('mouseleave',function(){
	 	$('#header .menuBar').hide();
	 });
	*/
	 

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


	//전체메뉴
	$(".btnTotalMenu").on('click', function() {
		$("#total_m_lay").slideDown('fast');
		$("#total_m_lay .btnClose").click(function(){
				$("#total_m_lay").slideUp('fast');
		});
		return false;
	});	 

	//모바일 우측에서 좌측으로 이동
	$(".btn_total_menu").click(function(){
		//$(".btnCategory").hide();
		$(".fix_bg").show();
		$(".top_link").stop().animate( { right: "0" }, 200, 'easeOutExpo' );
		$("#total_m_lay").stop().animate( { right: "0" }, 200, 'easeOutExpo' );
		$("#total_m_lay").after('<div class="btnMenuClose"><a href="#">닫기</a></div>').show();
		$(".fix_bg, .btnMenuClose").click(function(){
			//$(".btnCategory").show();
			$(".btnMenuClose").remove();
			$(".top_link").stop().animate( { right: "-230px" }, 100, 'easeOutExpo' );
			$("#total_m_lay").stop().animate( { right: "-230px" }, 100, 'easeOutExpo' );
				$(".fix_bg").hide();
			});
			return false;
		});
		return false;
	});


	/* 왼쪽메뉴 */


$(window).load(function(){
	var winW = $(window).width();
	if(winW > 640){
		$('#lnb > ul > li.has-sub').on('mouseenter focusin', function(){
			$('#lnb > ul > li.has-sub').removeClass('on');
			$(this).addClass('on');
		});
		$('#lnb > ul > li.has-sub').on('mouseleave', function(){
			$(this).removeClass('on');
		});
		$('#lnb > ul > li.has-sub > a').on('click', function(){
			return false;
		});
		$('#lnb .home, .subContent').on('focusin', function(){
			$('#lnb > ul > li.has-sub').removeClass('on');
		});
		$('.subContent').on('click', function(){
			$('#lnb > ul > li.has-sub').removeClass('on');
		});

	}

});


	/* 쇼핑 */
	$('.shopingViewBox .plus').on('click', function(){
		var amount = $('.shopingViewBox .amountText').val();
		++amount;
		$('.shopingViewBox .amountText').val(amount);
		return false;
	});
	$('.shopingViewBox .minus').on('click', function(){
		var amount = $('.shopingViewBox .amountText').val();
		if(amount > 1){
		--amount;
		}
		$('.shopingViewBox .amountText').val(amount);
		return false;
	});


	//탭메뉴
	$(".cat_tab_con").hide(); 
	$("ul.cat_tab_menu li a:first").addClass("on").show();
	$(".cat_tab_con:first").show(); 
	$("ul.cat_tab_menu li a").click(function() {
			$("ul.cat_tab_menu li a").removeClass("on");
			$(this).addClass("on"); 
			$(".cat_tab_con").hide(); 
			var activeTab = $(this).attr("href");
			$(activeTab).show(); 
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
			});
			return false;
		});
	});

$(window).on('load resize', function(){
	if($(this).width() < 680){		
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$('#header').addClass('fix');
		}else{
			$('#header').removeClass('fix');
		}
	});
	}
});
	

	});