// Al tener el nombre index react lo reconoce como el archivo principal a cargar
// Importamos react para poder usar JSX
import React from "react";

// Importamos ReactDOM para renderizar el componente
import ReactDOM from "react-dom/client";

// Importamos Bootstrap para usarlo en nuestro proyecto
import "bootstrap/dist/css/bootstrap.css";

// Importamos la libreria de iconos de React
import { IconName } from "react-icons/fa";

// Importamos nuestro componente
import Operaciones, { Multiplicacion } from "./Operations";

// Importamos nuestro componente card
import { Carduser } from "./User";

// Exportamos nuestro componente botón
import { Mybotton } from "./Button";

// llamamos a nuestro componente Task
import { TaskCard } from "./Task";

// Importamos el componente que creamos con class
import { Car } from "./Component";

// Importamos el componente Post
import { Posts } from "./Post";



// Creamos un elemento root con reactDom y lo guardamos en una constante
const root = ReactDOM.createRoot(document.getElementById("root"));



// Creamos nuestro primer componente
function Saludo() {
  //Recomendable que el nombre del componente empiece con mayuscula
  const tittle = false;

  // Creamos una condicional para mostrar un texto u otro
  // if (tittle === true) {
  //     return <h1>Hola mundo</h1>
  // } else {
  //     return <h1>Adios mundo</h1>
  // }

  // Forma de abreviar los if
  return (
    <div>
      {" "}
      <h1> {tittle ? "Hola mundo 🙂" : "Adios mundo 🙃"}</h1>
      <p> {tittle.toString()} </p>
    </div>
  );
}



// Manejo de objetos
function Persona() {
  // Creamos un objeto persona
  const persona = {
    nombre: "Juan",
    edad: 25,
  };

  // Mostramos los datos del objeto
  return (
    <div>
      <p> Nombre: {persona.nombre} </p>
      <p> Edad: {persona.edad} </p>
    </div>
  );
}



// Usaremos props para pasar datos a los componentes
function Saludo2({ tittle, num = 0, boole = false, arreglo = [89, 3] }) {
  // Retornamos el componente
  return (
    <div>
      {tittle}, número: {num}, estado: {boole}, tarjeta: {arreglo}
    </div>
  );
}



// Creamos una función que imprima por consola los datos del input
function change(e) {
  // Imprimimos por consola el valor del input
  console.log(e.target.value + "...");
}



// Creamos una función para reescrbir el formulario sin que se recargue la página
function submit(e) {
  // Evitamos que se recargue la página al enviar el formulario
  e.preventDefault();

  // Imprimimos por consola el mensaje
  console.log("Enviado.");
}



// Implementando arreglos
// Creamos primero un arreglo
const users = [
  {
    id: 1,
    name: "Juan",
    image: "https://robohash.org/user2",
    adress: { street: "Calle 1", city: "Bogota" },
  },
  {
    id: 1,
    name: "Johan",
    image: "https://robohash.org/user3",
    adress: { street: "Calle 1", city: "Bogota" },
  },
];



// Creamos un hola mundo con react
root.render(
  <>
    {/* <Saludo />
    <Saludo2 tittle="Título 2" />
    <Persona />
    <Operaciones />
    <Multiplicacion />
    <Carduser
      name="Jose"
      amount={3000}
      married={true}
      points={[45, 56, 89]}
      adress={{ street: "Calle 1", city: "Bogota" }}
      grrt={function () { alert("Hola a todos") }}
    />
    <Mybotton text="Click me" />
    <Mybotton text="" name="manuel" />
    <TaskCard ready={false} />
    <Car name="Ferrari" amount={5000000} />

    <input id="input" onChange={function (e){
      console.log(e.target.value + '...');
    }} />
    
    Una forma de simplificarlo es con una función flecha

    <input id="input" onChange={change} />

    <form onSubmit={submit}>
      <h1>Formulario </h1>
      <button type="submit" >Enviar</button>  
    </form>
    <Posts /> */}


    {/* {users.map((user, indice) => {
      // Retornamos el componente
      return (
          <div key={indice} className="card col-md-3 border-danger mb-3 mt-5 offset-md-4" >
          <img src={user.image} className="card-img-top rounded " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Adress: {user.adress.city}, {user.adress.street}
            </li>
          </ul>
        </div>
      );
    })} */}
  </>
);
