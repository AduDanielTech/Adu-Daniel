// script.js
$(document).ready(function() {
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active-carousel");
      $(this).toggleClass("active-carousel");
    });
  });
  //# sourceURL=pen.js
});
