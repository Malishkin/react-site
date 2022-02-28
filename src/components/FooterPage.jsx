import React, { useRef } from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import './footerPage.css';
import dFooter from '../images/ensembles/night_projector.JPG';
import emailjs from 'emailjs-com';

const FooterPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8kwhoue',
        'template_8vvwfcr',
        form.current,
        'BioP74l98LPuiWn_9'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
        
      );
      e.target.reset();
  };

  var textStyle = {
    
    direction: 'rtl',
  };
  var imageStyle = {
    marginBottom: '0px',
    height: '400px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <Card className='bg-dark text-white'>
      <Card.Img style={imageStyle} responsive src={dFooter} alt='Ensemble' />
      <Card.ImgOverlay>
        <Container>
          <Card.Title style={textStyle}>השאירו פרטים ונחזור אליכם:</Card.Title>
          <Form
            ref={form}
            onSubmit={sendEmail}
            className='justify-content-center'
            xs={8}
            md={8}
          >
            <Form.Group controlId='formBasicPhone'>
              <Form.Label>שם:</Form.Label>
              <Form.Control
                type='text'
                placeholder='השם המלא'
                name='user_name'
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>אימייל:</Form.Label>
              <Form.Control
                type='email'
                name='user_email'
                placeholder='Enter email'
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>הקלדת טקסט:</Form.Label>
              <Form.Control
                as='textarea'
                rows='1'
                name='message'
                placeholder='טקסט חופשי...'
              />
            </Form.Group>
            {/* <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label="Check me out"/>
        </Form.Group> */}
            <Button variant='outline-light' type='submit' className='mt-2'>
              שלח
            </Button>
          </Form>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};
export default FooterPage;
