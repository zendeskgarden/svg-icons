$(document).ready(function() {
  $.each(Garden.svgIDs, function(index, value) {
    if (value.indexOf('wordmark') === -1) {
      $('.c-main__body > .l-grid:first-child').append('<span class="l-grid__item u-1/4 u-mb u-truncate">' +
        '<svg><use xlink:href="../index.svg#' + value + '"></svg>\n' +
        '<code class="c-code u-micro u-p-xs">&lt;svg id="' + value + '"&gt;</code>' +
      '</span>');
    }
  });

  var initialSize = $('.c-main svg').height();

  $('.js-size').on('change input', function() {
    var size = $(this).val();

    $('.c-main svg').css('fontSize', size + 'px');
    $('.js-size-text').html(size).toggleClass('u-bg-submarine', ((size % initialSize) != 0));
    $('code').toggleClass('u-display-none', (size != initialSize));
  }).click(function() {
    return false;
  });

  $('.js-size-text').click(function() {
    $('.js-size').val(initialSize).trigger('input');
  });
});
