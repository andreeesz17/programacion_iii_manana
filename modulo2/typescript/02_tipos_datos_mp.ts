// Safe Case Police - Tipos de Datos TypeScript
// Sistema de Gestión de Expedientes Policiales

var badge = 19;
var nombreOficial = "Andrés García";
var enServicio = true;
var expedientesAsignados = 6;

console.log("=== VERIFICACIÓN DE OFICIAL ===");
if (badge > 18 && enServicio) {
    console.log('Oficial activo y autorizado');
}
else {
    console.log('Oficial inactivo');
}

var delitosCatalogados = ['Robo', 'Homicidio', 'Fraude'];

console.log("\n=== DELITOS CATALOGADOS ===");
for (var i = 0; i < delitosCatalogados.length; i++) {
    console.log(delitosCatalogados[i]);
}

var EstadoExpediente;
(function (EstadoExpediente) {
    EstadoExpediente[EstadoExpediente["Abierto"] = 0] = "Abierto";
    EstadoExpediente[EstadoExpediente["EnInvestigacion"] = 1] = "EnInvestigacion";
    EstadoExpediente[EstadoExpediente["Cerrado"] = 2] = "Cerrado";
})(EstadoExpediente || (EstadoExpediente = {}));

console.log("\n=== ENUMERACIÓN DE ESTADOS ===");
console.log(EstadoExpediente);
console.log(EstadoExpediente.Cerrado);
