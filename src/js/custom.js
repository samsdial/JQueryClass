//impertativo vs declarativo

const numeros = [1,2,3,4,5];
/*CODIGO IMPERATIVO*/
console.time('Imperativo');
function squared() {
    let arr = [];
    for (let i = 0; i < numeros.length; i++){
        arr.push(numeros[i] * numeros[i])
    }
    return console.log(arr);
}
squared(numeros);
console.timeEnd('Imperativo');
/*CODDIGO DECLARATIVO*/
console.time('Declarativo');
console.log( numeros.map( num => num * num));
console.timeEnd('Declarativo');