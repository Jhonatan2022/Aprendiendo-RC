import { tasks } from "../data/tasks";

// Importamos los iconos de react-icons
import { TbSubtask } from "react-icons/tb";

// Importamos la funcion createContext de react para crear el contexto
import { createContext } from "react";
// ----------------------------------------------------------------------------



// Llamamso la funcion createContext para crear el contexto
const TaskContext = createContext();



// Este componente es el que se encarga de proveer el contexto a los componentes hijos
function TaskContext(props) {
  return (
    <h1></h1>
       
  );
}



//---------------------------------------------------------------------------
// Lo exportamos por defecto
export default TaskContext;
