import { tasks } from "../data/tasks";

// Importamos los iconos de react-icons
import { TbSubtask } from "react-icons/tb";

// Importamos la funcion createContext de react para crear el contexto
import { createContext } from "react";
// ----------------------------------------------------------------------------



// Llamamso la funcion createContext para almacenar los datos
export const TaskContext = createContext();



// Este componente es el que se encarga de los componentes hijos (Engloba a todos los componentes)
export function TaskContextProvider(props) {
  // Creamos una variable de prueba
  let hh = "soy una variable";


  return (
    <TaskContext.Provider value={hh} /* value={{ tasks }} */>
      {props.children}
    </TaskContext.Provider>
  );
}
