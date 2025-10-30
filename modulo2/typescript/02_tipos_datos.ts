let edad: number = 19;
let nombre: string = "Andrés";
let activo: boolean = true;
let valor: any = 6;

if (edad>18 && activo){
    console.log('trabajador activo');
} else {
    console.log('No trabaja');
}

let frutas: string[] =['manzana', 'banana', 'orange'];
for (let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}

enum Estado {
    Pendiente,
    Enviado,
    Entregado
}

console.log(Estado);
console.log(Estado.Entregado);