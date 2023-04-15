// Importamos los iconos de react-icons
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

// Importamos en componente TaskContext
import {TaskContext}  from "../context/TaskContext";

// Importamos la funcion useContext de react
import { useContext } from "react";
// ---------------------------------------------------------------------------



function TaskCard({ task, deleteTask }) {

  // Llamamos por medio de useContext el componente TaskContext
  const valor = useContext(TaskContext);
  
  // Mostramos por consola la variable de prueba
  console.log(valor);
    
  // Creamos una funcion para eliminar una tarea
//   const deleteTask = () => {
//     alert("Esta seguro de eliminar la tarea: " + task.id + " ?");
//   };



  // Retornamos el componente con el contenido
  return (
    <div className="mt-3 mb-3 card bg-dark text-bg-dark">
      <h1 className="text-center fs-4 mt-3"><FaPencilAlt /> {task.text}</h1>

      <p className="bg-light text-dark fw-bold  border-4 m-2 text-center rounded-3">
        {task.description}
      </p>
      <button className="btn btn-danger col-md-4 m-2" onClick={() => deleteTask(task.id)}>
        <FaTrashAlt /> Delete
      </button>
    </div>
  );
}



// Lo exportamos por defecto
export default TaskCard;
