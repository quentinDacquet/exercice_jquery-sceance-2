jQuery(document).ready(function(){

    let fxoff = function(){
        $.fx.off = !$.fx.off; //Permet à chaque appel de la fonction d'inverser la valeur de fxoff()
    };
    $( "#btneffet" ).click( fxoff ); //Click sur le boutton effet appel fxoff() = active d'esactive les effets
    $( "#btnpop" ).click(function() {  //click sur le bouton afficher permet de faire pop ou depop la div avec toggle en 1s
    $( "div" ).toggle(1000, function(){} );
    });
    
});