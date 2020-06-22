$(function() {
  var $main1 = $('#main1');
  var $eyesLeft = $('#eyes-left')
  var $eyesRight = $('#eyes-right')

  $('.ear').click(function() {    
    if ($main1.hasClass('close')) {
      $main1.removeClass('close').slideDown(1000);
    } else {
      $main1.addClass('close').slideUp(1000);
    }
  });

  $eyesLeft.click(function() {
    $(this).addClass('close').fadeOut(500);
  });

  $eyesRight.click(function() {
    $(this).addClass('close').slideUp(500);
  });

  $('#mouth-left').click(function() {
    if ($main1.hasClass('close')) {
      $main1.removeClass('close').slideDown(1000);
    } else if ($eyesLeft.hasClass('close')) {
      $eyesLeft.removeClass('close').fadeIn(500);
    } else {
      $eyesLeft.addClass('close').fadeOut(500);
    }
  });

  $('#mouth-right').click(function() {
    if ($main1.hasClass('close')) {
      $main1.removeClass('close').slideDown(1000);
    } else if ($eyesRight.hasClass('close')) {
      $eyesRight.removeClass('close').slideDown(500);
    } else {
      $eyesRight.addClass('close').slideUp(500);
    }
  });
});
