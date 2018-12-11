//
(function () {

   function mover( dir ) {
        var $cajaRoja = $(".cajaRoja");
        $cajaRoja.clearQueue();
        var $cajaAzul = $(".cajaAzul");
        var tl = new TimelineMax();

      switch ( dir ) {
         case "top":
            $cajaRoja.animate({
               top: "-=100px"
            },450);
            tl.to( $cajaAzul, 0.45, { y:"-=100"} );
         break;
         case "down":
            $cajaRoja.animate({
               top: "+=100px"
            }, 450);
             tl.to( $cajaAzul, 0.45, { y:"+=100"} );
         break;
         case "izq":
            $cajaRoja.animate({
               left: "-=100px"
            }, 450);
             tl.to( $cajaAzul, 0.45, { x:"-=100"} );
         break;
         case "der":
            $cajaRoja.animate({
               left: "+=100px"
            }, 200);
             tl.to( $cajaAzul, 0.45, { x:"+=100"} );
         break;
          case "reset":
            $cajaRoja.animate({
               top: "0",
               left: "0",
                width: "50px",
                height: "50px",
            },450);
             tl.to( $cajaAzul, 0.45, {
                 y:"0",
                 x:"0",
                 width:"50px",
                 height:"50px",
                 backgroundColor: "blue",
             } );

      }
   }
   $(document).on("keypress", function (e) {
      var keyCode = e.keyCode;
      switch ( keyCode) {
         case 119:
            mover("top");
         break;
         case 115:
            mover("down");
         break;
         case 97:
            mover("izq");
         break;
         case 100:
            mover("der");
         break;
         default:
            mover("reset")
      }
   });
   $("#js-ancho").on("click", function () {
       var $cajaRoja = $(".cajaRoja");
       $cajaRoja.clearQueue();
       var $cajaAzul = $(".cajaAzul");
       var tl = new TimelineMax();

       $cajaRoja.animate({
          width: "+=150",
          height:  "+=150"
       }, 500);
       tl.to( $cajaAzul, 0.5, {
           width: "+=150",
           height:  "+=150",
           backgroundColor: "green"
       });

   });
   $("button").on("click", function () {
      var dir = $(this).data("dir");
      mover(dir);
   })


})();