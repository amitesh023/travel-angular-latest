$("#switchSingleAnnual:checkbox").change(function () {
  var ischecked = $(this).is(":checked");
  if (!ischecked) {
    $(".single").addClass("active");
    $(".annual").removeClass("active");
  } else {
    $(".single").removeClass("active");
    $(".annual").addClass("active");
  }
});

var windowWidth = $(window).width();


$(".plan-item").click(function () {
  $(".plan-item").removeClass("active");
  $(this).addClass("active");
});

$(".de-expand-collapse").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $("#traveDetailsContainer").slideUp();
  } else {
    $(this).addClass("active");
    $("#traveDetailsContainer").slideDown();
  }
});

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

$("#btnComparePlan").click(function () {
  $(".compare-plan-section").slideToggle();
  $("#travelSmartPlan ,#travelSchengenPlan").show();
  $(".travel-smart-plan .cp-item").removeClass("border-right border-left");
  $(".cp-sub-head").removeClass("border-right border-left");
});

$(".compare-plan-close").click(function () {
  $(".compare-plan-section").slideUp();
  $("#travelSmartPlan ,#travelSchengenPlan").show();
});

$("#travelSmartPlanSection .more-details").click(function () {
  if (windowWidth > 900) {
    scrollToSection("titleComparePlan");
    $(".compare-plan-section").slideDown();
    $("#travelSchengenPlan").hide();
    $("#travelSmartPlan").show();
    $(".travel-smart-plan .cp-item").addClass("border-right border-left");
    $(".cp-sub-head").addClass("border-right border-left");
  } else {
    scrollToSection("titleComparePlan");
    $(".compare-plan-section").slideDown();
    $("#travelSmartTabLnk").click();
  }
});
$("#travelSchengenPlanSection .more-details").click(function () {
  if (windowWidth > 900) {
    scrollToSection("titleComparePlan");
    $(".compare-plan-section").slideDown();
    $("#travelSchengenPlan").show();
    $("#travelSmartPlan").hide();
    $(".cp-sub-head").addClass("border-right border-left");

  }
  else{
    scrollToSection("titleComparePlan");
    $(".compare-plan-section").slideDown();
    $("#travelSchegenTabLnk").click();
  }
});
