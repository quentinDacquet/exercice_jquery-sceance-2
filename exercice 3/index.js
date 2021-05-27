jQuery(document).ready(function(){

    $("#btnanime").click(function(){
        $("#box").animate({height : '500px', width : '200px'}, 3000, function(){
            $("#btnrein").click(function(){
                $("#box").animate({height : '400px', width : '400px'}, 0, function(){});
            })
        })
    })
    
});