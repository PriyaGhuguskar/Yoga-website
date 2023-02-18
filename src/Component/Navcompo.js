import React from 'react'
import { Navbar,Container ,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png'

const Navcompo = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />  Yoga</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-nav">
          
          <Nav.Link as={NavLink} to="/"> Home</Nav.Link>
          <Nav.Link as={NavLink} to="/schedule"> Your schedule</Nav.Link>
         
          </Nav>
          <Nav className="text-nav">
          <Nav.Link as={NavLink} to="/signup">Create Account</Nav.Link>

          <Nav.Link as={NavLink} to="/signup">Log In</Nav.Link>

       
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navcompo