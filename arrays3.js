// RECORRIENDO ARRAYS CON .find(), .forEach() Y .some()

//Array articulos que contendrá varios objetos
var articulos = [ 
    { nombre: "Bici", costo: 300},
    { nombre: "Tv", costo:2500},
    { nombre: "libro", costo:320},
    { nombre: "celular", costo:5000},
    { nombre: "Laptop", costo:20000},
    { nombre: "Teclado", costo:500},
    { nombre: "Audifonos", costo:1700}
];
//.find Retorna el primer elemento de un array que cumple con una condición 
//definida en un nuevo array
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});
// resultado de encuentraArticulo en la consola:
// {nombre: "Laptop", costo: 20000}
// ______________________________________________________________________

//El método forEach no va a generar un nuevo array simplemente hará 
//el filtrado sin modificarlo 
//Ejecuta la función indicada una vez por cada elemento del array

articulos.forEach(function(articulo){ //se manda llamar el array articulos
    console.log(articulo.nombre); //imprime solo el nombre de los articulos del array
})

// resultado en consola:
/* Bici
   Tv
   libro
   celular
   Laptop
   Teclado
   Audifonos
*/
//__________________________________________________________________________

// "some" nos regresará un parametro de verdaero o falso de articulos 
// que cumplan cierta validación 

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700; //Aqui la validación será: existen
    //articulos con un costo menor o igual a 700?
});

//resulato en consola:
//true