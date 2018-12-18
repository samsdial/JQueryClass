// funcion Anonima //
(function () {
   //
    var actual = 0;
    var ancho = 1920;

    var $slideshow = $(".slideShow ul");
    var slides  = $slideshow.find("li").length;
    var $puntos = $(".slideShowButtons");
    $puntos.find("div").eq(0).css({
        backgroundColor: "#9370DB"
    });
    var intervalo = setInterval(function () {
       mover("sig");
    }, 1500);

    function mover( dir ) {

        ( dir === "sig" ) ? actual -- : actual ++;
        if ( actual > 0 ){
            actual = (slides - 1 ) * -1;
        } else if ( actual  <= (slides * -1)){
            actual = 0;
        }
        mover_por_punto( actual );

    };
    function mover_por_punto( actual, click){
        if ( click )
            clearInterval( intervalo);
        var margen = actual * ancho;
        var idx = actual * -1;

        var $puntoActual = $puntos.find("div").eq( idx );
        var $demasPuntos = $puntos.find("div").not( $puntoActual );

        var tl = new TimelineMax();
        tl.to( $slideshow, 1.7, { marginLeft: margen, ease: Elastic.easeOut.config(1, 0.75) } );
        tl.to( $puntoActual, 0.2, { backgroundColor: "#9370DB"}, "-=1.2" );
        tl.to( $demasPuntos, 0.2, { backgroundColor: "#a1a1a1"}, "-=1.2" );

        /* $slideshow.animate({
            marginLeft: margen
        }, 450);*/
    }
    $(".slideButton").on("click", function () {
        var idx = $(this).data("idx");
        idx = idx *-1;
        mover_por_punto( idx, true );
    });
    $(".js-btn").on("click", function () {
       var dir = $(this).data("mov");
       mover( dir, true );
    });
})();