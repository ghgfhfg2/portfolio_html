/* 공통 hover */
function comMouseEnter(display){
	$(display).show();
};
function comMouseLeave(display){		
	$(display).hide();
};

/* 공통 click */
function comClickHide(target){
	$(target).hide();
};
function comClickShow(target){
	$(target).show();
};
function comClickAddOn(display){
	$(display).addClass('on');
};
function comClickRemoveOn(display){
	$(display).removeClass('on');
};
function comClickToggleOn(display){
	$(display).toggleClass('on');
};

function comClickAddOn2(target,className){
	$(target).addClass(className);
};
function comClickRemoveOn2(target,className){
	$(target).removeClass(className);
};

function comClickToggleClass(target,className){
	$(target).toggleClass(className);
};

function comClickToggleSlide(target,speed){
	$(target).slideToggle(speed);
};



/* 윈도우 기준 센터정렬 */
function comPositionCenter(target){
	var targetW = $(target).innerWidth()/2;
	var targetH = $(target).innerHeight()/2;
	var	positionW = $(window).width()/2 - targetW;
	var	positionH = $(window).height()/2 - targetH;
	$(target).css('left',positionW);
	$(target).css('top',positionH);
};

/* 선택 센터정렬 */
function comSelectCenter(target,parent){
	var targetW = $(target).innerWidth()/2;
	var targetH = $(target).innerHeight()/2;
	var	positionW = $(parent).width()/2 - targetW;
	var	positionH = $(parent).height()/2 - targetH;
	$(target).css('left',positionW);
	$(target).css('top',positionH);
};

/* 스크롤 넘어가면 고정 */
function scrollOverFix(posTop,target,className){
	if($(posTop).length >= 1){
		var tabTop = $(posTop).offset().top;
		$(window).scroll(function(){
			if($(window).scrollTop() > tabTop){
				$(target).addClass(className);
			}else{
				$(target).removeClass(className);
			}
		});
	}
};
function scrollBotOverFix(posTop,target,className){
	if($(posTop).length >= 1){
	var tabTop = $(posTop).offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop() + $(window).height() > tabTop){
			$(target).addClass(className);
		}else{
			$(target).removeClass(className);
		}
	});
	}
};


/* 체크박스 전체제어 */
function comAllCheck(target,boolean,thisLabel){
	var target = $(target);
	var thisLabel = $(thisLabel);
	if(boolean == 'true'){
		target.find('input[type=checkbox]').prop('checked',true);
	}
	if(boolean == 'false'){
		target.find('input[type=checkbox]').prop('checked',false);
	}
	if(boolean == 'toggle'){
		var $this = thisLabel.prev();
		var optionInput = target.find('input[type=checkbox]');
		if($this.is(':checked') == true){
			optionInput.prop('checked',false);
		}else{
			optionInput.prop('checked',true);
		}
	}
}


function comCheck(target,target2,target3,thisLabel){
	var target = $(target);
	var target2 = $(target2);
	var target3 = $(target3);
	var thisLabel = $(thisLabel);
	var checkBox = target.find(target2).length;
	if(checkBox >= 0){
		target3.prop('checked',true);
	}
}

function comCheck2(target,target2,thisLabel){
	var target = $(target);
	var target2 = $(target2);
	var thisLabel = $(thisLabel);
	var checkBox = target.length;
	if(checkBox >= 0){
		target2.prop('checked',true);
	}	
	if(checkBox == 1 && thisLabel.prev().prop('checked') == true){
		target2.prop('checked',false);
	}
}


/* 체크박스 모두 체크해야 전체체크박스에 체크 */
function comCheckAll(checkList,allCheck){
	$(checkList).find('input').change(function(){
		var inputLength =  $(checkList).find('input').length;
		var checkLength = $(checkList).find('input:checked').length;
		if(inputLength == checkLength){
			$(allCheck).prop('checked',true);
		}else{
			$(allCheck).prop('checked',false);
		}
	});
}


/* 체크박스 인풋입력 */
function comCheckIput(target,target2){
    var arr = target;
    var friendId = arr.value;
    var inputVal = document.getElementById(target2).value;
    if(inputVal == ""){
        document.getElementById(target2).value = friendId;
    }else{
        document.getElementById(target2).value += "," + friendId;
    }
}
/* 체크박스 전체 인풋입력 */
function comAllCheckInput(name,target){
    var arr = document.getElementsByName(name);
    var arrLength = arr.length;
    var friendId = "";
    for (var i = 0; i < arrLength; i++) {
        if(i == arrLength - 1){
            friendId += arr[i].value;
        }else{
        friendId += arr[i].value + ",";
        }
    }
    document.getElementById(target).value = friendId;
}
/* 체크박스 인풋삭제 */
function comAllDelInput(target){
    document.getElementById(target).value = "";
}


/* 복사하기 */
function copyText(target,target2){
	var target = document.getElementById(target).textContent;
	var target2 = document.getElementById(target2);
	target2.value = target;
	target2.select();
	document.execCommand('copy');
	alert('홍보 URL이 복사되었습니다.');
}

