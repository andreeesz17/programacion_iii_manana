console.log("=== ARREGLOS DE EXPEDIENTES ===");


let casesNumber = [10, 5, 26, 9];
let emptyArray = new Array();
let emptyArray2 = [];
console.log(emptyArray);
console.log(emptyArray2);

console.log("\n=== ACCESO A ELEMENTOS DEL ARRAY ===");
console.log(`Primer expediente: ${casesNumber[0]}`);
console.log(`Último expediente: ${casesNumber[3]}`);

console.log("\n=== MODIFICAR UN ELEMENTO DEL ARRAY ===");
casesNumber[0] = 100;
console.log(`Expedientes actualizados: ${casesNumber}`);

console.log("\n=== AGREGAR EXPEDIENTE AL FINAL DEL ARRAY ===");
casesNumber.push(500);
console.log(`Expedientes con nuevo caso: ${casesNumber}`);

console.log("\n=== AGREGAR EXPEDIENTE AL INICIO DEL ARRAY ===");
casesNumber.unshift(888);
console.log(`Expedientes al inicio: ${casesNumber}`);

console.log("\n=== ELIMINAR EL ÚLTIMO EXPEDIENTE ===");
casesNumber.pop();
console.log(`Expedientes sin último: ${casesNumber}`);

console.log("\n=== ELIMINAR EL PRIMER EXPEDIENTE ===");
casesNumber.shift();
console.log(`Expedientes sin primero: ${casesNumber}`);

console.log("\n=== ITERACIÓN DE ARREGLO DE EXPEDIENTES ===");
let indice = 0;

console.log("\n--- Iteración con While ---");
while (indice < casesNumber.length) {
    console.log(`Posición ${indice}: Expediente #${casesNumber[indice]}`);
    indice++;
}

console.log("\n--- Iteración con For ---");
for (let i = 0; i < casesNumber.length; i++) {
    console.log(`Expediente ${i}: ${casesNumber[i]}`);
}

console.log("\n--- Iteración con For ... of ---");
for (let numeroExpediente of casesNumber) {
    console.log(`Caso registrado: ${numeroExpediente}`);
}

console.log("\n--- Iteración con For Each ---");
casesNumber.forEach(function(numeroExpediente, indice) {
    console.log(`Índice ${indice} - Expediente: ${numeroExpediente}`);
});
