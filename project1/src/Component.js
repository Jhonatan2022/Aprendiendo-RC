// Importamos component desde react
import { Component } from 'react';

// Crearemos un componente usando clases
export class Car extends Component {
    // Los componentes de clase son mas complejos que los de funcion y tienen mas funcionalidades
    // Sin embargo se suele usar mas los de funcion puesto que son mas faciles de leer

    // Retornamos el componente
    render() {

        // Retornamos el componente
        return (
            <div className='mt-2 rounded-3 text-center text-bg-dark col-md-4 offset-md-4  bg-danger bg-gradient'>
                <h5>{this.props.name}</h5>
                <p>Saldo: {this.props.amount}</p>
            </div>
        );
    }
};