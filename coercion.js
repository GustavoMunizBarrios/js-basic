/*Type coercion is the process of converting value from one type to another 
(such as string to number, object to boolean, and so on). 
Any type, be it primitive or an object, is a valid subject for type coercion. */

var a = 20; // a is number Type

var b = String(a); // "String()" convert the "a" type from number to string 

// b is equal to "20" 
// ------------------------------------------------------------------------

// The invert process (string to number type):

var c = Number(b);