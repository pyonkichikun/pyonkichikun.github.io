(function(){

  $('.li').click(function() {
    const $c = $('#c');
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
    const $c = $('#c');
    const $c1 = $('#c-1-1');
    if ($c.hasClass('close')) {
      $c.removeClass('close').slideDown(1000);
    } else if ($c1.hasClass('close')) {
      $c1.removeClass('close').fadeIn(500);
    } else {
      $c1.addClass('close').fadeOut(500);
    }
  });

  $('#d-1-2').click(function() {
    const $c = $('#c');
    const $c2 = $('#c-1-2');
    if ($c.hasClass('close')) {
      $c.removeClass('close').slideDown(1000);
    } else if ($c2.hasClass('close')) {
      $c2.removeClass('close').slideDown(500);
    } else {
      $c2.addClass('close').slideUp(500);
    }
  });

});
