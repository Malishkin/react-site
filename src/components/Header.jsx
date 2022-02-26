import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {ReactComponent as Logo} from '../images/logo.svg'
import './header.css'


const Header = () => {
  return (
    
    <Navbar className='color-nav'
        collapseOnSelect
        expand='lg'
        variant='light'
        
        >
      <Container >
      
        <Navbar.Brand href='#home'>
            <Logo alt="" className="mr-4" style={{maxWidth: '8rem', maxHeight: '2rem'}}/>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'  >
          <Nav>
            <Nav.Link href='#home'>מי אנחנו</Nav.Link>
            <Nav.Link href='#link'>Djs</Nav.Link>
            <NavDropdown title='הרכבים' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>הרכבים שלנו</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
