// Importamos component desde react
import { Component } from 'react';

// Crearemos un componente usando clases
export class Car extends Component {

    // Retornamos el componente
    render() {

        // Retornamos el componente
        return (
            <div >
                <h5>{this.props.name}</h5>
                <p>Saldo: {this.props.amount}</p>
            </div>
        );
    }
};