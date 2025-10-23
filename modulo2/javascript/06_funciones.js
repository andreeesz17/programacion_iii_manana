console.log("FUNCIONES");

console.log("Forma Clásica");
function saludar() {
    console.log("Hola desde una Función Clásica");
}
saludar();
saludar();
saludar();

console.log("Forma con Parámetros y Retorno");
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(5, 7);
console.log("La suma es:", resultado);

console.log("Función Flecha");
const resta = (a,b) => {
    return a - b;
}
let resultadoResta = resta(9,5);
console.log("La resta es:", resultadoResta);

console.log("Función Retorno Directo");
const cuadrado = x =>x*x;
console.log("El cuadrado de 5 es:", cuadrado(5));

console.log("Función con Parámetros por Defecto");
function saludar(nombre, saludo="Hola"){
    return saludo + " " + nombre;
}
let saludo1 = saludar ("Andrés");
let saludo2 = saludar ("Andrés", "Buenos días");
console.log(saludo1);
console.log(saludo2);

function esPar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es par");
  } else {
    console.log(numero + " no es par");
  }
}
esPar(4);
esPar(7);

function areaTriangulo(base, altura) {
  let area = (base * altura) / 2;
  console.log("El área del triángulo es:", area);
}
areaTriangulo(5, 10);