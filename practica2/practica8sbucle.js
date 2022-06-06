const prompt = require("prompt-sync")({ sigint: true });




// Ejercicio 1: Estructura for1
// Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!

// La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.

let texto = prompt("que texto quiere que el loro repita ")

let loro = (texto) => {

    for (let i = 0; i < 5; i++)
     console.log(texto)
}
// loro(texto)

console.log("---------------")


// En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X 
// por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor.
// Para resolver la ejercitación debemos utilizar el for .

function noParesDeContarImparesHasta(numero){
    let contador = 0
    for (let i = 0 ; i <= numero ; i++){       

        if (i % 2 !== 0) {
            contador++
           
        }else {

        }
    }
    console.log(contador)
    return contador
}
// noParesDeContarImparesHasta(100)


console.log("---------------")



// Vamos a crear una función y asignarla a una variable!.
// Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual recibe un número como parámetro. 
// Queremos que al ejecutarse la función muestre por consola la tabla de multiplicar del 1 al 10 del número que reciba.
// Por ejemplo si el número que pasamos por parámetro es 5, la función deberá imprimir:
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// ...
// hasta llegar a multiplicarlo por 10.

let tablaDeMultiplicar = (numero) => {
    let i = 1
    while (i <= 10) {
        let resultado = numero * i
        console.log(`${numero} * ${i} = ${resultado}`)
        i++
    }
    
}
// tablaDeMultiplicar(5)



console.log("---------------")



// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.

let consecutivo = (n) => {

    for (let i = 0 ; i <=10 ; i++) {
        let resultado = n + i
        console.log(resultado)
    }

}
// consecutivo(10)

console.log("---------------")


// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

let tresEnTres = () => {
    for (let i = 5 ; i <= 20; i += 3) {

        console.log(i)

    }

}
// tresEnTres()


// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100

    let sumatoria = () => {
        let total = 0
        for (let i = 0 ; i<= 100 ; i++) {

            total = total + i           
            
        }
        console.log(total)
    }
    sumatoria()

    console.log ("-------------------")

    


// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.


// 5) Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.


let fibonacci = (n) => {
 

    for (let i = 1 ; i <= n ; i + resultado1 ) {

        let resultado1 = total + i
        console.log (resultado1)
        
    }  


}

fibonacci(4)

