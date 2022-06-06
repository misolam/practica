const prompt = require("prompt-sync")({ sigint: true });


//1 Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

let convertPulgada = pulgada =>  pulgada * 2.54 + 'cm';

console.log(convertPulgada(2));


//Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito” es devuelto como “http://www.pepito.com”


let convertUrl = parametro => `http://www.${parametro}.com`;

console.log(convertUrl("svaly"));

//3 Crear una función que recibe un string y devuelve la misma frase pero con admiración.

let saludo = p => `${p}!`

console.log(saludo("hola mundo"))

//4 Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

let edadPerro = n => n * 7;
console.log(edadPerro(3))

// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 40 horas.

 let horaTrabajo = sueldo => sueldo / 40

 console.log(horaTrabajo(1000))

// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores.

let calculadorIMC = (peso, altura) => {
    let imc = peso / altura**2;
    return `tu imc es de ${imc}`
}

console.log(calculadorIMC(80, 1.84));



// 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
// y lo retorne.

let convertirMayus = (n) => {   
    return  n.toUpperCase()
}

console.log(convertirMayus("Hola compadri"))

// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
// parámetro.
// Pista: te servirá revisar qué hace la palabra reservada typeof.

let tipoParametro = (n) => {
    return typeof n 
}
console.log(tipoParametro())

// 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
// circunferencia.

let radioCirculo = (r) => {
    return 2 * Math.PI * r;
}

console.log(radioCirculo(1))



