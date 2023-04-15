// Importamos iconos de react-icons
import { ImMagicWand } from "react-icons/im";

// Importamos useState para poder usar el estado
// Importamos useContext para poder usar el contexto
import { useState, useContext } from "react";

// Importamos el contexto de tareas
import { TaskContext } from "../context/TaskContext";
// ---------------------------------------------------------------------------



// Crearemos un formulario para añadir tareas
function Formtask() {
  
  // Usamos el contexto de tareas
  const { createTask } = useContext(TaskContext);

  /*   // Creamos una constante para guardar el contexto
  const valor = useContext (TaskContext);

  // Mostramos por consola el contexto
  console.log('Soy el valor de formulario ' + valor);
 */


  // Creamos un estado para guardar el nombre
  const [text, setText] = useState("");

  // Creamos un estado para guardar la descripcion
  const [description, setDescription] = useState("");



  // Creamos una constante para guardar los datos
  const submit = (e) => {
    // Evitamos que se recargue la pagina
    e.preventDefault();

    // Agregamos los datos al arreglo de tareas
    createTask({
      text,
      description,
    });

    // Establecemos el estado de los inputs en vacio cuando se envie el formulario
    setText("");
    setDescription("");
  };



  // Retornamos el componente con el contenido
  return (

    // Creamos un formulario
    <form onSubmit={submit}>

      {/* Creamos un input para el nombre */}
      <input
        className="form-control mb-3"
        onChange={(e) => setText(e.target.value)}
        placeholder="Add name task"
        value={text}
        autoFocus
        required
      />

      {/* Creamos un input para la descripcion */}
      <input
        className="form-control mb-3"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add Description task"
        value={description}
      />

      {/* Creamos un boton para crear la tarea */}
      <button className="btn btn-dark">
        <ImMagicWand /> Create
      </button>
    </form>
  );
}



//---------------------------------------------------------------------------
// Lo exportamos por defecto
export default Formtask;
