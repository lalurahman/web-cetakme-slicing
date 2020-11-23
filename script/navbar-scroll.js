$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-cetakme-detail");
    $nav.toggleClass("scrolled-detail", $(this).scrollTop() > $nav.height());
  });
});
