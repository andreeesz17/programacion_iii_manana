console.log("=== PANEL DE CONTROL DE SEGURIDAD ===\n");

const indicador = document.getElementById('indicadorSeguridad');

const estadosSistema = {
  seguro: { color: '#27ae60', texto: 'SEGURO', sombra: 'rgba(39, 174, 96, 0.8)' },
  alerta: { color: '#e74c3c', texto: 'ALERTA ROJA', sombra: 'rgba(231, 76, 60, 0.8)' },
  amenaza_media: { color: '#f39c12', texto: 'AMENAZA MEDIA', sombra: 'rgba(243, 156, 18, 0.8)' },
  amenaza_alta: { color: '#d32f2f', texto: 'AMENAZA ALTA', sombra: 'rgba(211, 47, 47, 0.8)' }
};

let estadoActual = 'seguro';

function cambiarEstadoAlerta() {
  const alertas = ['alerta', 'amenaza_media', 'amenaza_alta'];
  const randomAlerta = alertas[Math.floor(Math.random() * alertas.length)];
  
  const estado = estadosSistema[randomAlerta];
  indicador.style.backgroundColor = estado.color;
  indicador.style.boxShadow = `0 0 20px ${estado.sombra}`;
  indicador.textContent = estado.texto;
  
  estadoActual = randomAlerta;
  console.log(`Sistema activado en estado: ${estado.texto}`);
}

function aumentarNivelAmenaza() {
  const secuencia = ['seguro', 'amenaza_media', 'amenaza_alta'];
  const indiceActual = secuencia.indexOf(estadoActual);
  
  if (indiceActual < secuencia.length - 1) {
    const nuevoEstado = secuencia[indiceActual + 1];
    const estado = estadosSistema[nuevoEstado];
    
    indicador.style.backgroundColor = estado.color;
    indicador.style.boxShadow = `0 0 20px ${estado.sombra}`;
    indicador.textContent = estado.texto;
    
    estadoActual = nuevoEstado;
    console.log(`Nivel de amenaza aumentado a: ${estado.texto}`);
  } else {
    console.log("Sistema en nivel máximo de alerta");
  }
}

function reiniciar() {
  const estado = estadosSistema.seguro;
  indicador.style.backgroundColor = estado.color;
  indicador.style.boxShadow = `0 0 20px ${estado.sombra}`;
  indicador.textContent = estado.texto;
  
  estadoActual = 'seguro';
  console.log("Sistema normalizado - Estado: SEGURO");
}
