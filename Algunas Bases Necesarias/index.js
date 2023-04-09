// CREANDO FUNCIONES
function hola1() {
    // Mostramos el mensaje por consola
    console.log("Hola");
    console.log("Hola a todos");
}
// LLAMANDO A LA FUNCION
hola1(); // Podemos reutilizarla las veces que queramos



//-------------------------------------------------------------------------------
// Creamos una función con retorno
function hola2() {
    // Retornamos una funcion dentro de otra
    return function () { // Esto se le conoce como programación funcional
        return "funcion dentro de otra"
    }
    // Nos puede devolver cualquier tipo de dato
    // String = "Hola"
    // Número = 1
    // Booleano = true
    // Objeto = { nombre: "Juan" }
    // Array = [1, 2, 3]
    // Undefined = undefined
}

// Lo guardamos en una constante
//const mensaje = hola2() 
// Podemos evitarlo y llamarlo directamente
console.log(hola2()()); // Para llamar la otra función lo hacemos con otro paréntesis



//-------------------------------------------------------------------------------
// FUNCIONES CON PARAMETROS
// El parametro puede tener cualquier nombre
function hola3(nombre = "Desconocido", apellido = "-----") {
    // Podemos pasarle un parametro

    /* // Creamos una condicional en caso de que algun prametro no tenga el valor
    if (apellido === undefined) {
        // Le asignamos un valor por defecto
        apellido = "-----"
    }*/

    // Concatenamos el parametro con el mensaje
    return `Hola ${nombre} ${apellido}`
    // Otra forma de concatenar es con el signo + EJ: return "Hola " + nombre
}

// Lo guardamos en una constante
console.log(hola3("Jhonattan")) // Podemos pasarle un parametro a la función
console.log(hola3("Deivib", "Bautista"))
console.log(hola3()) // Si no pasamos un parametro, asigna el valor por defecto



//-------------------------------------------------------------------------------
// OBJETOS DE JAVA SCRIPT
// Creamos un objeto
const persona = {
    // Propiedades
    nombre: "Jhonattan",
    apellido: "Bautista",
    edad: 20,
    // Agregamos un objeto dentro de otro
    direccion: {
        pais: "Colombia",
    },
    // Agregamos un arreglo
    amigos: ["Sossa", "Deivid", "Paredes"],
    // Métodos
    saludar() { // Otra forma de crear un metodo es: saludar: function() { ... }
        return `Hola, mi nombre es ${this.nombre} ${this.apellido}`
    }
}

// Formas de acceder a las propiedades
console.log(persona.saludar())
console.log(persona["edad"])
console.log(persona.direccion.pais)



//-------------------------------------------------------------------------------
// ABREVIENDO NOMBRES DE PROPIEDADES
// Creamos un objeto
const usuario = "Manuel"
const edad = 20

// Creamos un objeto con las propiedades
const persona2 = {
    // Si el nombre de la propiedad es igual al nombre de la variable, podemos abreviarlo
    usuario, // usuario: usuario
    edad, // edad: edad
    // Agregamos un objeto dentro de otro
}

// Mostramos el objeto
console.log(persona2)



//-------------------------------------------------------------------------------
// MANIPULACIÓN DEL DOOM CON JAVASCRIPT = La ESTRUCTURA DEL DOCUMENTO HTML
// Creamos un elemento
const titulo = document.createElement("h1")
// Agregamos un texto al html
titulo.innerText = "Soy el titulo"
// Agregamos el elemento al html
document.body.append(titulo)

// Creamos un boton
const boton = document.createElement("button")
// Agregamos un texto al html
boton.innerText = "Click"
// Agregamos un evento al boton
boton.addEventListener("click", () => {
    // Modificamso el titulo
    titulo.innerText = "Titulo modificado"
    // Mostramos una alerta
    alert("Has hecho click en el botón")
    // Creamos un elemento
    const texto = document.createElement("p")
    // Agregamos un texto al html
    texto.innerText = "Texto agregado desde el botón"
    // Agregamos el elemento al html
    document.body.append(texto)
})

// Agregamos el elemento al html
document.body.append(boton)



//-------------------------------------------------------------------------------
// OBJETOS COMO PARAMETROS
// Creamos un objeto
const persona3 = {
    // Propiedades
    nombre: "Jhonattan",
    edad: 20,
}

// Creamos una función para utilizar el objeto
function saludar3(persona) {
    // Mostramos la información en el html
    return `<h3>Hola ${persona.nombre}, tienes ${persona.edad} años </h3>`
    //document.write()
    // Otra forma de mostrar la información es:
    // document.write("Hola " + persona.nombre + ", tienes " + persona.edad + " años")
}

// Agregamos el objeto como parametro al html
document.body.innerHTML = saludar3(persona3) + '<p>Esto es un párrafo</p>'



//-------------------------------------------------------------------------------
// DESESTRUCTURACIÓN DE OBJETOS
// Creamos un objeto
const persona4 = {
    // Propiedades
    nombre: "Jhonattan",
    edad: 20,
}

// Creamos una función para utilizar el objeto
function saludar4(persona4) {
    // Podemos hacerlo directamente en la función: function saludar4({ nombre, edad })
    // Creamos una constante para acceder a las propiedades del objeto
    const { nombre, edad } = persona4
    // Mostramos la información en el html
    return `<h3>Hola ${nombre}, tienes ${edad} años </h3>`
}

// Agregamos el objeto como parametro al html
document.body.innerHTML = saludar4(persona4)



//-------------------------------------------------------------------------------
// FUNCIONES ANONIMAS SON FUNCIONES QUE NO TIENEN NOMBRE
// Creamos una función anonima
console.log(function () {
    // Mostramos un mensaje
    return "Hola soy una función anonima"
}()) // Llamamos a la función

// Creamos una función anonima para un boton
const boton2 = document.createElement("button")
// Agregamos un texto al html
boton2.innerText = "Click"
// Agregamos un evento al boton
boton2.addEventListener("click", function () {
    // Mostramos una alerta
    alert("Funcion anonima")
})

// Agregamos el elemento al html
document.body.append(boton2)



//-------------------------------------------------------------------------------
// FUNCIONES FLECHA
// Creamos una función flecha para sumar dos números
const sumar = (a, b) => {
    // Retornamos el resultado
    return a + b
}

// Llamamos a la función
console.log(sumar(2, 3))