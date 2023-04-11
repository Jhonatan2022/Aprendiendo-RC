/* Atajos de teclado: 
    Ctrl + K + C (Comentar)
    Ctrl + K + U (Descomentar)
    Ctrl + K + F (Formatear)
    Alt + Flecha Arriba (Mover linea arriba)
    Alt + Flecha Abajo (Mover linea abajo)
    ALT + SHIFT + A (Comentar varias lineas, un bloque de código)
    Ctrl + K + 0 (Colapsar todo)
    Ctrl + K + J (Expandir todo)
    Ctrl + D (Seleccionar la palabra y las demás que coincidan)

    Documantación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

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

    // Creamos una condicional en caso de que algun prametro no tenga el valor
    if (apellido === undefined) {
        // Le asignamos un valor por defecto
        apellido = "-----"
    }

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

// Forma abreviada de escribir la función flecha
const sumar2 = (a, b) => a + b
// Para crear un objeto con una función flecha
const crearObjeto = () => ({ nombre: "Jhonattan" })

// Llamamos a la función
console.log(sumar(2, 3))



//-------------------------------------------------------------------------------
// RETURN EN FUNCIONES
const permitido = true;
// Creamos una un boton
const boton3 = document.createElement("button");
// Agregamos un texto al html
boton3.innerText = "Click";
// Agregamos un evento al boton
boton3.addEventListener("click", () => {
    // Creamos una función
    // Creamos una condicional
    if (permitido) {
        // Retornamos un mensaje
        return "Acceso permitido";
    } else {
        // Retornamos un mensaje
        return "Acceso denegado";
    }
    // Forma de abreviar la condicional
    if (permitido) {
        return alert("Acceso permitido");
    }
    return alert("Acceso denegado");

})

// Agregamos el elemento al html
document.body.append(boton3);



//-------------------------------------------------------------------------------
// AGREGAR ESTILOS POR MEDIO DE JAVASCRIPT
// Creamos un boton
const coolor = true;
const boton4 = document.createElement("button");
// Agregamos un texto al html
boton4.innerText = "Click";
// Creamos los estilos para concatenarlos en el boton
const background = "white";
const color = "black";

// Agregamos un estilos al boton
// Usaremos un operador ternario para concatenar los estilos
boton4.style = `background-color: ${background};
                border-radius: 15px;
                color: ${coolor ? `green` : color};`;

// Agregamos el boton al html
document.body.append(boton4);



//-------------------------------------------------------------------------------
// RECORRIENDO ARREGLOS Y METODOS
// Creamos un arreglo con nombres
const usuarios = ['Jhonattan', 'Manuel', 'Jhon'];


// Crearemos un bucle for para recoorer el arreglo
for (let usuario = 0; usuario < usuarios.length; usuario++) {
    // Mostramos el arreglo
    const conteo = usuarios[usuario];
    // Mostramso por consola el arreglo
    console.log(conteo);
} 


// Abreviamos el anterior bucle for con un forEach
usuarios.forEach(function(usuario) {
    // Mostramos los elementos del arreglo
    console.log(usuario);
})


// Ahora usaremos map para crear un nuevo arreglo
const mapname = usuarios.map(function(usuario) {
    // Creamos un nuevo arreglo
    return `nombre: ${usuario}`;
})

// Mostramos el nuevo arreglo
console.log(mapname);

 
// Usaremos el metodo find para buscar un elemento en el arreglo
const findname = usuarios.find(function(usuario) {

    // Creamos una condicional para buscar un elemento
    if (usuario === 'Jhonattan') {
        // Retornamos el elemento encontrado
        return usuario;
    }
})

// Mostramos el elemento encontrado
console.log(findname);


// Usaremos el metodo filter para buscar un elemento en el arreglo
const filtername = usuarios.filter(function (usuario) {

    // Creamos una condicional para buscar un elemento
    // !=== significa si diferente
    if (usuario === 'Jhonattan' || usuario === 'Manuel') {
        // Retornamos el elemento encontrado
        return usuario;
    }
})

// Mostramos el elemento encontrado
console.log(filtername); 



//-------------------------------------------------------------------------------
// UNIENDO DOS ARREGLOS CON SPREAD OPERATOR
// Creamos dos arreglos con nombres
const usuarios1 = ['Jhonattan', 'Manuel', 'Jhon'];
const usuarios2 = ['Florez', 'Ramirez', 'Lopez'];

// Concatenamos los dos arreglos
const todos = usuarios1.concat(usuarios2);

// Usamos el spread operator para concatenar los arreglos
console.log([...usuarios1, ...usuarios2]) ;

// Usaremos el metodos spread operator para unir objetos
const persona5 = {
    nombre: 'Jhonattan',
    edad: 20
}

const persona6 = {
    apellido: 'Florez',
    pais: 'Colombia'
}

// Unimos los dos objetos
const persona7 = {
    ...persona5,
    ...persona6
}

// Mostramos el objeto unido
console.log(persona7)



//-------------------------------------------------------------------------------
// ECMASCRIPT MODULOS IMPORT Y EXPORT OF MODULES APP
// Importamos la funcion que creamos en modulo.js
import {modulo, multiplicacion} from './modulo.js';

// Llamamos a la funcion
console.log(modulo(12, 8));
console.log(multiplicacion(2, 8));

// Importamos la funcion por defecto
import modulo from './modulo.js';

// Llamamos a la funcion
console.log(modulo);



//-------------------------------------------------------------------------------
// OPTIOAN CHAINING OPERATOR NOS SIMPLIFICA LA VALIDACION DE OBJETOS
// Creamos un objeto
const persona8 = {
    nombre: 'Jhonattan',
    edad: 20,
    profesion: {
        nombre: 'Desarrollador web',
        nivel: 'Junior'
    }
}

// Creamos una condicional para validar si existe un objeto
if (persona8.profesion) {
    // Mostramos el objeto
    console.log(persona8.profesion.nombre);
}

// Usamos el optional chaining operator para validar si existe un objeto
// Si el objeto no existe no mostrara un error
console.log(persona8.profesion?.status);
console.log(persona8.profesion?.nivel);



//-------------------------------------------------------------------------------
// ASYNC AWAIT PARA LLAMAR A UNA API
// Creamos un elemneto donde pondremos la lista del api
const ul = document.createElement('ul');
const li = document.createElement('li');

// Agregamos clases al elemento
ul.classList.add('list-group');
li.classList.add(`list-group-item`);

// Creamos una funcion asincrona
// Creamos una variable para guardar los datos
fetch ('https://jsonplaceholder.typicode.com/posts')

// Then nos permite ejecutar una funcion cuando la promesa se resuelva, es decir espera a que la promesa se resuelva
.then(function (response) {

    // Retornamos los datos
    return response.json();

    // Creamos una segunda promesa para mostrar los datos cuando se resuelva la primera
}).then(function (data) {    
    // Mostramos los datos pror consola
    console.log(data);

    // Usamos un forEach para recorrer los datos y mostrarlos en el html
    data.forEach(function (post) {
        // Creamos un elemento li
        const li = document.createElement('li');
        // Agregamos el texto al elemento
        li.innerText = post.title;
        // Agregamos clases al elemento
        li.classList.add(`list-group-item`);
        // Agregamos el elemento al html
        ul.append(li);
    })
    // Agregamos el elemento al html
    document.body.append(ul);
})



// Creamos una funcion asincrona
async function obtenerDatos() {

    // Creamos una variable para guardar los datos
    const datos = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Creamos una segunda promesa para mostrar los datos cuando se resuelva la primera
    const data = await datos.json();

    // Usamos un forEach para recorrer los datos y mostrarlos en el html
    data.forEach(function (post) {

        // Creamos un elemento li
        const li = document.createElement('li');

        // Agregamos el texto al elemento
        li.innerText = post.title;

        // Agregamos clases al elemento
        li.classList.add("list-group-item", "list-group-item-primary");

        // Agregamos el elemento al html
        ul.append(li);
    })

    // Agregamos el elemento al html
    document.body.append(ul);
}

// Llamamos a la funcion
obtenerDatos();