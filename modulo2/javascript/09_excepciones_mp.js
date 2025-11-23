console.log("=== MANEJO DE EXCEPCIONES ===\n");


console.log("--- Error de Variable No Declarada ---");
try {
    console.log(numeroExpedienteNoDeclarado);
} catch (error) {
    console.log("Error capturado: ", error.message);
}


console.log("\n--- Error Personalizado con Finally ---");
try {
    console.log("Intentando acceder a base de datos de expedientes...");
    throw new Error("Base de datos no disponible - Servidor en mantenimiento");
} catch (error) {
    console.log("Error capturado: ", error.message);
} finally {
    console.log("Cerrando conexión con la base de datos");
}


console.log("\n--- Error al Procesar Expediente ---");
try {
    let expediente = null;
    if (!expediente) {
        throw new Error("Expediente no encontrado en el sistema");
    }
    console.log("Procesando expediente...");
} catch (error) {
    console.log("Error: ", error.message);
} finally {
    console.log("Finalizando proceso de búsqueda de expediente");
}


console.log("\n--- Error de Autenticación ---");
try {
    console.log("Verificando credenciales del oficial...");
    let credencialesValidas = false;
    if (!credencialesValidas) {
        throw new Error("Credenciales inválidas - Acceso denegado");
    }
} catch (error) {
    console.log("Error de seguridad: ", error.message);
} finally {
    console.log("Fin de intento de autenticación");
}
