let badge: number = 19;
let nombreOficial: string = "Andrés García";
let enServicio: boolean = true;
let expedientesAsignados: number = 6;

console.log("=== VERIFICACIÓN DE OFICIAL ===");
if (badge > 18 && enServicio) {
    console.log('Oficial activo y autorizado');
} else {
    console.log('Oficial inactivo');
}

let delitosCatalogados: string[] = ['Robo', 'Homicidio', 'Fraude'];

console.log("\n=== DELITOS CATALOGADOS ===");
for (let i = 0; i < delitosCatalogados.length; i++) {
    console.log(delitosCatalogados[i]);
}

enum EstadoExpediente {
    Abierto,
    EnInvestigacion,
    Cerrado
}

console.log("\n=== ENUMERACIÓN DE ESTADOS ===");
console.log(EstadoExpediente);
console.log(EstadoExpediente.Cerrado);
