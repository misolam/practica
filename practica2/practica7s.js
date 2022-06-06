const prompt = require("prompt-sync")({ sigint: true });

// totalAPagar()
// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// litrosConsumidos.
// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:
// ● Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

let totalAPagar = (vehiculo, n) => {
    if (vehiculo == "coche") {
        litros = 86
    }else if (vehiculo == "moto") {
        litros = 70
    }else if (vehiculo == "autobus"){
        litros = 55
    }else {
        return "error"
    }

    let total = n * litros
    if ((n > 0) && (n < 25)) {
        return total + 50
    }else if (n >= 25){
        return total + 25
    }else {
        return "cargaste demasiado, no tenes descuento"
    }

}
console.log(totalAPagar("coche",25))
console.log("-------------------------------------")

// Local de sándwiches
// Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
// eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
// el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
// vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
// que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
// Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
// donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
// recibiremos los datos de la siguiente manera.
// Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
// diferente por cada selección:
// ● Pollo = $150 (“pollo”)
// ● Carne = $200 (“carne”)

// 3

// ● Vegetariano (verduras asadas) = $100 (“veggie”)
// Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
// otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
// deseado:
// ● Blanco c/orégano y parmesano = $50 (“blanco”)
// ● Negro c/avena = $60 (“negro”)
// ● Sin gluten = $75 (“s/gluten”)
// Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
// adicionales:
// ● Queso = $20
// ● Tomate = $15
// ● Lechuga = $10
// ● Cebolla = $15
// ● Mayonesa = $5
// ● Mostaza = $5
// Cada uno de estos adicionales están representados por booleanos —es decir, true o
// false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
// total de seis valores booleanos, uno por cada adicional—.
// Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
// para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
// función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
// tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
// Finalmente, deberá retornar el valor numérico del total a pagar del cliente.

let sandwich = (tipoSandwich, tipoPan, q, t, l, c, mayo, most) => {
    let total = 0
     
    if (tipoSandwich === "pollo") {
        total = 150
    }else if (tipoSandwich === "carne") {
         total = 200    
    }else if (tipoSandwich === "veggie") {
         total = 100
    }else {
        "no tenemos ese sandwich"
    }

    if (tipoPan === "blanco"){
        total = total + 50
    }else if (tipoPan === "negro"){
        total = total + 60
    }else if (tipoPan === " s/gluten"){
        total = total + 75
    }else {
        "no tenemos ese pan"
    } 


    if (q === true) {
        total = total + 20
    }else {}

    if (t === true){
        total = total + 15
    }else {}

    if (l === true){
        total = total + 10
    }else {}

    if (c === true){
        total = total + 15
    }else {}

    if (mayo === true){
        total = total + 5
    }else {}

    if (most === true){
        total = total + 5
    }else {}




    

    let totalAPagar = `El total de su pedido es de $${total}`


    console.log(totalAPagar)
    
   
    
}
sandwich("pollo", "blanco", false, false, false, false, false, false)

console.log("-----------------------------------")


// ¿Cuál es el número secreto?
// Creá una función que reciba un parámetro numérico y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
// retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.



let secreto = (n) => {
    
    let numeroSecreto = (max, min) =>{

    return Math.random() * (max - min) + min;

  }

    let random = numeroSecreto(1,10)
 

    let x = Math.round(random)
    
    if (x === n) {
         return console.log(`Felicitaciones! Acertaste el número secreto, el cual era ${x}`)
        }else {
            return console.log(`Fallaste! El número ganador era ${x}`)
        }
    }

secreto(2)

console.log("------------------------")

// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h.
// ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.


let abrirParacaidas = (velocidad, altura) => {
    if (velocidad < 1000 && (altura >=2000 && altura < 3000)){
       console.log('El paracaidas debe abrirse')
    }else {
        console.log('El paracaidas no debe abrirse')
    }
}

abrirParacaidas(500, 2200)

console.log("--------------------")

// Traductor condicional
// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.




let stringUno = prompt("que palabra desea traducir al ingles?")


let diccionario = () => {
    
switch  (stringUno) {
    case "perro":
        console.log("dog")
        break;
    case "casa":
        console.log("home")
        break;
    case "arbol":
        console.log("tree")
        break;
    case "genio":
        console.log("genius")
        break;
    default:
        console.log("La palabra es incorrecta")
}

}
diccionario()

console.log("-----------------")

// Valoración de películas
// Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
// según la siguiente escala:
// ● Muy mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// por su valoración.
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
// En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
// inválido".
// Cuando el usuario haya valorado la película, agradecerle su visita.

let valor = prompt('La pelicula que acaba de ver le pareció: 1.Muy buena 2.Buena 3.Mediocre 4.Mala o 5.Muy mala?')

let valorar = () => {
    switch (valor) {
    case "1":
        console.log("Que bueno que te haya parecido muy buena la película!")
        break;
    case "2":
        console.log("Que bueno que te haya parecido buena la película!")
        break;
    case "3":
        console.log("Siento mucho que te haya parecido mediocre la película!")
        break;
    case "4":
        console.log("Siento mucho que te haya parecido mala la película!")
        break;
    case "5":
        console.log("Siento mucho que te haya parecido muy mala la película!")
        break;

    default : console.log("una piiija")
}
}

valorar()












  
  








