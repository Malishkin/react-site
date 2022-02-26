import React from 'react';
import {  Card } from 'react-bootstrap';
import './footerPage.css'

const FooterPage = () => {
  return (
    <Card.Footer className='text-center py-3 footerMy '>
      <small className="text-muted">Copyright &copy; Rave</small>
    </Card.Footer>
  )
}
export default FooterPage;