// Creamos una funcion para mostrar las tareas

// Una forma function Tasklist(props)
function Tasklist({ tasks }) {

  // Mostramos por consola el arreglo de tareas
  // console.log(props.tasks);


  // Creamos una condicional en caso de que no haya tareas
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }


  return (
    <div>
      {
        // Usamos map para recorrer las tareas
        tasks.map((task) => (
          <div key={task.id} className="mt-3 mb-3 card bg-dark text-bg-dark">
            <h1 className="text-center fs-4">{task.name}</h1>

            <p className="text-center fs-6">{task.description}</p>
          </div>
        ))
      }
    </div>
  );
}



// Lo exportamos por defecto
export default Tasklist;