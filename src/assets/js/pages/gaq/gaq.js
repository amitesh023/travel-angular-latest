$(document).ready(function () {
  $("#personalDetails, #travelersDetailsContent").hide();
});

$(".wcs-slider").slick({
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  arrows: false,
  autoplay: false,
  swipe: false,
});

$(".slider-btn-container .btn-slider-back").click(function () {
  $(".wcs-slider").slick("slickPrev");
});
$(".slider-btn-container .btn-slider-next").click(function () {
  $(".wcs-slider").slick("slickNext");
});
$("#ddTravelTo").selectpicker({
  liveSearch: true,
  // width:"100%",
  // size:10,
});

$("#single-tab").click(function(){
  $("#multiple-tab, .to-from-tab").removeClass('active');
  $(this).addClass('active');
  $(".dd-travel-to, #datePickerDepReturn, #toFromTravelingTabs, #infoSingle").show();
  $("#hintSingle").text('This covers your single international trip with multiple destinations');
  $(".to-radio input[name='radioTO']").attr('checked', false).removeClass
});

$("#multiple-tab").click(function(){
  $("#single-tab, .to-from-tab").removeClass('active');
  $(this).addClass('active');
  $(".dd-travel-to, #datePickerDepReturn,  #toFromTravelingTabs, #infoSingle").hide();
  $("#hintSingle").text('Traveling multiple times in a year, save more with this coverage plan')
  $(".to-radio input[name='radioTO']").attr('checked', false)
});


$("#traveling-from-tab").click(function(){
  $("#traveling-to-tab").removeClass('active');
  $(".dd-travel-to, #infoSingle").show();
  $(this).addClass('active');
})
$("#traveling-to-tab").click(function(){
  $("#traveling-from-tab").removeClass('active');
  $(".dd-travel-to, #infoSingle").hide();
  $(this).addClass('active');
})



// Open the Bootstrap-Select dropdown
$(".dd-travel-to").on("click", function () {
  $("#ddTravelTo").selectpicker("toggle");
});

$(function () {
  var start = moment().subtract(29, "days");
  var end = moment();

  function cb(start, end) {
    $("#datePickerDepReturn")
      .html(start.format("MMM D, YYYY") + " - " + end.format("MMM D, YYYY"))
      .addClass("active");
  }
  $("#datePickerDepReturn").daterangepicker(
    {
      autoUpdateInput: false,
      locale: {
        applyLabel: "SELECT",
        format: "ddd, MMM DD",
        minDate: moment(),
        fromLabel: "From Date",
        toLabel: "To Date",
      },
    },
    cb
  );
});

var elementAppended = false;
$("#datePickerDepReturn").on("show.daterangepicker", function (ev, picker) {
  // var appendHTML = $(`
  // <div class="date-picker-footer">amitesh namdev</div>
  // `)
  // if(!elementAppended){
  //   appendHTML.insertBefore(".drp-buttons .applyBtn");
  // }
  // else{

  // }
  var startDate = picker.startDate.format("MMM D, YYYY");
  var endDate = picker.endDate.format("MMM D, YYYY");
  var startDateNew = new Date(startDate);
  var endDateNew = new Date(endDate);
  var timeDifference = endDateNew.getTime() - startDateNew.getTime();
  var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (!elementAppended) {
    $(
      `<span class="datepicker-duration"> 
        <span class="duration-label">Duration:</span> 
        <span class="duration-days"> ${daysDifference}</span>
      </span>`
    ).insertBefore(".drp-buttons .applyBtn");
    elementAppended = true;
  } else {
    $(".drp-buttons .datepicker-duration .duration-days").text(daysDifference);
  }
});

$("#dropDownST").click(function () {
  if ($("#dropDownST").hasClass("dt-close")) {
    $("#dropDownST").addClass("dt-open").removeClass("dt-close");
    $("#dropDownSTContent").slideDown().addClass("dd-open");
  } else {
    $("#dropDownST").addClass("dt-close").removeClass("dt-open");
    $("#dropDownSTContent").slideUp().removeClass("dd-open");
  }
});

// Adult Travelers start
$("#stepNoDown").click(function () {
  document.getElementById("adultTravelers").stepDown();
});
$("#stepNoUp").click(function () {
  document.getElementById("adultTravelers").stepUp();
});
// Adult Travelers end

// Young Travelers start
$("#stepNoDownYT").click(function () {
  document.getElementById("youngTravelers").stepDown();
});
$("#stepNoUpYT").click(function () {
  document.getElementById("youngTravelers").stepUp();
});
// Young Travelers end

// Senior Travelers start
$("#stepNoDownST").click(function () {
  document.getElementById("seniorTravelers").stepDown();
});
$("#stepNoUpST").click(function () {
  document.getElementById("seniorTravelers").stepUp();
});
// Senior Travelers end

$(document).mouseup(function (e) {
  var containerCallUs = $("#dropDownSTContent");
  // If the target of the click isn't the container
  if (
    !containerCallUs.is(e.target) &&
    containerCallUs.has(e.target).length === 0 &&
    !$("#dropDownST").is(e.target)
  ) {
    containerCallUs.slideUp();
  }
});

$("#btnConfirmST").click(function () {
  let adultTravelersTxtVal = $("#adultTravelers").val();
  $("#adultTravelersTxt").text(adultTravelersTxtVal);

  let youngTravelersTxtVal = $("#youngTravelers").val();
  $("#youngTravelersTxt").text(youngTravelersTxtVal);

  let seniorTravelersTxtVal = $("#seniorTravelers").val();
  $("#seniorTravelersTxt").text(seniorTravelersTxtVal);
  $("#travelersDetailsContent").show();
  $("#travelersText").hide();

  if ($("#dropDownST").hasClass("dt-close")) {
    $("#dropDownST").addClass("dt-open").removeClass("dt-close");
    $("#dropDownSTContent").slideDown();
  } else {
    $("#dropDownST").addClass("dt-close").removeClass("dt-open");
    $("#dropDownSTContent").slideUp();
  }
  
});

$("#btnNextTrip").click(function () {
  $("#tripTabsSections").hide();
  $("#personalDetails").show();
});
