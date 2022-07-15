import React, { Component } from 'react';
import { DivCard } from '../styles/StylesTodo';
import Cards from './Cards';

class List extends Component {

    constructor() {
        super()
        this.state = {
            heroes: [],
            animales: []
        }

    }

    async componentDidMount() {
        const url = "https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json"
        const resp = await fetch(url)
        const data = await resp.json()
        this.setState({ heroes: data.results })

    }

    render() {

        return (
            <div>
                <h1>Listar a los Heroes</h1>
                <hr />

                <div>
                    {
                        this.state.heroes.map((hero, index)=>(
                            <DivCard key={index}>
                                  <Cards heroes={hero}/>
                            </DivCard>

                            //<Cards key={id} movies={hero}/>
                        ))
                    }
                </div>
            
            </div>
        );
    }
}

export default List;