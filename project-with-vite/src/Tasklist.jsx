// Importamos el arreglo de tareas
import { tasks } from "./Tasks.js";

// Importamos useState para poder modificar el estado de las tareas
import { useState, useEffect } from "react";

// Mostramos por consola el arreglo de tareas
console.log(tasks);
// Creamos una funcion para mostrar las tareas
function Tasklist() {
  // Creamos un estado para las tareas
  const [task, setTask] = useState([]);

  // Utilizamos useEffect para que se ejecute una vez
  useEffect(() => {
    // Asignamos el arreglo de tareas
    setTask(tasks);
  }, []);

  // Creamos una condicional en caso de que no haya tareas
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div>
      {
        // Usamos map para recorrer las tareas
        tasks.map((task) => (
          <div
            key={task.id}
            className="mt-3 mb-3 card bg-dark text-bg-dark"
          >
            <h1 className="text-center fs-4">{task.text}</h1>

            <p className="text-center fs-6">{task.description}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Tasklist;
