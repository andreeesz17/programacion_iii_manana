const evidencias = [
  { tipoEvidencia: "Arma de Fuego", descripcion: "9mm Pistola", valorEvidencia: 450, cantidad: 2, ubicacion: "Bóveda A" },
  { tipoEvidencia: "Droga Incautada", descripcion: "Cocaína", valorEvidencia: 2500, cantidad: 1, ubicacion: "Bóveda B" },
  { tipoEvidencia: "Dinero en Efectivo", descripcion: "Efectivo incautado", valorEvidencia: 15000, cantidad: 5, ubicacion: "Bóveda C" },
  { tipoEvidencia: "Documentos", descripcion: "Documentos de identidad falsos", valorEvidencia: 300, cantidad: 8, ubicacion: "Almacén D" },
  { tipoEvidencia: "Tecnología", descripcion: "Laptops robadas", valorEvidencia: 3500, cantidad: 4, ubicacion: "Almacén E" },
  { tipoEvidencia: "Joyería", descripcion: "Joyas incautadas", valorEvidencia: 8000, cantidad: 12, ubicacion: "Bóveda F" },
  { tipoEvidencia: "Ropa Evidencia", descripcion: "Prendas del delito", valorEvidencia: 150, cantidad: 20, ubicacion: "Almacén G" },
  { tipoEvidencia: "Muestras Biológicas", descripcion: "ADN y fluidos", valorEvidencia: 500, cantidad: 6, ubicacion: "Refrigerador H" },
  { tipoEvidencia: "Dispositivos Electrónicos", descripcion: "Teléfonos y tablets", valorEvidencia: 2200, cantidad: 9, ubicacion: "Almacén I" },
  { tipoEvidencia: "Vehículos", descripcion: "Auto de lujo robado", valorEvidencia: 45000, cantidad: 1, ubicacion: "Garaje J" }
];

const tabla = document.getElementById('cuerpoTabla');

console.log("=== INVENTARIO DE EVIDENCIAS ===");
console.log(`Total de tipos de evidencia: ${evidencias.length}\n`);

evidencias.forEach(evidencia => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${evidencia.tipoEvidencia}</td>
    <td>${evidencia.descripcion}</td>
    <td>$${evidencia.valorEvidencia.toFixed(2)}</td>
    <td>${evidencia.cantidad}</td>
    <td>${evidencia.ubicacion}</td>
  `;
  tabla.appendChild(fila);
  
  console.log(`${evidencia.tipoEvidencia} - ${evidencia.descripcion} - ${evidencia.cantidad} unidades`);
});
