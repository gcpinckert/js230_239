$(function() {
  const $infoBox = $('#modal');
  const $overlay = $('#modal-overlay');

  $('ul').on('click', 'a', function (event) {
    event.preventDefault();

    const $link = $(event.target);
    const $staffImg = $infoBox.children('img');
    const $staffName = $infoBox.children('h3');
    const $staffInfo = $infoBox.children('p');

    $staffImg.attr('src', $link.attr('data-img-src'));
    $staffName.text($link.attr('data-name'));
    $staffInfo.text($link.attr('data-info'));

    $infoBox.removeClass('hidden');
    $overlay.removeClass('hidden');
  });

  $('#modal a.close-icon').click(function(event) {
    $infoBox.addClass('hidden');
    $overlay.addClass('hidden');
  });
});