/* 즐겨찾기 추가 */
function favorSite(bookmarkURL,bookmarkTitle) { 
	var triggerDefault = false; if (window.sidebar && window.sidebar.addPanel) { 
// Firefox version < 23
 window.sidebar.addPanel(bookmarkTitle, bookmarkURL, ''); 
 } else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) { 
 // Firefox version >= 23 and Opera Hotlist
  var $this = $(this); $this.attr('href', bookmarkURL); $this.attr('title', bookmarkTitle); $this.attr('rel', 'sidebar'); $this.off(e); triggerDefault = true; } else if (window.external && ('AddFavorite' in window.external)) { 
  // IE Favorite
   window.external.AddFavorite(bookmarkURL, bookmarkTitle); 
   } else { 
   // WebKit - Safari/Chrome 
   alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.'); } return triggerDefault; 
}

   //ul형 셀렉트박스
   function selextUl(text,list){
	var selectTxt = $(text);
	var selectList = $(list);
	selectTxt.on('click', function(){
		selectList.toggleClass('on');
	});
	selectList.find('li').on('click', function(){
		var listTxt = $(this).text();
		selectTxt.text(listTxt);
		selectList.removeClass('on');
	});
}

	/* 첨부파일 */
	function inputFile(input,preview,name){
		var inputBox = $(input);
		var previewImg = $(preview);
		var fileName = $(name);		
		inputBox.on('change',function(){			
			var fileList = this.files ;    
			var reader = new FileReader();
			reader.readAsDataURL(fileList[0]);
			reader.onload = function(){	    				
				previewImg.empty().append('<div class="preview"><img src="' + reader.result + '"></div>');
				console.log(inputBox.val());
				fileName.text(inputBox.val());
			};
	
		})
	}
	function inputFileReset(input,preview,name){
		var inputBox = $(input);
		var previewImg = $(preview);
		var fileName = $(name);
		inputBox.val("");
		previewImg.empty();
		fileName.html("<span class='col_gray'>파일을  첨부하세요.</span>");
	}


	/* 그래프 */
	function comGraph(graph,bar,type,derection){
		var graph = $(graph);
		var bar = $(bar);
		var length = bar.length;
		var arr = [];
		var numTotal = 0;
		for(i=0; i<length; i++){   
			arr.push(parseInt(bar.eq(i).text()));
			numTotal += parseInt(bar.eq(i).text());
		}    
		var max = Math.max.apply(null,arr) * 1.25;
		if(derection == 'row'){
			if(type == 'percent'){
				for(i=0; i<length; i++){                        
					bar.eq(i).attr('style','height:'+ parseInt(bar.eq(i).text()) / numTotal * 100 + '%');
				}
			}
			if(type == 'max'){
				for(i=0; i<length; i++){                        
					bar.eq(i).attr('style','height:'+ parseInt(bar.eq(i).text()) / max * 100 + '%');
				}
			}
			if(type == 'arange'){
				for(i=0; i<length; i++){                        
					bar.eq(i).attr('style','height:'+ parseInt(bar.eq(i).text()) / numTotal * 100 + '%');
				}
			}
		}
		if(derection == 'col'){
			for(i=0; i<length; i++){                        
				bar.eq(i).attr('style','width:'+ parseInt(bar.eq(i).text()) / max * 100 + '%');
			}
		}
	}

$(function(){

	/* 공통 탭 */
	$('.com_tab_list a').on('click', function(){
        var tabList = $(this).parents('ul');
        var tabCon = tabList.next('.com_tab_con_box').find('.com_tab_con');
		var thisTabIndex = $(this).parent().index();
		tabList.find('a').removeClass('on');
		$(this).addClass('on');
		tabCon.hide();
		tabCon.eq(thisTabIndex).show();
		return false;
	});


	/* 맨위로 */
	var btnTop = $('.btn_move_top');
	var winScroll = $(this).scrollTop();
	if(winScroll > 10){
		btnTop.fadeIn(100);
	}else{
		btnTop.hide();
	}
	var btnTop = $('.btn_move_top');
	$(window).scroll(function(){
		if(winScroll > 10){
			btnTop.fadeIn(100);
		}else{
			btnTop.fadeOut(100);
		}
	});
	$('.btn_move_top').click( function() { 
		$('html, body').animate( { scrollTop : 0 }, 100 ); return false; 
	});


	//인풋 입력수 제한 
   $('input[type=number][max]:not([max=""]),input[type=password][max]:not([max=""])').on('input', function(ev) {
      var $this = $(this);
      var maxlength = $this.attr('max').length;
      var value = $this.val();
      if (value && value.length >= maxlength) {
        $this.val(value.substr(0, maxlength));
      }
   });

   /* 비밀번호 보기 */
   $('.btn_pw_view').on('click',function(){
	var type = $(this).prev('input').attr('type');
	if(type == 'password'){
		$(this).prev('input').attr('type','text');
		$(this).find('.view').removeClass('on');
		$(this).find('.hide').addClass('on');
	}else{
		$(this).prev('input').attr('type','password');
		$(this).find('.hide').removeClass('on');
		$(this).find('.view').addClass('on');
	}
	});
	


	/* 펼쳐보기(게시판) */
	$('.btn_accordion').on('click', function(){
		$(this).toggleClass('on');
		$(this).next('.list_con').stop().slideToggle(150);
	});


	/* 접수정보 */
	$('button.accept_input_tit').on('click', function(){
		$(this).toggleClass('on');
		$(this).next('.com_input_con').toggleClass('on');                   
	});                

});

