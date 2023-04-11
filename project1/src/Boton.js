// Crearemos una funcion para retornar un boton en el DOM
function Boton() {
    // Creamos una funcion para mostrar un mensaje
    function mensaje() {
        alert("Hola mundo");
    }

    // Retornamos el boton
    return <button onClick={mensaje}>Click me</button>;
}

// // Exportamos el componente
export default Boton;