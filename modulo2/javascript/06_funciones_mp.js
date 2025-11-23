console.log("=== FUNCIONES CLÁSICAS ===");


function initializeSystem() {
    console.log("Sistema de Gestión Policial Iniciado");
}
initializeSystem();
initializeSystem();
initializeSystem();

console.log("\n=== FUNCIONES CON PARÁMETROS Y RETORNO ===");


function calculateTotalSentence(yearA, yearB) {
    return yearA + yearB;
}
let sentenceResult = calculateTotalSentence(5, 7);
console.log(`Pena Total: ${sentenceResult} años`);

console.log("\n=== FUNCIÓN FLECHA ===");


const calculateProbationTime = (totalSentence, timeServed) => {
    return totalSentence - timeServed;
}
let probationResult = calculateProbationTime(9, 5);
console.log(`Tiempo de Libertad Condicional: ${probationResult} años`);

console.log("\n=== FUNCIÓN CON RETORNO DIRECTO ===");


const calculateRiskSquare = riskLevel => riskLevel * riskLevel;
console.log(`Nivel de Riesgo Elevado: ${calculateRiskSquare(5)}`);

console.log("\n=== FUNCIÓN CON PARÁMETROS POR DEFECTO ===");


function generateReport(officerName, greeting = "Oficial") {
    return greeting + " " + officerName;
}
let report1 = generateReport("Andrés");
let report2 = generateReport("Andrés", "Detective");
console.log(report1);
console.log(report2);

console.log("\n=== FUNCIÓN CONDICIONAL ===");


function isCaseResolved(caseNumber) {
    if (caseNumber % 2 === 0) {
        console.log(`Caso ${caseNumber} está RESUELTO`);
    } else {
        console.log(`Caso ${caseNumber} está ABIERTO`);
    }
}
isCaseResolved(4);
isCaseResolved(7);

console.log("\n=== FUNCIÓN DE CÁLCULO ===");


function calculateFine(baseAmount, penaltyMultiplier) {
    let totalFine = (baseAmount * penaltyMultiplier) / 2;
    console.log(`Multa Total: $${totalFine}`);
}
calculateFine(5, 10);
