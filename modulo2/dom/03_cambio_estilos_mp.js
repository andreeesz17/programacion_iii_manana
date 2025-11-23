console.log("=== MANIPULACIÓN DE ESTILOS DOM ===");

const mensaje = document.getElementById("mensaje");
mensaje.textContent = "EXPEDIENTE EN INVESTIGACIÓN";
mensaje.style.color = "#DC143C";
mensaje.style.fontSize = "24px";
mensaje.style.fontWeight = "bold";

console.log("Estado del expediente actualizado");

const link = document.getElementById('link');
link.setAttribute('href', 'https://www.policia.gob.ec/');
link.textContent = "Acceder al Sistema de Expedientes";
link.classList.add("boton-accion");
link.style.display = "inline-block";
link.style.marginTop = "20px";

console.log("Link de acción configurado exitosamente");