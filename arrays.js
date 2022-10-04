var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);           //Result: ["Manzana", "Platano", "Cereza", "Fresa"]
console.log(frutas.length);   // Result: 4
console.log(frutas[0]);       // Result: Manzana
console.log(frutas[2]);       // Result: Cereza
 
var masFrutas = frutas.push("Uvas"); //the function .push will add elements to final of the array
                                     // Result: ["Manzana", "Platano", "Cereza", "Fresa", "Uvas"]
var ultimo = frutas.pop("Uvas"); //the function .pop will eliminate a element in the array.

var nuevaLongitud = frutas.unshift() // the function .unshift will add elements to the start of the array 