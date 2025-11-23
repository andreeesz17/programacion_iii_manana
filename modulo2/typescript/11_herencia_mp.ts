// Safe Case Police - Herencia TypeScript
// Sistema de Gestión de Expedientes Policiales

export class PersonalPolicial {
    public nombre: string;
    public rango: string;

    constructor(
        nombre: string,
        rango: string
    ) {
        this.nombre = nombre;
        this.rango = rango;
    }

    patrullar(): void {
        console.log(`${this.nombre} está patrullando el área asignada`);
    }
}

export class Detective extends PersonalPolicial { }