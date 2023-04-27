// Pedirle al usuario un número
const numero = prompt("Introduce un número:");

// Convertir el número a un entero
const entero = parseInt(numero);

// Verificar si el número es válido
// Usamos isNaN() para verificar si el valor ingresado no es un número
if (isNaN(entero)) {
  console.log("El valor ingresado no es un número válido.");

// Verificar si el número es negativo
} else if (entero < 0) {
  console.log("El número debe ser mayor o igual a cero.");

// Verificar si el número es cero
} else if (entero === 0) {
    console.log("El factorial de cero es 1.");

// Si el número es válido, calcular el factorial
} else {
    
  // Calcular el factorial del número
  let factorial = 1;

  // Iterar desde 2 hasta el número
  for (let i = 2; i <= entero; i++) {
    factorial *= i;
  }

  // Mostrar el resultado
  console.log(`El factorial de ${entero} es ${factorial}.`);
}