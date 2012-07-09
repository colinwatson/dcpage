$(document).ready(function() {

  function moveWave1() {
    $('div#wave1').fadeIn(2000, function() {
      $(this).fadeOut(2000, function() {
        if($(this).css('top') == '-20px') {
          
          $(this).css('top', '-100px');
        }
        else {
          $(this).css('top', parseInt($(this).css('top')) +20);
        }
      });
    });
  };
  
  function moveWave2() {
    $('div#wave2').fadeIn(3000, function() {
      $(this).fadeOut(3000, function() {
        if($(this).css('top') == '0px') {
          
          $(this).css('top', '-80px');
        }
        else {
          $(this).css('top', parseInt($(this).css('top')) +20);
        }
      });
    });
  };
  
  setInterval(moveWave1, '4000');
  setInterval(moveWave2, '6000');

});
