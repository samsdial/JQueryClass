"use strict";!function(){var t=0;$("button").on("click",function(){t++;var n=$(".js-cmbBase").val(),d="";d+="<tr>",d+="<td>"+n+"</td>",d+="<td>x</td>",d+="<td>"+t+"</td>",d+="<td>=</td>",d+="<td>"+t*n+"</td>",d+="</tr>",$("table").append(d)}),$(".js-cmbBase").on("change",function(){$("tr").not(":eq(0)").remove(),t=0})}();
//# sourceMappingURL=custom.js.map
