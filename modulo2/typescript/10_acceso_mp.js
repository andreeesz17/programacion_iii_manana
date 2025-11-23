"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Safe Case Police - Uso de Encapsulamiento TypeScript
// Sistema de Gestión de Expedientes Policiales

var _09_acceso_1 = require("./09_acceso");

var expediente1 = new _09_acceso_1.Expediente('EXP-2024-001');

console.log("=== INFORMACIÓN DEL EXPEDIENTE ===");
console.log(expediente1.numeroExpediente);
console.log(expediente1.getCota());
console.log(expediente1.getAtributes());
