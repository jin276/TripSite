'use strict';
$(function() {
  //--- hamburger menu ---//  
  $('.button').on('click', function() {
    $(this).toggleClass('active');
    $('.slide-menu').toggleClass('active');
  });
  $('.slide-menu').on('click', function() {
    $('.slide-menu').removeClass('active');
  });

  //--- accordion ---// 
  $('.footer-menu').click(function(e) {
    e.preventDefault();
    let $down = $(this).find('.i-arrow');
    let $accordion = $(this).find('.accordion');
    $accordion.slideToggle();
    $down.toggleClass('current');
  });
  
  //--- scroll top ---//
  $('.arrow').click(function() {
    let position = $('.header-container').offset().top; 
    $('html, body').animate({scrollTop : position}, 500, "swing");
  });

});