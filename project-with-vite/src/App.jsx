// ALGUNOS ATAJOS
// rafce + tab = crea una funcion con un return
// rafc + tab = crea una funcion sin return
// rconst + tab = crea una constante
// rafcp + tab = crea una funcion con un return y un proptypes
// rafce + tab = crea una funcion con un return y un export default
// -------------------------------------------------------------------------



// Importamos la libreria de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importamos los iconos de fontawesome
import {  FaJoomla } from "react-icons/fa";



// Creamos una funcion con un hola mundo
function App() {
  return <h1> <FaJoomla className='me-3' />
    Hello World</h1>;

}


// La exportamos por defecto
export default App;