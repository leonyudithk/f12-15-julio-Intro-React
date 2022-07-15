import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import {CardStyle } from '../styles/StylesTodo';

class Cards extends Component {
    render() {

            const {image, name, superhero, id, first_appearance} = this.props.heroes
         
            return (
                <CardStyle style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>id: {id} </Card.Title>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    {superhero}
                  </Card.Text>
                  <Card.Title>{first_appearance}</Card.Title>
                  
                </Card.Body>
              </CardStyle>
        );
    }
}

export default Cards;