"use strict";$(document).ready(function(a){a("#submit").click(function(){var e=a("#name").val(),r=a("#lastName").val(),o=a("#email").val(),s=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/,l=a("#phone").val(),t=a("#city").val();if(""!=e&&""!=r&&""!=o&&""!=l&&""!=t){a(".city + .error").removeClass("i");var i="&name="+e+"&lastName="+r+"&email="+o+"&phone="+l+"&city="+t;return a.ajax({method:"Post",url:"contact.php",dataType:"json",data:i}).done(function(e){e.success?(a(".alerta p").fadeIn("slow"),a(".alerta p").html("Muchas Gracias por contáctarnos, pronto nos estaremos comunicando contigo."),a("#name").val(""),a("#lastNamee").val(""),a("#email").val(""),a("#phone").val(""),a("#city").val("")):(a(".alerta p").fadeIn("slow"),a(".alerta p").html("Error, intente más tarde por favor."))}),!1}return""==e?(a(".name + .error").addClass("i"),a("#name").focus(),!1):(a(".name + .error").removeClass("i"),""==r?(a(".lastname + .error").addClass("i"),a("#lastName").focus(),!1):(a(".lastname + .error").removeClass("i"),""!=o&&s.test(o)?(a(".email + .error").removeClass("i"),""==l?(a(".cel + .error").addClass("i"),a("#phone").focus(),!1):(a(".cel + .error").removeClass("i"),""==t?(a(".city + .error").addClass("i"),a("#city").focus(),!1):void a(".city + .error").removeClass("i"))):(a(".email + .error").addClass("i"),a("#email").focus(),!1)))})});
//# sourceMappingURL=custom.js.map