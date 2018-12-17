"use strict";!function(){function n(n,c){c&&clearInterval(s),"sig"===n?i--:i++,i>0?i=-1*(a-1):i<=-1*a&&(i=0);var l=i*t;(new TimelineMax).to(e,1.7,{marginLeft:l,ease:Elastic.easeOut.config(1,.75)})}var i=0,t=1920,e=$(".slideShow ul"),a=e.find("li").length,s=setInterval(function(){n("sig")},1500);$(".js-btn").on("click",function(){n($(this).data("mov"),!0)})}();
//# sourceMappingURL=custom.js.map
