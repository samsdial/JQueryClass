"use strict";function previewFile(){var e=document.querySelector("img"),n=document.querySelector("input[type=file]").files[0],t=new FileReader;t.onloadend=function(){e.src=t.result},n?t.readAsDataURL(n):e.src=""}function genScreenshot(){html2canvas(document.body,{onrendered:function(e){if($("#box1").html(""),$("#box1").append(e),navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./)){var n=e.msToBlob();window.navigator.msSaveBlob(n,"Test file.png")}else $("#box1").attr("href",e.toDataURL("image/png")),$("#box1").attr("download","Test file.png"),$("#box1")[0].click()}})}previewFile();
//# sourceMappingURL=custom.js.map
