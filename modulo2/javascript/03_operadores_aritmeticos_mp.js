console.log("Operadores Aritméticos en SafeCase");

expedientesActivos = 15;
expedientesNuevos = 3;

console.log("Expedientes y Operaciones");

console.log("Total de expedientes:");
totalExpedientes = expedientesActivos + expedientesNuevos;
console.log("Activos + Nuevos =", totalExpedientes);

console.log("Expedientes pendientes:");
expedientesCerrados = 5;
expedientesPendientes = totalExpedientes - expedientesCerrados;
console.log("Total - Cerrados =", expedientesPendientes);

console.log("Horas totales de trabajo:");
horasPorExpediente = 4;
horasTotales = expedientesPendientes * horasPorExpediente;
console.log("Expedientes por Horas =", horasTotales);

console.log("Expedientes por oficial:");
numeroOficiales = 3;
expedientesPorOficial = expedientesPendientes / numeroOficiales;
console.log("Pendientes ÷ Oficiales =", expedientesPorOficial);

console.log("Oficial asignado (por rotación):");
oficialesDisponibles = 5;
oficialAsignado = expedientesPendientes % oficialesDisponibles;
console.log("Expediente asignado al oficial #", oficialAsignado + 1);

console.log("Nivel de complejidad:");
nivelBase = 2;
factorComplejidad = 3;
complejidadTotal = nivelBase ** factorComplejidad;
console.log("Complejidad =", complejidadTotal);

console.log("\nOperadores de Comparación en SafeCase");

expedienteId = "2025001";
numeroCaso = 2025001;

console.log("Verificación de expediente:");
console.log("ID coincide (débil) ==", expedienteId == numeroCaso);
console.log("ID coincide (estricta) ===", expedienteId === numeroCaso);
console.log("ID no coincide (débil) !=", expedienteId != numeroCaso);
console.log("ID no coincide (estricta) !==", expedienteId !== numeroCaso);
console.log("Prioridad alta >", expedientesPendientes > 10);
console.log("Prioridad baja <", expedientesPendientes < 5);
console.log("Carga normal >=", expedientesPorOficial >= 4);
console.log("Carga manejable <=", expedientesPorOficial <= 6);

console.log("\nOperadores Lógicos en SafeCase");

expedienteActivo = true;
documentosCompletos = true;
console.log("¿Listo para procesar? &&", expedienteActivo && documentosCompletos);
console.log("¿Requiere atención? ||", expedientesPendientes > 10 || expedientesNuevos > 0);
console.log("¿No está cerrado? !", !expedienteActivo);