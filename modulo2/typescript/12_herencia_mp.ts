import { PersonalPolicial, Detective } from "./11_herencia_mp";

const oficial1 = new PersonalPolicial('Andrés García', 'Oficial');
console.log(oficial1.nombre);
console.log(oficial1.rango);
oficial1.patrullar();

console.log("\n");

const detective1 =
    new Detective('Carlos Mendoza', 'Detective Senior');
console.log(detective1.nombre);
console.log(detective1.rango);
detective1.patrullar();