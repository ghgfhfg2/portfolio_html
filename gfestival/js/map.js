//모바일 좌측에서 우측으로 이동
function mGnb(){
	$(".fix_bg").show();
	$("#mMenu").addClass("on");
	$("#wrapper").addClass("wra_box");
	$(".btnMenuClose").show();
	$(".fix_bg, .btnMenuClose").click(function(){
		$(".btnMenuClose").hide();
		$("#mMenu").removeClass("on");
		$("#wrapper").removeClass("wra_box");
		$(".fix_bg").hide();
		return false;
	});
	return false;
}

//1차 카테고리 펼침
function mGnbSub(){
	$("#mMenu #gnb ul li").removeClass('on');
	$(this).parent().addClass('on');
	$("#mMenu .gnbSub").addClass('on');
	$(".gnbsClose").click(function(){
		$("#mMenu .gnbSub").removeClass('on');
		$("#mMenu #gnb ul li").removeClass('on');
	});
}

jQuery(function(){
	//메뉴 및 검색 생행
	$("#mMenu #gnb ul li a, .searBtn").click(mGnbSub);
	$(".btnMenu, .searBtn").click(mGnb);

	//2차 카테고리 펼침
	$('.items li.has-sub>a').on('click', function(){
		//$(this).removeAttr('href');
		var element = $(this).parent('li');
		var element2 = $(this).parent('li').children('ul').children('li').children('a');
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

	//모바일 좌측에서 우측으로 이동
	/*$(".btnMenu").click(function(){
		$(".fix_bg").show();
		//$("#mMenu").after('<div class="fix_bg"></div>').show();
		$("#mMenu").addClass("on");
		$("#wrapper").addClass("wra_box");
		$(".btnMenuClose").show();
		$(".fix_bg, .btnMenuClose").click(function(){
			$(".btnMenuClose").hide();
			$("#mMenu").removeClass("on");
			$("#wrapper").removeClass("wra_box");
			$(".fix_bg").hide();
			return false;
		});
		return false;
	});*/
	

	//상단검색 열기
	$(".btnSearch").click(function(){
		$(".topSearch").slideToggle('fast');
		$(this).toggleClass('on');
	});
});

