import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'


class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link href="#link">
                                <Link to="/pantalla">
                                     Pantalla
                                </Link>
                              
                                </Nav.Link>
                                                           </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        );
    }
}

export default NavBar;