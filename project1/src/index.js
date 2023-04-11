// Al tener el nombre index react lo reconoce como el archivo principal a cargar
// Importamos react para poder usar JSX
import React from 'react';

// Importamos ReactDOM para renderizar el componente
import ReactDOM from 'react-dom/client';

// Importamos nuestro componente
import Operaciones, { Multiplicacion } from './Operations';



// Creamos un elemento root con reactDom y lo guardamos en una constante
const root = ReactDOM.createRoot(document.getElementById('root'));



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
    return <div> <h1> {tittle ? 'Hola mundo 🙂' : 'Adios mundo 🙃'}</h1>
        <p> {tittle.toString()} </p>
    </div>

}



// Manejo de objetos
function Persona() {
    // Creamos un objeto persona
    const persona = {
        nombre: 'Juan',
        edad: 25
    }

    // Mostramos los datos del objeto
    return <div>
        <p> Nombre: {persona.nombre} </p>
        <p> Edad: {persona.edad} </p>
    </div>
}



// Usaremos props para pasar datos a los componentes
function Saludo2({ tittle, num = 0, boole = false, arreglo= [89, 3] }) {
    // Retornamos el componente
    return <div>{tittle}, número: {num}, estado: {boole}, tarjeta: {arreglo}</div>
}


// Creamos un hola mundo con react
root.render(<>
    <Saludo />
    <Saludo2 tittle="Título 1" num={13} boole={false} arreglo={[1, 2, 3]}/>
    <Saludo2 tittle="Título 2" />
    <Persona />
    <Operaciones />
    <Multiplicacion />
</>);