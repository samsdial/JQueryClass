//
(function () {
   $("img").on("mouseenter", function () {
      console.log($(this).data("color"));
      console.log($(this).attr("alt"));
   });
})();