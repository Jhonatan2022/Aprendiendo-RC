// ALGUNOS ATAJOS
// rafce + tab = crea una funcion con un return
// rafc + tab = crea una funcion sin return
// rconst + tab = crea una constante
// rafcp + tab = crea una funcion con un return y un proptypes
// rafce + tab = crea una funcion con un return y un export default
// imp + tab = importa una libreria
// impt + tab = importa una libreria y la exporta por defecto
// clg + tab = console.log
// -------------------------------------------------------------------------

// Importamos la libreria de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importamos los iconos de fontawesome
import { FaJoomla } from "react-icons/fa";

// Importamos el componente Tasklist
import Tasklist from "./components/Tasklist";

// Importamos el componente TaskForm
import Formtask from "./components/TaskForm";

// Importamos el arreglo de tareas
import { tasks as data } from "./data/tasks";

// Importamos useState para poder modificar el estado de las tareas
import { useState, useEffect } from "react";
//-------------------------------------------------------------------------------



// Creamos una funcion con un hola mundo
function App() {

  // Creamos un estado para las tareas
  const [tasks, setTasks] = useState([]);



  // Utilizamos useEffect para que se ejecute una vez
  useEffect(() => {
    // Asignamos el arreglo de tareas
    setTasks(data);
  }, []);



  // Creamos una funcion para agregar tareas
  function createTask(task) {
    // Agregamos el objeto al arreglo
    setTasks([
      ...tasks,
      {
        // Obtenemos el id de la tarea
        id: tasks.length,

        // Obtenemos el nombre de la tarea
        text: task.text,

        // Obtenemos la descripcion de la tarea
        description: task.description,
      },
    ]);
  }


  
  // Creamos una funcion para eliminar una tarea
  const deleteTask = (Id) => {
    // Filtramos el arreglo de tareas
    const newTasks = tasks.filter(task => task.id !== Id);

    // Actualizamos el estado de las tareas
    setTasks(newTasks);
  };



  // Retornamos el componente con el contenido
  return (
    // Insertamos todo en componentes de bootstrap
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="text-center mt-2">
            <FaJoomla />
            Task Manager
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <Formtask createTask={createTask} />
          <Tasklist tasks={tasks} deleteTask={deleteTask}/>
        </div>
      </div>
    </div>
  );
}

// La exportamos por defecto
export default App;
