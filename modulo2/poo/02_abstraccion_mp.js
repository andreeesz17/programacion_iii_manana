class Sospechoso {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    puedeSerInterrogado() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad - Puede ser interrogado sin supervisor`);
        } else {
            console.log(`${this.nombre} es menor de edad - Requiere presencia de representante legal`);
        }
    }

    mostrarDatos() {
        console.log(`\n--- Información del Sospechoso ---`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

const sospechoso1 = new Sospechoso('Carlos Zambrano', 17);

sospechoso1.puedeSerInterrogado();
sospechoso1.mostrarDatos();