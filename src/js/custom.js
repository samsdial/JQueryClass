// Funcion anomima
(function () {
 var contador = 0; // Va acontar cada vez Click desde 0
     $("button").on("click", function () {
         contador ++; // Sumar
         var base = $('.js-cmbBase').val();
         var linea = ""; // Crear una linea
         // Concatenar para crear el tr de la tabla
         linea += '<tr>';
         linea +=       '<td>'+base+'</td>';
         linea +=       '<td>x</td>';
         linea +=       '<td>'+ contador +'</td>'; // muestra el contador
         linea +=       '<td>=</td>';
         linea +=       '<td>'+( contador * base )+'</td>';
         linea += '</tr>';
         $("table").append( linea );
     });
     // Funcion que detecta el cambio de la base
    $(".js-cmbBase").on('change', function () {
       $("tr").not(":eq(0)").remove();
       contador = 0;
    });
})();