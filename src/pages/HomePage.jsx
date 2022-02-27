import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import dBim from '../images/ensembles/noPeople.JPG';

const HomePage = () => {
  var textStyle = {
    marginTop: '10%',

    direction: 'rtl',
  };
  var imageStyle = {
    height: '300px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <Card className='bg-dark text-white'>
        <Card.Img style={imageStyle} src={dBim} alt='Ensemble' />
        <Card.ImgOverlay>
          <Container>
            <Card.Text style={textStyle}>
              מוזיקה חיה היא לא סתם אטרקציה באירוע שלכם, אלא שדרוג והפיכתו לבלתי
              נשכח! הרכב מוסיקלי לקבלת הפנים, לחופה, ולשאר חלקי האירוע מספק
              עניין מסוג אחר באירוע, זו מוזיקה עשירה, מלאה ומרגשת שנותנת לכם
              ולאורחים הזדמנות להרגיש ולהתרגש.­ תזמורת החתונות "אור מיוזיק
              אורקסטרה בנד", כוללת מספר נגנים ומגוון כלי נגינה, כך שהצליל הכולל
              הוא הרמוני ומרגש במיוחד
            </Card.Text>
          </Container>
        </Card.ImgOverlay>
      </Card>

      <Container className='mt-4'>
        <Row className='mt-2' xs={1} md={1} lg={3}>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/rw0xl86uiJY'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/-M0jUXmxQa4'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/C0EM0JLHfk8'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Row>
        <Row className='mt-4' xs={1} md={1} lg={3}>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/rw0xl86uiJY'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/-M0jUXmxQa4'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/C0EM0JLHfk8'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
