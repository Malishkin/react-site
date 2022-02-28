import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import dBim from '../images/ensembles/noPeople.JPG';

const HomePage = () => {
  const [resultyt, setResultyt] = useState([]);

  // const URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyAkkyxDbXKt3wO9SWuYMJoJj-XtIA4hebw&channelId=UCUPOpW24O1HrmWGjQQgBOKg'
  const API = 'AIzaSyAkkyxDbXKt3wO9SWuYMJoJj-XtIA4hebw';
  const channelId = 'UCUPOpW24O1HrmWGjQQgBOKg';
  const result = 50;
  var finalURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&key=${API}&channelId=${channelId}`;
  const clicked = (e) => {
    e.preventDefault();

    fetch(`${finalURL}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data ', data);
        setResultyt(data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(resultyt.id)
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
  console.log(finalURL);

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

      <Container className='mt-4' style={{ marginBottom: '20%' }}>
        <Button onClick={clicked}>סרטי ווידאו</Button>
        <Row className='mt-2' xs={1} md={1} lg={3}>
          {resultyt && resultyt.map((link, i)=>{
              console.log("link ", link)
          })}
        </Row>

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
            src='https://www.youtube.com/embed/VbgCM_ffpNE'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/BgfaWaQcY0Q'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/wrR5Gat_1Yc'
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
