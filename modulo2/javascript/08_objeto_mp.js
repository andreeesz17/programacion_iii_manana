console.log("=== OBJETOS - OFICIAL POLICIAL ===");

let oficial = {
    nombre: "Andrés",
    badge: 19,
    departamento: "Homicidios"
};

console.log(oficial);
console.log(`Nombre del Oficial: ${oficial.nombre}`);
console.log(`Badge: ${oficial.badge}`);
console.log(`Departamento: ${oficial["departamento"]}`);

console.log("\n=== MODIFICACIÓN DEL OBJETO ===");
oficial.nombre = "Andrés García";
console.log(oficial);

console.log("\n=== INCLUIR CLAVE AL OBJETO ===");
oficial.estacion = "Policía Nacional Central";
console.log(oficial);

console.log("\n=== ELIMINAR CLAVE DEL OBJETO ===");
delete oficial.estacion;
console.log(oficial);

console.log("\n=== RECORRER UN OBJETO ===");
for (let propiedad in oficial) {
    console.log(propiedad);
}

console.log("\n=== MOSTRAR CLAVES CON Object.keys ===");
console.log(Object.keys(oficial));

console.log("\n=== MOSTRAR VALORES CON Object.values ===");
console.log(Object.values(oficial));

console.log("\n=== OBJETOS ANIDADOS - EXPEDIENTE COMPLETO ===");

let expediente = {
    numeroExpediente: "EXP-2024-001",
    nombreSospechoso: "Juan",
    apellidoSospechoso: "Pérez",
    contacto: {
        correo: "juan.perez@email.com",
        telefono: "0984936641",
        celular: "0987654321"
    },
    cargos: [
        {
            delito: "Robo Agravado",
            severidad: 10
        },
        {
            delito: "Receptación de Bienes Robados",
            severidad: 9
        }
    ]
};

console.log("Expediente Completo: ", expediente);