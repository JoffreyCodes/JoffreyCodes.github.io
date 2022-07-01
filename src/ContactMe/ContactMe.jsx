import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import EmailForm from './EmailForm'
import ContactInfoColumn from './ContactInfoColumn'

function ContactMe() {
  return (
    <>
      <Container>
        <h1>LET'S CHAT!</h1>
        <Row className='box'>
          <Col>
            <EmailForm />
          </Col>
          <Col>
            <ContactInfoColumn />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ContactMe