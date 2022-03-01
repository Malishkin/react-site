import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import dBim from '../images/ensembles/noPeople.JPG';
import dShay from '../images/shay1.jpeg';
import dSveta from '../images/ensembles/sveta_ura1.JPG'
import dRefael from '../images/ensembles/refael3.jpg'

const About = () => {
  var textStyle = {
    marginTop: '5%',

    direction: 'rtl',
  };
  var imageStyle = {
    height: '300px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  var portraitStyle ={
    height: '350px',
    width: '350px',
  }
  return (
    <>
      <Card className='bg-dark text-white'>
        <Card.Img style={imageStyle} responsive src={dBim} alt='Ensemble' />
        <Card.ImgOverlay>
          <Card.Title style={textStyle}>קצת עלינו</Card.Title>
          <Card.Text>
            קודם כל, איזה כיף לנו שהחלטתם לקרוא עלינו, ואם כבר אתם כאן אז תתנו
            לנו כמה רגעים לספר לכם מי אנחנו ולמה כדאי לכם להיפגש איתנו?
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Container className='mt-4' style={{ marginBottom: '20%' }}>
       

       <Row className='mt-2' xs={1} md={2} lg={3}>
         <Col  className='mt-2 pb-3'>
        <img src={dShay} alt='Shay' style={portraitStyle} />
        </Col>
        <Col  className='mt-2 pb-3'>
        <img src={dSveta} alt='Sveta' style={portraitStyle} />
        </Col>
        <Col  className='mt-2'>
        <img src={dRefael} alt='Sveta' style={portraitStyle} />
        </Col>
       </Row>
      
       
     </Container>
    </>
  );
};

export default About;
