const para = document.querySelector('p');
 
para.addEventListener('click', ModificarNombre); // Evento de tipo clic. Si existe el clic, llama a la funcion modificar nombre
 
function ModificarNombre() {
  let nombre = prompt('Ingresa tu nombre'); //pide al usuario el nombre
  let anioNac = prompt('Ingresa tu año de nacimiento'); //pide al usuario el año de nacimiento
  let edad = 2022 - anioNac;
  para.textContent = 'Hola soy ' + nombre + ' y tengo ' + edad; //devuelve esto
}

/**
 * Este es un comentario multilinea
 * Tipos de datos: 
Undefined: typeof instance === "undefined"
Boolean: typeof instance === "boolean"
Number: typeof instance === "number"
String: typeof instance === "string"
BigInt: typeof instance === "bigint"
Symbol: typeof instance === "symbol"
 */

let VariableTipo1 = 42;    // VariableTipo1 ahora es un número
let VariableTipo2 = 'bar'; // VariableTipo2 ahora es un string
let VariableTipo3 = true;  // VariableTipo3 ahora es un booleano
 
console.log(VariableTipo1); // Registrará el valor en la consola. Esto lo puedo der desde el inspector de elementos cuando abro el archivo en crhome.
console.log(VariableTipo2); //idem
console.log(VariableTipo3); //idem

//el console.log es pasa mostar las variables dentro de la consola. No se ve en el html
//Ambitos
if (true) {
    var x = 5;
  } // si el valor es verdadero el asigno una variable x con valor 5
  console.log(x);  // x es 5
 
  if (true) {
    let y = 5;
  } // lo mismo que el anterior pero con otro tipo de variable 
  console.log(y); // ReferenceError: y no está definida. Como lo quiero ver afuera  del if, da error; el let solo se puede llamar dentro de la funcion.


/* 
Lenguaje que utiliza secuancias para hacer la pagina mas dinámica
Se maneja del lado del cliente, del navegador. Para manejar datos utiles en variables.
Sirve para cadenas de textos o string, concatena sting con variables.
Ejecuta codigos de eventos de cosas que suceden en la pagina web

Tipos de variables: 
Var
let (locales, dentro de la funcion)
const (variables de solo lectura, fuciona solo dentro del bloque).
Si se declara dentro de la funcion es una variable local, si se deblara fuera es blobal

*/
