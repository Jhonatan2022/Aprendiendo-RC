// Importamos el componente TaskCard
import TaskCard from "./TaskCard";

// Importamos los iconos de react-icons
import { TbAlertCircle } from "react-icons/tb";

// Importamos el contexto de tareas
import { TaskContext } from "../context/TaskContext";

// Importamos useContext para poder usar el contexto
import { useContext } from "react";
// ----------------------------------------------------------------------------

// Creamos una funcion para mostrar las tareas
// Una forma function Tasklist(props)
function Tasklist() {
  // Mostramos por consola el arreglo de tareas
  // console.log(props.tasks);

  // Usamos el contexto de tareas
  const { tasks } = useContext(TaskContext);

  // Creamos una condicional en caso de que no haya tareas
  if (tasks.length === 0) {
    // Retornamos un mensaje
    return (
      <h1 className="mt-4 text-danger offset-md-4">
        <TbAlertCircle /> No hay tareas
      </h1>
    );
  }

  // Retornamos el componente con el contenido
  return (
    <div className="row">
      {
        // Usamos map para recorrer las tareas
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      }
    </div>
  );
}

//---------------------------------------------------------------------------
// Lo exportamos por defecto
export default Tasklist;