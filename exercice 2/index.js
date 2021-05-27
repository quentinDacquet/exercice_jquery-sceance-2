jQuery(document).ready(function(){

    $("#btn").click(function(){
        $("#div1,#div3").toggleClass("color");
    })

    let animation = function() {
        $("#div1,#div3").slideToggle(5000, animation);
    }
    
    animation();
    
});