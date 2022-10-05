var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) { //El nombre del parámetro "estudiante" puede ser cualquier letra o palabra 
    console.log(`Hola, ${estudiante}`);
}

for ( var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}