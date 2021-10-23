import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../imgs/logo.svg';
import Row from 'react-bootstrap/esm/Row';


const NavigationBar = () => {
    return (
        <>
        <Row>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="shortly logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#pricing">Resources</Nav.Link>                   
                    </Nav>
                    <div className="dropdown-divider"></div>
                    <Nav>
                    <Nav.Link href="#deets">Login</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes" className="signup">
                        Sign up
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </Row>
        </>
    )
}

export default NavigationBar;