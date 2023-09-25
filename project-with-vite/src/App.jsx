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
//-------------------------------------------------------------------------------

// Creamos una funcion con un hola mundo
function App() {
  // Retornamos el componente con el contenido
  return (
    // Insertamos todo en componentes de bootstrap
    <div className="container mt-5 rounded bg-secondary bg-gradient">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="text-center mt-2">
            <FaJoomla />
            Task Manager
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <Formtask />
          <Tasklist />
        </div>
      </div>
    </div>
  );
}

// La exportamos por defecto
export default App;