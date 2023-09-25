import React, { useState, useEffect } from "react"; // Importamos useState para manejar los estados de los componentes
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import {
  FaArrowAltCircleUp,
  FaArrowDown,
  FaRedo,
  FaCloudUploadAlt,
} from "react-icons/fa";
import Operaciones, { Multiplicacion } from "./Operations";
import { Carduser } from "./User";
import { Mybotton } from "./Button";
import { TaskCard } from "./Task";
import { Car } from "./Component";
import { Posts } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

// Usaremos el metodo State para manejar los estados de los componentes
// Creamos una funcion para incrementar el contador
function Increment() {
  // Creamos un estado para el contador
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* Imprimimos el valor del contador */}
      <h1
        className={
          counter < 0 ? "text-danger text-center" : "text-success text-center"
        }
      >
        Contador: {counter}
      </h1>

      {/* Creamos un botón para incrementar el contador */}
      <button
        className="btn btn-primary me-2"
        onClick={() => {
          // Incrementamos el contador en 1
          setCounter(counter + 1);
        }}
      >
        <FaArrowAltCircleUp className="me-2" />
        Incrementar
      </button>

      {/* Creamos un botón para decrementar el contador */}
      <button
        className="btn btn-danger"
        onClick={() => {
          // Decrementamos el contador en 1
          setCounter(counter - 1);
        }}
      >
        <FaArrowDown className="me-2" />
        Decrementar
      </button>

      {/* Creamos un botón para reiniciar el contador */}
      <button
        className="btn btn-warning ms-2"
        onClick={() => {
          // Reiniciamos el contador
          setCounter(0);
        }}
      >
        <FaRedo className="me-2" />
        Reiniciar
      </button>
    </div>
  );
}

// Usaremos el metodo State para manejar inputs
// Creamos una funcion para incrementar el contador
function Input() {
  // Creamos un estado para el contador
  const [mensaje, setMensaje] = useState("");
  const [contador, setContador] = useState(0);

  // Usaremos useEffect para ejecutar una función cuando se renderice el componente
  useEffect(() => {
    // Podemos usar function() o () =>
    // El useeffect se ejecuta cada vez que se hace un cambio en el componente

    // Imprimimos por consola el valor del input
    console.log("Renderizado...");

    // Le indicamos al useEffect que solo se ejecute una vez si esta vacio
    // Le indicamos que se ejecute cuando el contador cambie
  }, [contador]);

  return (
    <div>
      {/* Imprimimos el valor del contador */}
      <h1 className="text-center">: {mensaje}...</h1>

      {/* Creamos un input para ingresar datos */}
      <input
        type="text"
        className="form-control"
        placeholder="Ingrese un texto"
        // Usamos el evento onChange para guardar el valor del input en el estado
        onChange={(e) => {
          // Imprimimos por consola el valor del input
          //console.log(e.target.value + "...");
          // Guardamos el valor del input en el estado
          setMensaje(e.target.value);
        }}
      />

      {/* Creamos un botón para guardar */}
      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          // Mostramos una alerta con el valor del input
          alert("El mensaje guardado es: " + mensaje);
        }}
      >
        <FaCloudUploadAlt className="me-2" />
        Guardar
      </button>
      <hr />

      {/* Creamos un contador */}
      <h1 className="text-center">Counter: {contador}</h1>
      <button
        onClick={() => {
          // Incrementamos el contador en 1
          setContador(contador + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}

// Usaremos el metodo useEffect para manejar los estados de los componentes
// Creamos una funcion para incrementar el contador

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
    <div className="col-md-4 offset-md-4">
      <Increment />
      <Input />
    </div>
  </>
);