// Al tener el nombre index react lo reconoce como el archivo principal a cargar
// Importamos react para poder usar JSX
import React from 'react';

// Importamos ReactDOM para renderizar el componente
import ReactDOM from 'react-dom/client';


// Creamos un elemento root con reactDom y lo guardamos en una constante
const root = ReactDOM.createRoot(document.getElementById('root'));

// Creamos nuestro primer componente
function saludo() {

    // Devolvemos un h1 con el texto Hola mundo
    return <h1>Hola mundo</h1>
}

// Creamos un hola mundo con react
root.render(saludo());