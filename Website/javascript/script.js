$(document).ready(function() {
    setInterval(rotateSlider, 4000);
  });   
  function rotateSlider(){
    $("#sliderShow-img").animate({marginLeft: "-1520px"}, 1000).delay(4000);
    
    $("#sliderShow-img").animate({marginLeft: "-3040px"}, 1000).delay(4000);
    
    $("#sliderShow-img").animate({marginLeft: "0px"}, 1000).delay(4000);
} 

$(document).ready(function() {
    $(".search-btn a").click( function(){
        $(".active").show()
    })

    $("#main").click( function(){
        $(".active").hide()
    })

    $(".goToTop").hide()

    $(window).scroll(function(){
        if($(this).scrollTop() >= 100)
            $(".goToTop").show(500)
        else
            $(".goToTop").hide(500)
    })

    $(".goToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })
}) 

$(document).ready(function() {

    $("#js-open-btn").click( function(){
        $("#js-menu-hide").show()
    })

    $("#js-close-btn").click( function(){
        $("#js-menu-hide").hide()
    })
})

// COURSE 

$(document).ready(function() {

    $("#btn-search").click(function() {
        
        var k = $("#kw").val()
        
        $(`.course-item h2:contains(${k})`).parent().parent().css(
            "border", "2px solid red")   
        
        setTimeout(function(){
            $(".course-item").css("border", "none")
        }, 5000)
    })
    
})

$(".content-heading").mouseenter(function(){
    $(".item").animate({
        marginTop:"0"
    },1500);
});

$(".mobilephone > .content-section>.content-container>.content-heading").mouseenter(function(){
    $(".lists").slideDown(2000)
}); 

$(".entertainment>.content-section>.content-container>.content-heading").mouseenter(function(){
    $(".ett-containner-content").animate({
        marginBottom:"0"
    },1500);
});
$(".entertainment>.content-section>.content-container>.content-heading").mouseenter(function(){
    $(".ett-containner").animate({
        opacity:1
    },1500);
});

$(".entertainment>.content-section>.content-container>.content-heading").mouseenter(function(){
    $(".ett-img").animate({
        marginBottom:"0"
    },1500);
});    

$(".entertainment>.content-section>.content-container>.content-heading").mouseenter(function(){
    $(".ett-type").animate({
        marginTop:"0"
    },1500);
});   