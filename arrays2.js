//MÉTODOS DE RECORRIDOS DE ARRAYS

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

//Método FILTER para seleccionar ciertas cosas con 
// validaciones, para lo cual se requiere generar 
// un nuevo array
// Definición: Crea un nuevo array con los elementos del array que se pasó como
//parametro y que cumplan con la condición definida
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500 //regresa los articulos que sean menor o igual a 500
});

//Al llamar al array "articulosFiltrados" este contendrá dos objetos el libro
// y el teclado, ya que estos tienen un costo menor o igual a $500. 
// El array original llamado articulos no se ve modificado.

//-------------------------------------------------------------------------------

//El método de MAP crea un nuevo array con los resultados de la llamada 
//a la función indicada aplicados a cada uno de sus elementos.

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
// Al llamar al array "nombreArticulos" este contendrá todos los nombres
// de los objetos de articulos



