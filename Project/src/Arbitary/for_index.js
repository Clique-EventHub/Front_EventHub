$(document).ready(function(){
    $(".slider-top").slick({
      centerMode: true,
      variableWidth: true,
      infinite: true,
      focusOnSelect: true,
      centerPadding: '60px',
      slidesToShow: 3,
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }]
    });
});

window.onload = function() {
    var allCards = document.getElementsByClassName("cards");
    var allMasks = document.getElementsByClassName("mask");
    var allMasksContainer = document.getElementsByClassName("mask-container");

    var height = 0;
    var width = 0;
    var minHeight = allCards[0].offsetHeight;
    for(var i = allCards.length -1; i >= 0; i--) {
        if(height < allCards[i].offsetHeight) height = allCards[i].offsetHeight;
        if(width < allCards[i].offsetWidth) width = allCards[i].offsetWidth;
        if(minHeight > allCards[i].offsetHeight) minHeight = allCards[i].offsetHeight;
    }

    paddingOffset = 20;

    var allCardsLine = document.getElementsByClassName("cards-line-container");
    for(var i = allCardsLine.length-1; i >= 0; i--) {
        allCardsLine[i].style.height = (height + 15 + paddingOffset) + "px";
    }

    for(var i = allMasks.length -1; i >= 0; i--) {
        allMasks[i].style.height = height + "px";
        allMasksContainer[i].style.top = "-" + (height + allCards[i].offsetHeight - height) + "px";
        if(allCards[i].offsetHeight - height != 0) allCards[i].style.height = height + "px";
    }
}


var hideDetail = function() {
    console.log("closed");
    $('.mask-all-container').empty();
}

var alertClick = function() {
    alert("You clicked");
}

var consoleLog = function() {
    console.log("Hello");
}
