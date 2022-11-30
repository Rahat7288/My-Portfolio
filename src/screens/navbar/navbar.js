import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../navbar/navbar.css';
const MyNavbar = () => {
    return ( 
        
        <Navbar collapseOnSelect expand="lg" className='MyNav'>
        <Container>
          <Navbar.Brand href="#home"><h2>R</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#about"><p>About</p></Nav.Link>
              <Nav.Link href="#programming"><p>Programming Skills</p></Nav.Link>
              <Nav.Link href="#projects"><p>Projects</p></Nav.Link>
              <Nav.Link href="#contact"><p>Contact Us</p></Nav.Link>
              <Button variant='outline-warning'>Resume</Button>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
     );
}
 
export default MyNavbar;