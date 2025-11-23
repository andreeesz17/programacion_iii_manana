function registrarOficial(nombre: string): string {
    return `Oficial ${nombre} registrado`;
}
console.log(registrarOficial('Andrés'));

let calcularPena = function (anos: number, multiplicador: number): number {
    return anos * multiplicador;
};
console.log(calcularPena(5, 2));

function iniciarSistema(): void {
    console.log("Sistema de Expedientes Policiales Iniciado");
    console.log("Bienvenido a Safe Case Police");
}
iniciarSistema();

function calcularNivelAmenaza(indice: number): number {
    return Math.PI * indice * indice;
}

function mostrarAlerta(indice: number): void {
    console.log(`Nivel de Amenaza: ${indice * 10}`);
}
console.log(calcularNivelAmenaza(5));
mostrarAlerta(7);
