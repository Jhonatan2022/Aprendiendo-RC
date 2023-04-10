// Usaremos este archivo como base para crear los modulos

// Usamos la palabra reservada export para indicar que esta sera usado por otros archivos
export function modulo(num1 = 0, num2 = 0) {
    return `La suma es: ${num1 + num2}`;
}



// Creamos una funcion que nos devuelva la multiplicacion de dos numeros
export function multiplicacion(num1 = 0, num2 = 0) {

    // Retornamos un string con el resultado de la multiplicacion
    return `La multiplicacion es: ${num1 * num2}`;
}



// Podemos relizar multiples exportaciones de diferentes valores
export const hola = `hola a todos`;
export const adios = `adios a todos`;
export const alive = true;
export const edad = 20;
export const arreglo = [1, 2, 3];



// Creamos un export default para exportar una funcion por defecto
export default hola + `, ` + adios;