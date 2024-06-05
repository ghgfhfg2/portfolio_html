jQuery(function(){
	// 디데이
	$('#clock').countdown('2017/04/28 00:00:00')
	.on('update.countdown', function(event) {
	  var format = '%H:%M:%S';

	    format = '<span class="day">' + 'D-%D' + '</span>' + '<br />' +
	    '<span class="time">' + format + '</span>'

	  $(this).html(event.strftime(format));
	})
	.on('finish.countdown', function(event) {
	  $(this).html('')
	    .parent().addClass('disabled');

	});

	//상단언어
	$(".language a").on('click', function() {
		$('.lang_list').stop().slideToggle(300, 'easeOutBack');
	});

	// 상단 메뉴
function overGNB(){		
		if (jQuery('[id^=gnb2th_]').attr('class') == "gnbsingle"){			
			jQuery('[id^=gnb2th_]').attr('class','gnbsingle');
			var gnbMM = jQuery(this).attr('class');
			var gnbHeight = "H"+gnbMM;	
			var Mwidth = $(this).find('a').width();
			var MLeft = $(this).find('a').position().left;
			jQuery('.gnb_wrap').css('background','#222');
			jQuery('#gnb_Bg').show();
			jQuery('#gnb_bottom_line').show();
			jQuery('.gnb_s').hide();
			jQuery('#gnb h2 a').removeClass('active');
			jQuery(this).children().children().show();
			if (gnbHeight == "Hgm_1"){
				jQuery('h2 > a',this).addClass('active')
			    jQuery('#gnb_bottom_line').stop().animate({left:MLeft},100, 'easeOutExpo')
			    jQuery('#gnb_bottom_line').css({'width':Mwidth})
				jQuery('#gnb_Bg').stop().animate({height:"55px"},100, 'easeOutExpo')
			} else if (gnbHeight == "Hgm_2"){
				jQuery('h2 > a',this).addClass('active')
				jQuery('#gnb_bottom_line').stop().animate({left:MLeft},100, 'easeOutExpo')	
				jQuery('#gnb_bottom_line').css({'width':Mwidth})
				jQuery('#gnb_Bg').stop().animate({height:"55px"},100, 'easeOutExpo')
			} else if (gnbHeight == "Hgm_3"){
				jQuery('h2 > a',this).addClass('active')
				jQuery('#gnb_bottom_line').stop().animate({left:MLeft},100, 'easeOutExpo')
				jQuery('#gnb_bottom_line').css({'width':Mwidth})					
				jQuery('#gnb_Bg').stop().animate({height:"55px"},100, 'easeOutExpo')
			} else if (gnbHeight == "Hgm_4"){
				jQuery('h2 > a',this).addClass('active')
				jQuery('#gnb_bottom_line').stop().animate({left:MLeft},100, 'easeOutExpo')		
				jQuery('#gnb_bottom_line').css({'width':Mwidth})	
				jQuery('#gnb_Bg').stop().animate({height:"55px"},100, 'easeOutExpo')
			} else if (gnbHeight == "Hgm_5"){
				jQuery('h2 > a',this).addClass('active')
				jQuery('#gnb_bottom_line').stop().animate({left:MLeft},100, 'easeOutExpo')	
				jQuery('#gnb_bottom_line').css({'width':Mwidth})	
				jQuery('#gnb_Bg').stop().animate({height:"55px"},100, 'easeOutExpo')
			} 
		}
	}
	function closeGnb(){
			jQuery('.gnb_wrap').css('background','rgba(0,0,0,0.4)');
			jQuery('#gnb_Bg').slideUp(100);
			jQuery('#gnb_bottom_line').hide();
			jQuery('.gnb_s').hide();
			jQuery('.gnbmm li').css('opacity','1');
			jQuery('#gnb h2 a').removeClass('active');
		}
	function nofunction(){
	}
	jQuery(function(){
		jQuery('[id^=menu_]').hover(overGNB,nofunction);
		jQuery(".gnb_box").hover(nofunction,closeGnb);
		
	jQuery('[id^=menu_] h2 a').keyup(function(){
		var mid = jQuery(this).parent().parent().attr('id');
		jQuery('#'+mid).mouseover();
	});
	
})

	//상단메뉴 스크롤, top버튼
	
	$(window).scroll(function(){		
		if(40 <= $(window).scrollTop()){
			$('.gnb_wrap').css({'position':'fixed','top':'0px'}).addClass('on');
				
		}else{
			$('.gnb_wrap').css({'position':'absolute','top':'40px'}).removeClass('on');
		};

		if(0 < $(window).scrollTop()){
			$('.btn_top').fadeIn();
		}else{
			$('.btn_top').fadeOut();
		}
	});	
	$('#content .btn_top').click(function(){
		$('html, body').stop().animate({scrollTop : 0}, 700, 'easeOutQuart');
	});


	//서브메뉴
	$('.sub_nav li a').on('click', function(){
		$('.sub_nav li a').removeClass('on');
		$(this).addClass('on');
	});


	//탭메뉴
	$(".bsw_tab_con").hide(); 
	$("ul.bsw_tab_menu li a:first").addClass("on").show();
	$(".bsw_tab_con:first").show(); 
	$("ul.bsw_tab_menu li a").click(function() {
		$("ul.bsw_tab_menu li a").removeClass("on");
		$(this).addClass("on"); 
		$(".bsw_tab_con").hide(); 
		var activeTab = $(this).attr("href");
		$(activeTab).show(); 
		return false;
	});

	//행사안내 탭
	
	$(".s2_1_infoTap > ul li.tab02 a").addClass("on");
	$('.tabConList_box > ul').hide();
	$("#infoTap1").show();
	$('.s2_1_box > ul').hide();
	$('.s2_1_box > ul.activeCon1').show();	
	$(".s2_1_infoTap > ul > li > a").on('click' , function() {		
		var length = $(".s2_1_infoTap > ul > li.tabOne > a.on").length;			
		if($(this).parent().index() == 0){			
			$(".s2_1_infoTap > ul li.tabOne a").addClass("on");
			$(".tabConList").fadeIn();
			$(".s2_1_box > ul").fadeIn();					
		}	
		if($(this).parent().index() == 0 && length == 5){					
			$(".s2_1_infoTap > ul li.tabOne a").removeClass("on");			
			$(".tabConList").fadeOut();
			$(".s2_1_box > ul").fadeOut();	
		}						
		$(this).toggleClass("on"); 
		$('.tabAll a').removeClass('on');
		var activeTab = $(this).attr("href");
		$(activeTab).fadeToggle();
		var activeNum = $(this).parent().index();	
		$('.activeCon'+ activeNum).fadeToggle();	
	var length2 = $(".s2_1_infoTap > ul > li.tabOne > a.on").length;	
		if(length2 == 5){
			$('.tabAll a').addClass('on');
		}		
		return false;
	});
	

	$('.tabConList_box > ul > li > a').click(function(){
		var active = $(this).attr('href');
		var thisTop = $(active).offset().top - 140;
		$('html, body').stop().animate({scrollTop : thisTop}, 700, 'easeOutQuart');
	});	
	


	//포토갤러리
	$('.bbs_gallery li').on('mouseenter focusin', function(){
		$(this).find('.more').css('opacity','0.5');
	});
	$('.bbs_gallery li').on('mouseleave focusout', function(){
		$(this).find('.more').css('opacity','0');
	});




});




