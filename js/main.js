var $body = $('body');
var $html = $('html');
var $ball = $('.ball');

$('#btn-make').on('click', function() {
  var newCircle = $ball.offset().left + 10;
  $ball.css('left', newCircle);
});

$body.on('click', function () {
  var $ballAppear = $('<div>');

  $body.append($ballAppear);
  $ballAppear.addClass('ball');
  $ballAppear.css('left', Math.random() * 500);
  $ballAppear.css('top', Math.random() * 500);
});
