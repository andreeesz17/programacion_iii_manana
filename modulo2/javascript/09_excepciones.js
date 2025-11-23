try{
    console.log(variableNoDeclarada);
}catch(error){
    console.log("mensaje de error : ", error.message);
}

try{
    console.log("Intentado abrir archivo . . .");
    throw new Error("Archivo No encontrado")
}catch(error){
    console.log("mensaje de error : ", error.message);
}finally{
    console.log('Finalizando intento de abrir archivo');
}
