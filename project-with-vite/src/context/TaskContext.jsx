import { tasks } from "../data/tasks";

// Importamos los iconos de react-icons
import { TbSubtask } from "react-icons/tb";

// Importamos la funcion createContext de react para crear el contexto
import { createContext, useState, useEffect } from "react";

// Importamos el arreglo de tareas
import { tasks as data } from "../data/tasks";
// ----------------------------------------------------------------------------



// Llamamso la funcion createContext para almacenar los datos
export const TaskContext = createContext();



// Este componente es el que se encarga de los componentes hijos (Engloba a todos los componentes)
export function TaskContextProvider(props) {
  // Creamos un estado para las tareas
  const [tasks, setTasks] = useState([]);


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
    const newTasks = tasks.filter((task) => task.id !== Id);

    // Actualizamos el estado de las tareas
    setTasks(newTasks);
  };



  // Utilizamos useEffect para que se ejecute una vez
  useEffect(() => {
    // Asignamos el arreglo de tareas
    setTasks(data);
  }, []);



  return (
    <TaskContext.Provider
      value={{
        // Retornamos los valores
        tasks, // tasks: tasks,
        createTask, // createTask: createTask,
        deleteTask, // deleteTask: deleteTask
      }} /* value={{ tasks }} */
    >
      {props.children}
    </TaskContext.Provider>
  );
}
