class Oficial {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    patrullar() {
        console.log(`${this.nombre} está patrullando...`);
    }

    calcularBonusInvestigacion() {
        return this.salario * 0.15;
    }

    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class Detective extends Oficial {
    calcularBonusInvestigacion() {
        return this.salario * 0.25;
    }

    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 3;
    }
}

class Agente extends Oficial {
    calcularBonusInvestigacion() {
        return this.salario * 0.10;
    }
}

const detectiveCarlos = new Detective('Carlos Andrés', 2500);
const agenteLuis = new Agente('Luis Rodríguez', 1800);

console.log("=== SISTEMA DE GESTIÓN DE PERSONAL POLICIAL ===\n");

detectiveCarlos.patrullar();
agenteLuis.patrullar();

console.log(`\nBonus de Investigación Detective ${detectiveCarlos.nombre}: $${detectiveCarlos.calcularBonusInvestigacion()}`);
console.log(`Bonus de Investigación Agente ${agenteLuis.nombre}: $${agenteLuis.calcularBonusInvestigacion()}`);

console.log(`\nHoras Extra (5 horas) Detective ${detectiveCarlos.nombre}: $${detectiveCarlos.horasExtra(5)}`);
console.log(`Horas Extra (4 horas) Agente ${agenteLuis.nombre}: $${agenteLuis.horasExtra(4)}`);
