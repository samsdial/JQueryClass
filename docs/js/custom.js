"use strict";function squared(){for(var o=[],e=0;e<numeros.length;e++)o.push(numeros[e]*numeros[e]);return console.log(o)}var numeros=[1,2,3,4,5];console.time("Imperativo"),squared(numeros),console.timeEnd("Imperativo"),console.time("Declarativo"),console.log(numeros.map(function(o){return o*o})),console.timeEnd("Declarativo");
//# sourceMappingURL=custom.js.map
