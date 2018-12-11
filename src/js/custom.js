//
(function () {
   var $cajaRoja = $(".cajaRoja");
   function mover( dir ) {
      $cajaRoja.clearQueue();
      switch ( dir ) {
         case "top":
            $cajaRoja.animate({
               top: "-=50px"
            },200);
         break;
         case "down":
            $cajaRoja.animate({
               top: "+=50px"
            }, 200);
         break;
         case "izq":
            $cajaRoja.animate({
               left: "-=50px"
            }, 200);
         break;
         case "der":
            $cajaRoja.animate({
               left: "+=50px"
            }, 200);
         break;
         default:
            $cajaRoja.animate({
               top: "0",
               left: "0"
            },1000);


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
   })
   $("button").on("click", function () {
      var dir = $(this).data("dir");
      mover(dir);
   })


})();