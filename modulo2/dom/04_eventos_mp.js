console.log("=== EVENTOS DEL SISTEMA ===");

let expediente = null;

document.getElementById('crearExpediente').addEventListener('click', () => {
    expediente = document.createElement('p');
    expediente.textContent = "Nuevo Expediente: EXP-2024-001 - Estado: ABIERTO";
    expediente.style.padding = "10px";
    expediente.style.backgroundColor = "#f0f0f0";
    expediente.style.marginBottom = "10px";
    document.getElementById('contenedor').appendChild(expediente);
    console.log("Expediente creado exitosamente");
});

document.getElementById('eliminarExpediente').addEventListener('click', () => {
    if (expediente) {
        expediente.remove();
        console.log("Expediente eliminado del sistema");
    } else {
        console.log("No hay expediente para eliminar");
    }
});

function registrarOficial(mensaje) {
    alert(mensaje);
    console.log("Oficial registrado en el sistema");
}

document.getElementById('parrafo').addEventListener('dblclick', () => {
    alert("Expediente abierto y disponible para investigación");
    console.log("Doble click detectado - Expediente confirmado");
});

document.getElementById('numeroExpediente').addEventListener('input', (e) => {
    console.log(`Número de expediente ingresado: ${e.target.value}`);
});

document.getElementById('formularioExpediente').addEventListener('submit', (e) => {
    e.preventDefault();
    const numeroExpediente = document.getElementById('numeroExpediente').value;
    if (numeroExpediente.trim() !== '') {
        console.log(`Expediente ${numeroExpediente} registrado exitosamente`);
        alert(`Expediente ${numeroExpediente} ha sido registrado en el sistema`);
        document.getElementById('formularioExpediente').reset();
    } else {
        alert("Por favor, ingresa un número de expediente válido");
    }
});