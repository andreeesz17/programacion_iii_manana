import { Expediente } from "./09_acceso_mp";

const expediente1 = new Expediente("EXP-2024-001");

console.log("=== INFORMACIÓN DEL EXPEDIENTE ===");
console.log(expediente1.numeroExpediente);
console.log(expediente1.getCota());
console.log(expediente1.getAtributes());
