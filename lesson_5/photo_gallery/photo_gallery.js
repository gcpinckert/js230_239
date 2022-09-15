$(function() {
  const $thumbnails = $('li');
  const $featuredImages = $('figure');

  function removeCurrentActiveThumbnail() {
    $thumbnails.each(function() {
      let $thumbnail = $(this);
      if ($thumbnail.hasClass('active')) {
        $thumbnail.removeClass('active');
      }
    });
  }

  function removeCurrentFeaturedImage() {
    $featuredImages.each(function() {
      let $img = $(this);
      if (!$img.hasClass('hidden')) {
        $img.addClass('hidden');
      }
    });
  }

  function getCorrespondingFeaturedImg($thumbnail) {
    return $featuredImages.filter(function() {
      let $img = $(this);
      return $img.attr('data-img-id') === $thumbnail.attr('data-img-id');
    }).first();
  }

  $('ul').on('click', 'li', function(event) {
    removeCurrentActiveThumbnail();

    const $currentThumbnail = $(event.target).closest('li');
    $currentThumbnail.addClass('active');
    removeCurrentFeaturedImage();
    
    const $currentFeatured = getCorrespondingFeaturedImg($currentThumbnail);
    $currentFeatured.removeClass('hidden');
  });
});