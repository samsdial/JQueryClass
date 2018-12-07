"use strict";!function(){var n=0;$("body").on("click","h3",function(){var c="<h3 class='js-"+ ++n+"'>Dinamico.."+n+"</h3>";$(".title").append(c),3===n&&$(".js-3").bind("click",function(){console.log("Funcion dinamica")})})}();
//# sourceMappingURL=custom.js.map
