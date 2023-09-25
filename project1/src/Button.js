import PropTypes from "prop-types";

// Crearemos una funcion para retornar un boton en el DOM
export function Mybotton({ text, name }) {
  // Le agregamos un event Handler para que al hacer click muestre un mensaje
  return (
    <button
      className="btn me-5 bg-danger text-bg-dark col-md-4 offset-md-4 mt-3 mb-2"
      onClick={function () {
        alert("Hola mundo");
      }}
    >
      {text} & {name}
    </button>
  );
}

// Definimos los tipos de datos que debe recibir la funcion
Mybotton.propTypes = {
  // Solo acepta string y es requerido
  text: PropTypes.string.isRequired,
};

// Definimos los valores por defecto
Mybotton.defaultProps = {
  name: "----",
};