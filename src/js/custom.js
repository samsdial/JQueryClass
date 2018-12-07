// Funcion anomima
(function () {
    var contador = 0;

    $("body").on('click', 'h3', function () {
        /*console.log("mensaje    ")*/
        /*$("body").append(h3Dinamico);*/
        contador ++;
        var h3Dinamico = "<h3 class='js-"+ contador +"'>Dinamico.."+ contador +"</h3>";
        $(".title").append(h3Dinamico);
        if( contador === 3){
            $(".js-3").bind("click", function () {
                console.log("Funcion dinamica")
            })
        }

    })
})();