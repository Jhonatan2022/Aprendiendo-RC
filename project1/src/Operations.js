// Operaciones matematicas
function Operaciones() {
    // Creamos un objeto persona
    // const operaciones = {
    //     suma: 2 + 2,
    //     resta: 2 - 2,
    //     multiplicacion: 2 * 2,
    //     division: 2 / 2
    // }

    // Creamos una funcion para sumar
    function suma(num1 = 0, num2 = 0) {
        // Si no se envia ningun parametro se le asigna 0
        return num1 + num2;
    }
    

    // Mostramos los datos del objeto
    return <div>
        {/* <p> {operaciones.suma} </p>
        <p> {operaciones.resta} </p>
        <p> {operaciones.multiplicacion} </p>
        <p> {operaciones.division} </p> */}
        <p> La suma es:{suma(2, 2)} </p>
    </div>
}


// Creamos una función de multiplicación
export function Multiplicacion() {

    function multiplicacion (num1 = 0, num2 = 0) {
        return num1 * num2;
    }
    // Si no se envia ningun parametro se le asigna 0
    return <div>
        <p> La multiplicación es: {multiplicacion(3, 3)} </p>
    </div>;
}




// Creamos unn componente que se exporte por defecto
export default Operaciones;
