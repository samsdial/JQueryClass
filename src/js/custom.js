// funcion Anonima //
(function () {
   //
    var actual = 0;
    var ancho = 1920;

    var $slideshow = $(".slideShow ul");
    var slides  = $slideshow.find("li").length;

    var intervalo = setInterval(function () {
       mover("sig");
    }, 1500);

    function mover( dir, click ) {
        if ( click )
            clearInterval( intervalo);
        ( dir === "sig" ) ? actual -- : actual ++;
        if ( actual > 0 ){
            actual = (slides - 1 ) * -1;
        } else if ( actual  <= (slides * -1)){
            actual = 0;
        }
        var margen = actual * ancho;

        var tl = new TimelineMax();

        tl.to( $slideshow, 1.7, { marginLeft: margen, ease: Elastic.easeOut.config(1, 0.75) } );
       /* $slideshow.animate({
            marginLeft: margen
        }, 450);*/
    }
    $(".js-btn").on("click", function () {
       var dir = $(this).data("mov");
       mover( dir, true );
    });
})();