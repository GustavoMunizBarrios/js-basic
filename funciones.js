//Function Declaration

function myFunction() { //in this case the function has the name of myFunction
    return 3;
}
//-----------------------------------------------------------------------------------
function myFunction(a,b) { //in this case the function has the name of myFunction
    return a + b;
}
//-----------------------------------------------------------------------------------
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');
//-----------------------------------------------------------------------------------

//Function Expression (also known as anoymous)

var myFunction = function(a,b) { //in this case the function don't has a name
    return a + b;
}
myFunction();
//-----------------------------------------------------------------------
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre('Diego');