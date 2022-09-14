$(function() {
  $('div').hide();

  $('a').on('click', function(e) {
  e.preventDefault();

  $('div').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
});
});