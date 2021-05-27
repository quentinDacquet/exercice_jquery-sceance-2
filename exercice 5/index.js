jQuery(document).ready(function(){

    setInterval(function(){
        $("#box").fadeOut(1500, function(){
            $("#box").fadeIn(1500, function(){});
        })
    }, 3000);
    
});