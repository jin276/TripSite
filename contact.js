'use strict'

{
$(function() {
  //--- input内のtextを消す ---//
  $('#search').click(function() {
    $('#search').val("");
  });

  //--- inputの長さ変更 ---//
  $(document).click(function(e) {
    if (!$(e.target).closest('#search').length) {
      $('#search').animate({"width": "70%"}, 500);
    } else {
      $('#search').animate({"width": "80%"}, 500);
    }
  });

    //--- accordion ---//
    $('.accordion').click(function() {
      $(this).find('span').toggleClass('on');
      $(this).find('.ac-menu').slideToggle();
    });

    //--- page top ---//
    $('.arrow').click(function() {
      let position = $('.header-container').offset().top;
      $('html, body').animate({scrollTop: position}, 500, "swing");
    });
});
}