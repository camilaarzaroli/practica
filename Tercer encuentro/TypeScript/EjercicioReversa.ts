function reversa(str:string): string{ //funcion reversa que espera variable str de tipo string, fuera de los parentesis indica que devuelve un string
    return str.split('').reverse().join('') // el split recorre digito por digito, luego se le aplica la funcion reverse donde da vuelta toda la palabra, pone lo ultimo primero. Luego el join hace que muestre el resultado
}
 
console.log(reversa('practica')); //el console.log muestra en la consola el selustado de los que esta entre parentesis. En este caso, la funcion reversa con la palabra practica como variable, lo que devolvera acitcarp.
console.log(reversa('1 2 3 4 5 6'));

// Este codigo hay que pasarlo a JavaScript, ejecutando en la terminal ir a comand prondt el comando: tsc normbredelarchivo.ts, si esta dentro de una carpeta, primeero la carpeta
