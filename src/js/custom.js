//
(function () {
    var teslaView = {
        loader: $(".divPreloader"),
        colores: ['blanco', 'verde', 'gris', 'cafe'],
        cambiarcolor: function ( img ){
            var $loader = teslaView.loader;
            $loader.fadeIn(150);
            if( img === undefined){
                var color = teslaView.colores[0];

                img     = "images/tesla/modelS-"+ color +".jpg";

            }

            //img = "https://images7.alphacoders.com/593/thumb-1920-593278.jpg?"+ ahora +"";
            $("<img>",{
                src: img,
                class: "img_responsive"
            })
                .load( function () {
                    $('.divVistaPrevia').find("img").remove();
                    $(this).appendTo('.divVistaPrevia');
                    $loader.fadeOut(150);
                })
            
        },
        init: function ( opciones) {
            $.extend( teslaView, opciones);
            for( var i=0; i< teslaView.colores.length; i++ ){
                var color = teslaView.colores[i];
                $("<option>",{
                    value: color,
                    text: color,
                }).appendTo('#cmbColor');
            }
            $('#cmbColor').bind("change", function () {
                var color   = $(this).val();
                var url     = "images/tesla/modelS-"+ color +".jpg";
                teslaView.cambiarcolor(url);
                //$("#cmbCarro").attr("src", url);
            });
            // Cambiar imagen al iniciar
            teslaView.cambiarcolor();
        }
    };
    teslaView.init({
        colores:['rojo', 'verde', 'gris', 'cafe','negro','blanco']
    });


})();