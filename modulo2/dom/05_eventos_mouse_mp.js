console.log("=== EVENTOS DE MOUSE Y TOUCH ===\n");


const zonaAutenticacion = document.getElementById('zonaAutenticacion');

zonaAutenticacion.addEventListener('mouseover', () => {
    zonaAutenticacion.style.background = '#FFC107';
    zonaAutenticacion.style.boxShadow = '0 0 10px rgba(255, 193, 7, 0.8)';
    console.log("Cursor sobre zona de autenticación - Preparando escaneo");
});

zonaAutenticacion.addEventListener('mouseout', () => {
    zonaAutenticacion.style.background = '#4CAF50';
    zonaAutenticacion.style.boxShadow = 'none';
    console.log("Cursor fuera de zona de autenticación");
});

zonaAutenticacion.addEventListener('click', () => {
    alert('Autenticación iniciada - Verifica tu identidad oficial');
    console.log("Autenticación confirmada");
});

const panelSensor = document.getElementById('panelSensor');

panelSensor.addEventListener('touchstart', () => {
    panelSensor.style.background = '#D32F2F';
    panelSensor.textContent = 'SENSOR ACTIVO - ESCANEANDO';
    console.log("Sensor táctil activado - Lectura biométrica en progreso");
});

panelSensor.addEventListener('touchend', () => {
    panelSensor.style.background = '#2196F3';
    panelSensor.textContent = 'PANEL TÁCTIL BIOMÉTRICO';
    console.log("Sensor táctil desactivado - Lectura completada");
});

panelSensor.addEventListener('click', () => {
    alert('Panel Biométrico - Escaneo de huella dactilar completado');
    console.log("Panel táctil confirmado");
});