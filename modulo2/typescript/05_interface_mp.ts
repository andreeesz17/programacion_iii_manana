export interface Sospechoso {
    id: string;
    nombre: string;
    edad: number;
    ocupacion?: string;
}

let sospechoso1: Sospechoso = {
    id: 'SOS_001',
    nombre: 'Juan Pérez',
    edad: 35
};

let sospechoso2: Sospechoso = {
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
