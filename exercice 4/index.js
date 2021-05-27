jQuery(document).ready(function(){

    $("#btnanime").click(function(){
        $("#box").fadeOut(3000, function(){
            $("#box").fadeIn(3000, function(){
            })
        })
    })
    
});