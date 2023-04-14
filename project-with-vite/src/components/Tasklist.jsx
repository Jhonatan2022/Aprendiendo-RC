// Importamos el componente TaskCard
import TaskCard from "./TaskCard";

// Creamos una funcion para mostrar las tareas
// Una forma function Tasklist(props)
function Tasklist({ tasks, deleteTask }) {
  // Mostramos por consola el arreglo de tareas
  // console.log(props.tasks);

  // Creamos una condicional en caso de que no haya tareas
  if (tasks.length === 0) {
    // Retornamos un mensaje
    return <h1>No hay tareas</h1>;
  }

  // Retornamos el componente con el contenido
  return (
    <div>
      {
        // Usamos map para recorrer las tareas
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
        ))
      }
    </div>
  );
}

// Lo exportamos por defecto
export default Tasklist;
