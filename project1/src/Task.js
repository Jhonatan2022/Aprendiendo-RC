export function TaskCard({ ready }) {
  // Creamos una constante para saber si la tarea esta realizada o no
  //ready = false;

  // Creamos una contante con lso estilos
  /* const styles = {
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        borderRadius: "10px",
        width: "200px",
        margin: "10px",
    }; */

  return (
    <div className="card col-md-4 offset-md-4 text-bg-dark">
      <div
        className={
          // Creamos una condicional para mostrar un fon
          ready ? "card-header bg-success" : "card-header bg-danger"
        }
      >
        <h5 className="card-title mt-3 mb-3 text-center">
          {
            // Creamos una condicional para mostrar un texto u otro
            ready ? "Tarea realizada" : "Tarea pendiente"
          }
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
      </ul>
    </div>
  );
}
