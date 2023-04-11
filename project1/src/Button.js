// Importamos PropTypes
import PropTypes from "prop-types";

// Crearemos una funcion para retornar un boton en el DOM
export function Mybotton({ text, name }) {
    // Forma de agregar valor por defecto: , name="----" 
    // Creamos una funcion para mostrar un mensaje
    function mensaje() {
        alert("Hola mundo");
    }

   /*  // Creamos una condicional en caso de que no se envie el parametro
    if ( !text ) {
        console.error("No se envio el parametro");
    }
 */
    // Retornamos el boton
    return <button onClick={mensaje}>{ text } & { name }</button>;
}



// Definimos los tipos de datos que debe recibir la funcion
Mybotton.propTypes = {

    // Solo acepta string y es requerido
    text: PropTypes.string.isRequired,
};


// Definimos los valores por defecto
Mybotton.defaultProps = {
    name: "----",
};