const prompt = require("prompt-sync")({ sigint: true });
// 1. Crear un archivo calculadora.js que contendrá las distintas operaciones a
// realizar de nuestra calculadora.
// 2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la
// suma de los mismos.
// 3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la
// resta del primero menos el segundo.
// 4. Crear una función multiplicar, la misma deberá recibir dos parámetros y
// retornar el resultado de su multiplicación.
// 5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
// de la división del primero sobre el segundo.


let sumar = (a, b) => a + b;
console.log(sumar(12,2))

let restar = (a, b) => a - b;
console.log(restar(5,3))

let multiplicar = (a, b) => a * b;
console.log(multiplicar(2,3))

let dividir = (a, b) => a / b;
console.log(dividir(10,5))






