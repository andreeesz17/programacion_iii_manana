interface usuario {
    id: number;
    nombre: string;
    correo?: string;
}

const usuario1: usuario = {
    id:12,
    nombre: 'Carlos Andrés Zambrano'
}
const usuario2: usuario = {
    id:13,
    nombre:'Pablo Escobar',
    correo: 'elpatron@delmal.com'
}

console.log(usuario1);
console.log(usuario1.id);
console.log(usuario1.nombre);
console.log(usuario1.correo);
console.log(usuario2);
console.log(usuario2.id);
console.log(usuario2.nombre);
console.log(usuario2.correo);