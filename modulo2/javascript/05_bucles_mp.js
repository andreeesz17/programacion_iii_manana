const listExpedients = () => {
    console.log("=== Expedientes Procesados ===");
    for (let i = 1; i <= 10; i++) {
        console.log(`Expediente #${i}`);
    }
};


const calculateTotalCases = () => {
    let sumaTotal = 0;
    for (let i = 1; i <= 10; i++) {
        sumaTotal += i;
    }
    console.log(`Total de casos registrados: ${sumaTotal}`);
    return sumaTotal;
};


const generateArrestHistory = (officerId) => {
    console.log(`=== Histórico de Arrestos - Oficial ${officerId} ===`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${officerId} x ${i} = ${officerId * i} arrestos`);
    }
};


const processFullName = (fullName) => {
    console.log(`=== Procesando Nombre: ${fullName} ===`);
    for (let i = 0; i < fullName.length; i++) {
        console.log(`Carácter ${i}: ${fullName[i]}`);
    }
};


const calculateRiskElevation = () => {
    console.log(`=== Niveles de Riesgo Elevados ===`);
    for (let i = 1; i <= 10; i++) {
        console.log(`Caso ${i}: Riesgo Level ${i ** 2}`);
    }
};


const verifyOfficersOnDuty = () => {
    console.log(`=== Oficiales en Turno ===`);
    let turno = 1;
    while (turno <= 6) {
        console.log(`Turno ${turno}: Oficial en servicio`);
        turno++;
    }
};


const reviewEvidenceInventory = () => {
    let evidenceArray = [14, 25, 18, 32, 27];
    let index = 1;
    console.log(`=== Inventario de Evidencias ===`);
    while (index < evidenceArray.length) {
        console.log(`Posición ${index}: ${evidenceArray[index]} items catalogados`);
        index++;
    }
};


const filterResolvedCases = () => {
    let caseNumber = 1;
    console.log(`=== Casos Resueltos ===`);
    while (caseNumber <= 10) {
        if (caseNumber % 2 === 0) {
            console.log(`Caso ${caseNumber}: RESUELTO`);
        }
        caseNumber++;
    }
};


const surveillanceCountdown = () => {
    let countdown = 5;
    console.log(`=== Iniciando Vigilancia ===`);
    do {
        console.log(`Segundos restantes: ${countdown}`);
        countdown--;
    } while (countdown !== 0);
    console.log("Vigilancia iniciada");
};


const generateOfficialReports = (officialId) => {
    let reportNumber = 1;
    console.log(`=== Reportes del Oficial ${officialId} ===`);
    while (reportNumber <= 10) {
        console.log(`Oficial ${officialId} - Reporte #${reportNumber}`);
        reportNumber++;
    }
};


const findCaseWithMostEvidence = () => {
    let evidenceArray = [7, 12, 15, 10, 9];
    let index = 1;
    let maxEvidence = evidenceArray[0];
    
    console.log(`=== Búsqueda de Caso Crítico ===`);
    while (index < evidenceArray.length) {
        if (evidenceArray[index] > maxEvidence) {
            maxEvidence = evidenceArray[index];
        }
        index++;
    }
    console.log(`Máximo de evidencia encontrada: ${maxEvidence} items`);
    return maxEvidence;
};


listExpedients();
calculateTotalCases();
generateArrestHistory(4);
processFullName("FRANCISCO");
calculateRiskElevation();
verifyOfficersOnDuty();
reviewEvidenceInventory();
filterResolvedCases();
surveillanceCountdown();
generateOfficialReports("BADGE_001");
findCaseWithMostEvidence();

