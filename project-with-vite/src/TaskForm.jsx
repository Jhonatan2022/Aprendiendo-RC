// Importamos iconos de react-icons
import { ImMagicWand } from "react-icons/im";

// Importamos useState para poder usar el estado
import { useState } from "react";
// ---------------------------------------------------------------------------



// Crearemos un formulario para añadir tareas
function Formtask({ createTask }) {

  // Creamos un estado para guardar el nombre
  const [task, setTask] = useState({ name: "" });

  // Creamos un estado para guardar la descripcion
  const [description, setDescription] = useState({ description: "" });


  // Creamos una funcion para guardar los datos del formulario
  const Datos = (e) => {
    // Evitamos que se recargue la pagina
    e.preventDefault();


    // Creamos una constante para guardar los datos
    const newTask = {

      // Obtenemos los datos del estado name
      name: task,

      // Obtenemos los datos del estado description
      description: description,
    };

    // Agregamos los datos al arreglo de tareas
    createTask(newTask);
  };


  // Retornamos el componente con el contenido
  return (

    // Creamos un formulario
    <form onSubmit={Datos}>

      {/* Creamos un input para el nombre */}
      <input
        className="form-control mb-3"
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add name task"
      />

      {/* Creamos un input para la descripcion */}
      <input
        className="form-control mb-3"
        onChange={(d) => setDescription(d.target.value)}
        placeholder="Add Description task"
      />

      {/* Creamos un boton para crear la tarea */}
      <button className="btn btn-dark">
        <ImMagicWand /> Create
      </button>
    </form>
  );
}



// Lo exportamos por defecto
export default Formtask;
