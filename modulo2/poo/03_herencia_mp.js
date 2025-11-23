class PersonalPolicial {
    constructor(nombre) {
        this.nombre = nombre;
    }

    reportar() {
        console.log(`${this.nombre} está realizando un reporte`);
    }
}

class Detective extends PersonalPolicial {
    investigar() {
        console.log(`${this.nombre} está investigando el caso...`);
    }
}

const detective1 = new Detective('Andi Zambrano');
const oficial1 = new PersonalPolicial('Carlos Andrés');

console.log("=== SISTEMA DE PERSONAL POLICIAL ===\n");

detective1.reportar();
detective1.investigar();

console.log("");

oficial1.reportar();