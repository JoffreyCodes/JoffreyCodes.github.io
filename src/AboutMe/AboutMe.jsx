import React from 'react'
import { Image, Button, Container, Row, Col } from 'react-bootstrap'
export default function AboutMe() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image fluid src='./media/aboutme6.jpg' alt="about" className="about-picture"></Image>
          </Col>
          <Col>
            <div className='aboutme-description'>
              <p>
                I'm a software engineer who loves to write software that helps organizations accomplish their goals. In working with various community health settings, I saw many gaps in technological communication and it was apparent there was a need for improvement in delivering errorless, accessible, and targeted information to the public. Consequently, I wanted to gain a deeper understanding of how tech companies today integrate with the U.S. healthcare system. 
              </p>
              <p>
                I've learned that efforts in tech and healthcare directly address public health issues, including helping patients make appointments, find transportation, and empower their healthcare experience to become better patients through mobile software. I saw how mobile health technology was directly addressing the issues I studied and knew then that innovation in technology would be the key to solving issues between healthcare systems, public health, and people's well-being. As a result, I made the decision to pursue public health and software engineering to solve real-world problems.
              </p>
              <Button href="#contact" variant="secondary" size="lg" className="btn aboutme-resume">Contact Me</Button>
            </div>
          </Col>        
        </Row>
      </Container>
      </>
  )
}
