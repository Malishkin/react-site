import React from 'react';

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';
import './header.css';


const Header = () => {
  return (
  
      <Navbar fixed='top' bg='light' collapseOnSelect expand='md' variant='light'>
        <Container>
          <Navbar.Brand href='/'>
            <Logo
              alt=''
              className='mr-4'
              style={{ maxWidth: '8rem', maxHeight: '2rem' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='/about'>מי אנחנו</Nav.Link>

              <NavDropdown title='הרכבים' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/ensembles'>
                  הרכבים שלנו
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/contacts'>צרו קשר</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form>
            <Row className='justify-content-center'>
              <Col xs={6} md={8}>
                <FormControl
                  type='text'
                  placeholder='חיפוש...'
                  className='mr-sm-2'
                ></FormControl>
              </Col>
              <Col xs={4} md={2}>
                <Button variant='outline-info'>חיפוש</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
     
   
  );
};

export default Header;
