$(function() {
  var $c = $('#c');

  $('.li').click(function() {
    if ($c.hasClass('close')) {
      $c.removeClass('close').slideDown(1000);
    } else {
      $c.addClass('close').slideUp(1000);
    }
  });

  $('#c-1-1').click(function() {
    $(this).addClass('close').fadeOut(500);
  });

  $('#c-1-2').click(function() {
    $(this).addClass('close').slideUp(500);
  });

  $('#d-1-1').click(function() {
    var $c11 = $('#c-1-1');

    if ($c.hasClass('close')) {
      $c.removeClass('close').slideDown(1000);
    } else if ($c11.hasClass('close')) {
      $c11.removeClass('close').fadeIn(500);
    } else {
      $c11.addClass('close').fadeOut(500);
    }
  });

  $('#d-1-2').click(function() {
    var $c12 = $('#c-1-2');

    if ($c.hasClass('close')) {
      $c.removeClass('close').slideDown(1000);
    } else if ($c12.hasClass('close')) {
      $c12.removeClass('close').slideDown(500);
    } else {
      $c12.addClass('close').slideUp(500);
    }
  });
});
