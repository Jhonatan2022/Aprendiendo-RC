import { Component } from "react";

// Crearemos un componente usando clases
export class Car extends Component {
  // Retornamos el componente
  render() {
    // Retornamos el componente
    return (
      <div className="mt-2 rounded-3 text-center text-bg-dark col-md-4 offset-md-4  bg-danger bg-gradient">
        <h5>{this.props.name}</h5>
        <p>Saldo: {this.props.amount}</p>
      </div>
    );
  }
}