import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import './footerPage.css';
import dFooter from '../images/ensembles/night_projector.JPG';
import dWhatsapp from '../images/whatsapp.png';
import dPhone from '../images/phone.png'

import emailjs from 'emailjs-com';

const FooterPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8kwhoue',
        'template_glbztjl',
        e.target,
        'BioP74l98LPuiWn_9'
      )
      .then(
        (result) => {
          alert('נתונים נשלחו בהצלחה');
          console.log(result.text);
        },
        (error) => {
          alert('שגיאה בשליחת נתונים');
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
    height: '600px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <Card className='bg-dark text-white'>
      <Card.Img style={imageStyle} responsive src={dFooter} alt='Ensemble' />
      <Card.ImgOverlay>
        <Container  style={{width: "50%"}}>
        <Card.Title style={textStyle}>צרו קשר איתנו:</Card.Title>
        <Button variant='outline-light'  className='mt-2 mb-2'>
        <img src={dWhatsapp}  alt=''
            
            style={{ maxWidth: '8rem', maxHeight: '2rem',  borderRadius: "25%" }}/>

            
              
             
            </Button>
            <Button variant='outline-light'  className='mt-2 mb-2' style={{marginRight: "1rem"}}>
        <img src={dPhone}  alt=''
            
            style={{ maxWidth: '8rem', maxHeight: '2rem',  borderRadius: "25%" }}/>

         
              
             
            </Button>
          <Card.Title style={textStyle}>או השאירו פרטים ונחזור אליכם:</Card.Title>
          <Form 
            onSubmit={sendEmail}
            className='justify-content-center'
            
            xs={8}
            md={8}
          >
            <Form.Group controlId='formBasicName'>
              <Form.Label> שם: <i class="fa fa-asterisk" aria-hidden="true"></i></Form.Label>
              <Form.Control
                type='text'
                placeholder='הקלדת שם'
                name='name'
                required
              />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>אימייל: <i class="fa fa-asterisk" aria-hidden="true"></i></Form.Label>

              <Form.Control
                type='email'
                name='email'
                placeholder='הקלדת אימייל'
                required
              />
              
            </Form.Group>
            <Form.Group controlId='formBasicPhone'>
              <Form.Label>מספר הטלפון:</Form.Label>

              <Form.Control
                type='phone'
                name='phone'
                placeholder='מספר הטלפון'
                
              />
              
            </Form.Group>
            <Form.Group controlId='formBasicText'>
              <Form.Label>באיזה הרכב מעוניינים: <i class="fa fa-asterisk" aria-hidden="true"></i></Form.Label>
              <Form.Control
                type='text'
                name='subject'
                placeholder='הרכב או Dj'
                required
              />
            </Form.Group>

            <Form.Group controlId='formBasicText'>
              <Form.Label>הערות:</Form.Label>
              <Form.Control
                as='textarea'
                
                name='message'
                placeholder='טקסט חופשי...'
                
              />
            </Form.Group>

            <Button  variant='outline-light' type='submit' className='mt-2'>
              שלח
            </Button>
          </Form>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};
export default FooterPage;
