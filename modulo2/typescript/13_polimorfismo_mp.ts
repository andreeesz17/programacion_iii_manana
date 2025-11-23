// Safe Case Police - Polimorfismo TypeScript
// Sistema de Gestión de Expedientes Policiales

import { PersonalPolicial } from "./11_herencia_mp";

export class EspecialistaForense extends PersonalPolicial {
    analizarEvidencia(): void {
        console.log(`${this.nombre} está analizando evidencia en el laboratorio forense`);
    }
}

const especialista = 
    new EspecialistaForense('Juan Rodríguez', 'Especialista Forense');
console.log(especialista.nombre);
console.log(especialista.rango);
especialista.patrullar();
especialista.analizarEvidencia();