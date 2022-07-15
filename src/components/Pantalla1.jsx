import React, { Component } from 'react';
import { Image } from 'react-bootstrap';


class Pantalla1 extends Component {
    render() {
        return (
            <div>
            <h1>Estoy dentro del componente pantalla</h1>
                <Image src="http://placehold.it/"/>
            </div>
        );
    }
}

export default Pantalla1;