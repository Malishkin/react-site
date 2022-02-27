import React from 'react';
import { Card } from 'react-bootstrap';
import dBim from '../images/ensembles/noPeople.JPG';

const HomePage = () => {
  var textStyle = {
    marginTop: '20%',
    
    direction: 'rtl',
  };
  var imageStyle ={
    height: '1062px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  
  
  return (
    <Card className='bg-dark text-white'>
      <Card.Img
        style={imageStyle}
        responsive
        src={dBim}
        alt='Ensemble'
      />
      <Card.ImgOverlay>
        <Card.Title style={textStyle}>החברה שלנו</Card.Title>
        <Card.Text>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח
          איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל
          אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור
          ליאמום בלינך רוגצה. לפמעט קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.
          עמחליף ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד
          לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
        </Card.Text>
        <Card.Text>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח
          איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל
          אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור
          ליאמום בלינך רוגצה. לפמעט קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.
          עמחליף ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד
          לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default HomePage;
