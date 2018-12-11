//
(function () {
   var $cajaRoja = $(".cajaRoja");
   $("#btnSize").on("click", function () {
      $cajaRoja.animate({
         width: '+=100px',
         height: '+=100px',
      },function () {
         console.log("termino An");
      }).animate({
         width: '+=100px',
         height: '+=100px',
      }).animate({
         opacity: 0.1
      },1500, function () {
         $(this).remove();
      });
   })
})();