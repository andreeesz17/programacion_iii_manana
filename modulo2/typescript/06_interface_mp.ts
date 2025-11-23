interface Oficial {
    badge: string;
    nombre: string;
    correo?: string; 
}

const oficial1: Oficial = {
    badge: 'BADGE_001',
    nombre: 'Carlos Andrés García'
};

const oficial2: Oficial = {
    badge: 'BADGE_002',
    nombre: 'Ana María López',
    correo: 'ana.lopez@safecasepolice.com'
};

console.log("=== OFICIALES DEL SISTEMA ===");
console.log(oficial1);
console.log(oficial1.badge);
console.log(oficial1.nombre);
console.log(oficial1.correo); 

console.log("\n");
console.log(oficial2);
console.log(oficial2.badge);
console.log(oficial2.nombre);
console.log(oficial2.correo);
