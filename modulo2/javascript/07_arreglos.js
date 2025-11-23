console.log("ARRAYS O ARREGLOS");
let numeros=[10,5,26,9];
let arrayVacio = new Array();
let arrayVacio2 = [];
console.log(arrayVacio);
console.log(arrayVacio2);
console.log("Acceso a los elementos del array");
console.log(numeros[0]);
console.log(numeros[3]);

console.log("Modificar un elemento del array");
numeros[0]=100;
console.log(numeros);

console.log("Agregar elemento al Array");
numeros.push(500);
console.log(numeros);

console.log("Agregar elemento al inicio del Array");
numeros.unshift(888);
console.log(numeros);

console.log("Eliminar el último elemento del Array");
numeros.pop();
console.log(numeros);

console.log("Eliminar el primer elemento del Array");
numeros.shift();
console.log(numeros);

console.log("Iteración de array del array");
let indice=0

console.log("Iteración con While");
while(indice<numeros.length){
    console.log("valor ", indice, "es",  numeros[indice]);
    indice++;
}

console.log("Iteración con For");
for (let i=0; i <numeros.length;i++){
    console.log(numeros[i]);
}

console.log("Iteración con For ... of");
for (let valor of numeros){
    console.log(valor);
}

console.log("Iteración con For Each");
numeros.forEach(function(valor, indice){
    console.log(indice, valor);
});
