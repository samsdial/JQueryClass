//
(function () {
   var $cajaRoja = $(".cajaRoja");
   $("#btnSize").on("click", function () {
      $cajaRoja.animate({
         width: '+=100px',
         height: '+=100px',
      },1000 ,function () {

      });
   })
})();