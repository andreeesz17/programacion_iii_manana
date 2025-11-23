"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sospechoso = void 0;

// Safe Case Police - Interfaces TypeScript
// Sistema de Gestión de Expedientes Policiales

// Interface básica de Sospechoso
var sospechoso1 = {
    id: 'SOS_001',
    nombre: 'Juan Pérez',
    edad: 35
};

// Interface con propiedades opcionales
var sospechoso2 = {
    id: 'SOS_002',
    nombre: 'Carlos Mendoza',
    edad: 28,
    ocupacion: 'Vendedor'
};

console.log("=== INTERFAZ SOSPECHOSO ===");
console.log(sospechoso1);
console.log(sospechoso1.id);
console.log(sospechoso1.nombre);
console.log(sospechoso1.edad);

console.log("\n");
console.log(sospechoso2);
console.log(sospechoso2.id);
console.log(sospechoso2.nombre);
console.log(sospechoso2.ocupacion);

