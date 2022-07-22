import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Link to="/">Home</Link>   
          </Nav>
          <Nav className="mr-auto">
              <Link to="/jobs">Servicios</Link>   
          </Nav>
          <Nav className="mr-auto">
              <Link to="/testimonials">Testimonios</Link>   
          </Nav>
          <Nav className="mr-auto">
              <Link to="/downloads">Descargas</Link>   
          </Nav>
        </Navbar.Collapse>
          <Form inline className="mx-3">
            <ButtonGroup>
              <Button variant="secondary" >Login</Button>
              <Button variant="secondary" >Signup</Button>
            </ButtonGroup> 
          </Form>
      </Container>
    </Navbar>
  );
}

export default Navigation;