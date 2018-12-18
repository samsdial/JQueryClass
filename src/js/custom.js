

// funcion Anonima //
(function () {
    $.slideShow = function (opciones) {
        opciones = $.extend({
            divDestino : ".slideShow",
            divDestinoControler : ".controller",
            intervalo : 1500,
            velocidad: 1200,
            ancho: 1920,
            color: "#ba007c",
            slides: [],
        }, opciones);
        if( opciones.slides.length == 0){
            console.log("faltan slider");
            return;
        }
        opciones.velocidad = opciones.velocidad / 1000;
        //
        var actual = 0;
        var ancho = opciones.ancho;

        var slides  = opciones.slides.length;
        //Creacion del sliderShow
        var contenido = "";
        contenido += "<ul>"
        for( var i=0; i< slides ; i++ ){
            contenido += '<li><img alt="" src="'+ opciones.slides[i] +'"></li>';
        }
        contenido += "</ul>";
        $( opciones.divDestino ).append( contenido );
        var $slideshow = $(opciones.divDestino + " ul");

        //Creacion de Botones slider
        contenido = "";
        contenido += '<div class="slideShowButtons">';
        for( var i=0; i< slides; i++){
            contenido += '<div data-idx="'+ i +'" class="slideButton"></div>'
        }
        contenido += '</div>';
        $( opciones.divDestinoControler ).append( contenido );



        var $puntos = $(".slideShowButtons");
        $puntos.find("div").eq(0).css({
            backgroundColor: opciones.color
        });
        var intervalo = setInterval(function () {
            mover("sig");
        }, opciones.intervalo);

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
            tl.to( $slideshow, opciones.velocidad , { marginLeft: margen, ease: Elastic.easeOut.config(1, 0.75) } );
            tl.to( $puntoActual, 0.2, { backgroundColor: opciones.color}, "-=1.2" );
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
    };

})();