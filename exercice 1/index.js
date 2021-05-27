jQuery(document).ready(function(){

    $("#box").animate({marginLeft : '50px'}, 1000, function(){
        $("#box").animate({marginLeft : '0px'}, 1000, function(){})
    })
});