$(function() {
  var $top = $('#top');
  var $eye1 = $('#eye1')
  var $eye2 = $('#eye2')

  $('.ear').click(function() {    
    if ($top.hasClass('close')) {
      $top.removeClass('close').slideDown(1000);
    } else {
      $top.addClass('close').slideUp(1000);
    }
  });

  $eye1.click(function() {
    $(this).addClass('close').fadeOut(500);
  });

  $eye2.click(function() {
    $(this).addClass('close').slideUp(500);
  });

  $('#mouth1').click(function() {
    if ($top.hasClass('close')) {
      $top.removeClass('close').slideDown(1000);
    } else if ($eye1.hasClass('close')) {
      $eye1.removeClass('close').fadeIn(500);
    } else {
      $eye1.addClass('close').fadeOut(500);
    }
  });

  $('#mouth2').click(function() {
    if ($top.hasClass('close')) {
      $top.removeClass('close').slideDown(1000);
    } else if ($eye2.hasClass('close')) {
      $eye2.removeClass('close').slideDown(500);
    } else {
      $eye2.addClass('close').slideUp(500);
    }
  });
});
