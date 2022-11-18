import React from 'react'
import { useEffect } from 'react';
import {Container, Button} from 'react-bootstrap';
import SocialButtons from '../SocialButtons/SocialButtons';
// import HeadlineScript from '../scripts/HeadlineScript'

function Pagetop() {
    // TODO: Have changing images that coincide with the list
    const imaList = ['Joffrey', 'a Seattle native.' ,'a Software Engineer', 'a Starwars Fan', 'a Fitness Enthusiast', 'a Public Health Advocate']
    return (
        <div className='headline' >
            <h1 className="headline-text">Hello, I'm Joffrey!</h1>
            <SocialButtons buttonLoc="header-buttons" />    
            <Button href="https://docs.google.com/document/d/1h6GxOUdmRP6GThTD5P86sQFLQfqZuTEDCdoJ_4TBlPw/edit?usp=sharing"
                variant="primary"
                size="lg"
                target="_blank"
            >
                Resume
            </Button>
        </div>        
    )
}

export default Pagetop