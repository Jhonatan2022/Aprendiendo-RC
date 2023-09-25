import { FaGlobe } from "react-icons/fa";

// Crearemos una constante para usar una api
export const Posts = () => {
  return (
    <button
      className="mt-4 btn btn-danger bg-danger text-bg-dark col-md-2 offset-5"
      onClick={() => {
        // Hacemos una petición a la api
        fetch("https://jsonplaceholder.typicode.com/posts")
          // Convertimos la respuesta a json
          .then((response) => response.json())

          // Imprimimos el json
          .then((json) => console.log(json))

          // Imprimimos el error
          .catch((error) => console.log(error));
      }}
    >
      <FaGlobe className="me-3" />
      Traer posts
    </button>
  );
};