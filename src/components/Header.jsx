import React from 'react';

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Logo2 } from '../images/youtubeLogo.svg';
import { ReactComponent as Logo3 } from '../images/instagram2.svg';
import { ReactComponent as Logo4 } from '../images/facebook.svg';
import './header.css';

const Header = () => {
  return (
    <Navbar fixed='top'  bg='light' collapseOnSelect expand='md' variant='light'>
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
              <NavDropdown.Item href='/ensembles'>הרכבים שלנו</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
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
            <Col xs={12} md={4}>
              <Button variant='outline-light'>
                <Navbar.Brand href='https://www.youtube.com/channel/UCUPOpW24O1HrmWGjQQgBOKg'>
                  <Logo2
                    alt=''
                    style={{ maxWidth: '8rem', maxHeight: '2rem' }}
                  />
                </Navbar.Brand>
              </Button>
            </Col>
            <Col xs={9} md={4}>
              <Button variant='outline-light'>
                <Navbar.Brand href='https://www.instagram.com/ormusicevents/'>
                  <Logo3
                    alt=''
                    style={{ maxWidth: '8rem', maxHeight: '2rem' }}
                  />
                </Navbar.Brand>
              </Button>
            </Col>
            <Col xs={12} md={4}>
              <Button variant='outline-light'>
                <Navbar.Brand href='https://www.facebook.com/ormusicevents-101538131232154'>
                  <Logo4
                    alt=''
                    style={{ maxWidth: '8rem', maxHeight: '2rem' }}
                  />
                </Navbar.Brand>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
