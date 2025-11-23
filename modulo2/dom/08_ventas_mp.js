console.log("=== SISTEMA DE GESTIÓN DE EXPEDIENTES ===\n");

const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorExpedientes');
let expedientes = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const numeroExpediente = document.getElementById('numeroExpediente').value.trim();
  const descripcionCaso = document.getElementById('descripcionCaso').value.trim();
  const severidad = parseFloat(document.getElementById('severidad').value.trim());

  if (numeroExpediente && descripcionCaso && !isNaN(severidad)) {
    const nuevoExpediente = { 
      id: Date.now(), 
      numeroExpediente, 
      descripcionCaso, 
      severidad,
      fechaRegistro: new Date().toLocaleDateString()
    };
    
    expedientes.push(nuevoExpediente);
    renderizarExpediente(nuevoExpediente);
    formulario.reset();
    
    console.log(`Expediente ${numeroExpediente} registrado exitosamente`);
  } else {
    alert("Por favor, completa todos los campos correctamente");
  }
});

function renderizarExpediente({ id, numeroExpediente, descripcionCaso, severidad, fechaRegistro }) {
  const div = document.createElement('div');
  div.className = 'expediente';
  div.setAttribute('data-id', id);
  
  const nivelSeveridad = severidad >= 8 ? 'Crítico' : severidad >= 5 ? 'Alto' : 'Moderado';
  
  div.innerHTML = `
    <h3>Expediente: ${numeroExpediente}</h3>
    <p><strong>Caso:</strong> ${descripcionCaso}</p>
    <p><strong>Nivel de Severidad:</strong> ${nivelSeveridad} (${severidad}/10)</p>
    <p><strong>Fecha de Registro:</strong> ${fechaRegistro}</p>
    <div class="acciones">
      <button class="eliminar">Eliminar Expediente</button>
    </div>
  `;
  
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.expediente');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    const expedienteEliminado = expedientes.find(exp => exp.id === id);
    
    expedientes = expedientes.filter(exp => exp.id !== id);
    tarjeta.remove();
    
    console.log(`Expediente ${expedienteEliminado.numeroExpediente} eliminado del sistema`);
  }
});
