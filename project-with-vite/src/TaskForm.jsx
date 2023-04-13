// Importamos iconos de react-icons
import { ImMagicWand } from "react-icons/im";
// ---------------------------------------------------------------------------


// Crearemos un formulario para añadir tareas
function Formtask() {
  return (
    <form>
      <input className="form-control mb-3" type="text" placeholder="Add Task" />
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Add Description task"
      />
      <button className="btn btn-dark">
        <ImMagicWand /> Create
      </button>
    </form>
  );
}



// Lo exportamos por defecto
export default Formtask;
