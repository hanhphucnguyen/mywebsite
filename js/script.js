(function($) {
  "use strict";

  // load progress bar
  setTimeout(function() {
    $('.jsProgressBar').each(function() {
      var data = $(this).data();
      $(this).addClass('active');
      $(this).text(data.width + '%');
    })
  }, 1000)

  // load tooltip
  $('[data-toggle="tooltip"]').tooltip()

})(jQuery);  
