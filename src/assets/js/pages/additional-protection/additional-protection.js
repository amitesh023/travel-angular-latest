$(".ai-content-part").click(function(){
    $(this).parent().toggleClass('active')
})

$(".view-details-lnk").click(function(){
    if(!$(this).hasClass('show')){
        $(this).text('Hide Details').addClass('show');
        $(".view-details-content").slideDown();
    }
    else{
        $(this).text('Show Details').removeClass('show');
        $(".view-details-content").slideUp();

    }
})

$("#youPlanHeader").click(function(){
    if(!$(this).hasClass('active')){
        $(this).addClass('active');
        $(".your-plan-section").slideDown();
    }
    else{
        $(this).removeClass('active');
        $(".your-plan-section").slideUp();
    }
})