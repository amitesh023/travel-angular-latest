
$("#collapseCurrency li a").click(function () {
    $(document).click();
    $(".selected-currency").html($(this).html());
  });
  
  $("#collapseCurrency li a").click(function () {
    $(document).click();
    $(".country-select-btn-mob").removeClass("active");
  });
  
  $(document).click(function (event) {
    if ($(event.target).parents("#collapseCurrency").length < 1) {
      var clickover = $(event.target);
      var $navbar = $("#collapseCurrency");
      var _opened = $navbar.hasClass("show");
      if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $navbar.collapse("hide");
      }
    }
  });