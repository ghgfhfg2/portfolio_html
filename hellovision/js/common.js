function show(el, dp) {
  var target = document.querySelector(el);
  dp === undefined
    ? (target.style.display = "block")
    : (target.style.display = dp);
}
function hide(el) {
  var target = document.querySelector(el);
  target.style.display = "none";
}
function toggle(el, dp) {
  var target = document.querySelector(el);
  if (target.style.display === "none") {
    dp === undefined
      ? (target.style.display = "block")
      : (target.style.display = dp);
  } else {
    target.style.display = "none";
  }
}
function addOn(el) {
  var target = document.querySelector(el);
  target.classList.add("on");
}
function removeOn(el) {
  var target = document.querySelector(el);
  target.classList.remove("on");
}
function toggleOn(el, cls) {
  var target = document.querySelector(el);
  if (target.classList.contains(cls)) {
    target.classList.remove(cls);
  } else {
    target.classList.add(cls);
  }
}


/* tab */
function comTab(el, dp) {
  var target = document.querySelector(el);
  var tab = target.querySelectorAll(".tab-list button");
  var con = target.querySelectorAll(".tab-content");
  for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", function () {
      for (var j = 0; j < con.length; j++) {
        tab[j].classList.remove("on");
        con[j].style.display = "none";
      }
      var data = this.getAttribute("data-tab");
      var active = document.querySelector(data);
      this.classList.add("on");
      dp === undefined
        ? (active.style.display = "block")
        : (active.style.display = dp);
    });
  }
}

/* text counter */
function textCounter(e, t, l) {
  var length = e.value.length;
  var el = document.querySelector(t);
  if(l){
    var limit = document.querySelector(l).innerText;
  }else{
    var limit = 1000;
  }
  el.innerHTML = length;
  if (length > limit) {
    e.value = e.value.substring(0, limit);
    el.innerHTML = limit;
    return;
  }
}


window.onscroll = function(){
  var _scrollTop = window.scrollY || document.documentElement.scrollTop;
  var wapper = document.querySelector('#wrapper');
  /* 상단메뉴 고정 */
  var header = document.querySelector('#header');
  if( _scrollTop > 37){
    header.classList.add('fix');
    wapper.classList.add('pt');    
  }else{
    header.classList.remove('fix');
    wapper.classList.remove('pt'); 
  }

  var topBtn = document.querySelector('#footer .fix-bot-box .btn-top')
  if(_scrollTop > 0){
    topBtn.classList.add('on')
  }else{
    topBtn.classList.remove('on')
  }
}

/* 맨위로 */
function moveScroll(top, duration) {
  $("html, body").animate({ scrollTop: top }, duration, "easeInOutExpo");
  return false;
}

/* 레이어 팝업 닫기 */
function layerClose(e) {
  var el = document.querySelector(e);
  var comLayerBg = document.querySelector(".com-layer-bg");
  el.style.display = "none";
  comLayerBg.style.display = "none";
  document.body.classList.remove("fix");
}


/* 상세 썸네일 */
function thumbImg(e, target) {
  var el = document.querySelector(target);
  var src = e.getAttribute("src");
  el.setAttribute("src", src);
}


/* jquery */

$(function(){
  var layer = $('.com-layer-style1');  
  $('body').not('td').on('click',function(e){
    if(e.target.className != 'btn-price-view' && e.target.className != 'com-layer-style1 price-view-layer' && e.target.nodeName != 'TD' && e.target.nodeName != 'TH'){    
      if(layer.css('display') == 'block'){
        layer.hide();
      }
    }
  })  
})

