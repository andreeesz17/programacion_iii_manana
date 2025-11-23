class Oficial {
    constructor(nombre, badge, departamento) {
        this.nombre = nombre;
        this.badge = badge;
        this.departamento = departamento;
        this.estado = "En servicio";
    }

    iniciarTurno() {
        console.log(`${this.nombre} (Badge ${this.badge}) ha iniciado turno en ${this.departamento}`);
        this.estado = "En servicio";
    }

    investigar() {
        console.log(`${this.nombre} está investigando un caso...`);
    }

    registrarExpediente() {
        console.log(`${this.nombre} ha registrado un nuevo expediente`);
    }

    finalizarTurno() {
        console.log(`${this.nombre} (Badge ${this.badge}) ha finalizado el turno`);
        this.estado = "Fuera de servicio";
    }

    mostrarInfo() {
        console.log(`\n--- Información del Oficial ---`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Badge: ${this.badge}`);
        console.log(`Departamento: ${this.departamento}`);
        console.log(`Estado: ${this.estado}`);
    }
}

const oficial1 = new Oficial('Andrés Zambrano', 'BADGE_001', 'Homicidios');

oficial1.iniciarTurno();
oficial1.investigar();
oficial1.registrarExpediente();
oficial1.finalizarTurno();

console.log(`\nNombre del Oficial: ${oficial1.nombre}`);
console.log(`Badge: ${oficial1.badge}`);

oficial1.mostrarInfo();