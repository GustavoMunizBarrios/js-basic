var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(alumno) { //El nombre del parámetro "estudiante" puede ser cualquier letra o palabra 
    console.log(`Hola, ${alumno}`);
}

//Aqui el for of seguirá en loop hasta que se terminen todos sus parametros 
for ( var persona of estudiantes) { // la variable "persona" se va a convertir en el index del array "estudiantes"
    saludarEstudiantes(persona);
}