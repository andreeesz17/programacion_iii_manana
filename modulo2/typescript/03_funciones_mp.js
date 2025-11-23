// Safe Case Police - Funciones TypeScript
// funciones basicas
function registrarOficial(nombre) {
    return "Oficial ".concat(nombre, " registrado");
}
console.log(registrarOficial('Andrés'));

// funciones flecha
var calcularPena = function (anos, multiplicador) {
    return anos * multiplicador;
};
console.log(calcularPena(5, 2));

// Función sin retorno
function iniciarSistema() {
    console.log("Sistema de Expedientes Policiales Iniciado");
    console.log("Bienvenido a Safe Case Police");
}
iniciarSistema();

// Función con cálculo
function calcularNivelAmenaza(indice) {
    return Math.PI * indice * indice;
}

// Función void
function mostrarAlerta(indice) {
    console.log("Nivel de Amenaza: ".concat(indice * 10));
}
console.log(calcularNivelAmenaza(5));
mostrarAlerta(7);
