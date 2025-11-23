const validateRiskLevel = (riskScore) => {
    if (riskScore > 30) {
        return "Riesgo Alto - Requiere vigilancia inmediata";
    }
    return "Riesgo Bajo - Expediente controlado";
};


const validateOfficialCredentials = (credentials) => {
    if (credentials === "BADGE_001") {
        return "Oficial autenticado - Acceso concedido";
    } else {
        return "Credenciales inválidas - Acceso denegado";
    }
};


const evaluateCaseSeverity = (severityScore) => {
    if (severityScore >= 9) {
        return "Crítico - Delito grave";
    } else if (severityScore >= 6) {
        return "Mayor - Delito moderado";
    } else {
        return "Menor - Falta leve";
    }
};


const canInterrogate = (estuvoDetenido, tieneAbogado) => {
    if (estuvoDetenido) {
        if (tieneAbogado) {
            return "Interrogatorio permitido con presencia de abogado";
        } else {
            return "No puede interrogarse sin representación legal";
        }
    } else {
        return "Sospechoso no detenido";
    }
};


const canInterrogateSimplified = (estuvoDetenido, tieneAbogado) => {
    if (estuvoDetenido && tieneAbogado) {
        return "Interrogatorio permitido con presencia de abogado";
    } else {
        return "Interrogatorio no permitido";
    }
};


const evaluateEvidenceDay = (diaRecoleccion) => {
    switch (diaRecoleccion) {
        case "lunes":
            return "Evidencia procesada - Inicio de semana";
        case "viernes":
            return "Evidencia en custodia - Fin de semana";
        default:
            return "Evidencia en almacén de pruebas";
    }
};


const findHighestPriority = (prioridad1, prioridad2, prioridad3) => {
    switch (true) {
        case (prioridad1 >= prioridad2 && prioridad1 >= prioridad3):
            return "Expediente 1 - Máxima prioridad";
        case (prioridad2 >= prioridad1 && prioridad2 >= prioridad3):
            return "Expediente 2 - Máxima prioridad";
        default:
            return "Expediente 3 - Máxima prioridad";
    }
};


const findMaxCaseload = (oficial_A, oficial_B, oficial_C) => {
    if (oficial_A > oficial_B && oficial_A > oficial_C) {
        return "Oficial A tiene más casos asignados";
    } else if (oficial_B > oficial_A && oficial_B > oficial_C) {
        return "Oficial B tiene más casos asignados";
    } else {
        return "Oficial C tiene más casos asignados";
    }
};


console.log(validateRiskLevel(35));
console.log(validateOfficialCredentials("BADGE_001"));
console.log(evaluateCaseSeverity(7));
console.log(canInterrogate(true, true));
console.log(canInterrogateSimplified(true, true));
console.log(evaluateEvidenceDay("lunes"));
console.log(findHighestPriority(10, 5, 8));
console.log(findMaxCaseload(10, 20, 15));

