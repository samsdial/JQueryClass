//
(function () {
    var tiendaView = {
        colores: ['blanca', 'gris', 'negra', 'rojo', 'rosa', 'verde'],
        init: function (opciones) {
            $.extend(tiendaView, opciones);
            for (var i = 0; i < tiendaView.colores.length; i++) {
                var color = tiendaView.colores[i];
                $("<img>", {
                    'alt': color,
                    'data-color': color,
                    'src': "images/camiseta/thumbs/" + color + ".jpg",
                }).appendTo("#cmbColor");
            }
            $('#cmbColor img').hover(function () {
                var color = $(this)[0].getAttribute('alt');
                var url = "images/camiseta/large/" + color + ".jpg";
                $("#imgChange").attr('src', url);
                $("#lblColor").text(color).removeAttr('class').attr('class', 'txt_upper ml-2 cl--' + color);
            })

        }
    };
    tiendaView.init();
})();