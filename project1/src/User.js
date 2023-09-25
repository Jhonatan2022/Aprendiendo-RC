export function Carduser({ name, amount, married, points, adress, greet }) {
  // Imprimimos por consola
  console.log({ name, amount, married, points, adress });
  return (
    <div>
      <h1> {name} </h1>
      <p> $ {amount} </p>
      <p> {married ? "Casado" : "Soltero"} </p>
      <p> {points} </p>
      <ul>
        <li>Adress: {adress.street}</li>
        <li>City: {adress.city}</li>
      </ul>
    </div>
  );
}