console.log("=== SELECCIÓN DE ELEMENTOS DOM ===\n");

const sistemaTitulo = document.getElementById('titulo');
console.log("--- Titulo del Sistema ---");
console.log(sistemaTitulo.textContent);

const alertas = document.getElementsByClassName('alerta');
console.log("\n--- Alertas Registradas ---");
Array.from(alertas).forEach(alerta => {
    console.log(`Alerta: ${alerta.textContent}`);
});

const evidencias = document.getElementsByClassName('evidencia');
console.log("\n--- Evidencias en Expediente ---");
Array.from(evidencias).forEach(evidencia => {
    console.log(`Evidencia: ${evidencia.textContent}`);
});

const oficiales = document.getElementsByName('oficial');
console.log("\n--- Oficial Asignado ---");
Array.from(oficiales).forEach(oficial => {
    console.log(`Oficial: ${oficial.textContent}`);
});