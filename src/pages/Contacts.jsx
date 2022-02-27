import React from 'react';
import { Card, Container, Form, Button, FormLabel } from 'react-bootstrap';
import dLeiser from '../images/ensembles/arugotBosem.jpg';

const Contacts = () => {
  var textStyle = {
    marginTop: '20%',

    direction: 'rtl',
  };
  var imageStyle = {
    height: '1062px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <Card className='bg-dark text-white'>
      <Card.Img style={imageStyle} responsive src={dLeiser} alt='Ensemble' />
      <Card.ImgOverlay>
        <Container style={{marginTop: "35%"}}>
          <Card.Title style={textStyle}>השאירו פרטים ונחזור אליכם:</Card.Title>
          <Form className='justify-content-center'xs={8} md={8}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>אימייל:</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text>לעולם לא נשתף את האימייל שלך עם אף אחד אחר</Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPhone'>
            <Form.Label>מספר הטלפון:</Form.Label>
            <Form.Control
              style={{ direction: 'ltr' }}
              type='phone'
              placeholder='Enter phone number'
            />
            <Form.Text>
              לעולם לא נשתף את המספר הטלפון שלך עם אף אחד אחר
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <FormLabel>הקלדת טקסט:</FormLabel>
            <Form.Control as='textarea' rows='4' placeholder='טקסט חופשי...' />
          </Form.Group>
          {/* <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label="Check me out"/>
          </Form.Group> */}
          <Button variant='outline-light' type='submit' className='mt-2'>שלח</Button>
          </Form>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Contacts;
