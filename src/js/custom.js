$(document).ready(function($){
   // manejo de las img
   $("img")
       .attr("src","https://picsum.photos/300/300/?image=115") // Cambia el src
       .removeClass("rounded-circle")   // remover Clase
       .addClass("img-thumbnail");  // Agregar clase
    // Modificaciones al segundo bloque
    $(".col-js")
        .children()
        .find("p")
        .html("<u>HOLA</u> MUNDO");

    // referecia
    $("ul li")
        .eq(0)
        .css("color", "red").end()
        .eq(1)
        .css("color", "green")
        .addClass("txt_upper").end()
        .eq(2)
        .css("color", "blue")
        .addClass("txt_bold").end()
        .eq(3)
        .css("color", "gray")
        .addClass("txt_underline").end();
   // console.log($(".col-js").children());
});

