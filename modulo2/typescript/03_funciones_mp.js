function registrarOficial(nombre) {
    return "Oficial ".concat(nombre, " registrado");
}
console.log(registrarOficial('Andrés'));

var calcularPena = function (anos, multiplicador) {
    return anos * multiplicador;
};
console.log(calcularPena(5, 2));

function iniciarSistema() {
    console.log("Sistema de Expedientes Policiales Iniciado");
    console.log("Bienvenido a Safe Case Police");
}
iniciarSistema();

function calcularNivelAmenaza(indice) {
    return Math.PI * indice * indice;
}

function mostrarAlerta(indice) {
    console.log("Nivel de Amenaza: ".concat(indice * 10));
}
console.log(calcularNivelAmenaza(5));
mostrarAlerta(7);
