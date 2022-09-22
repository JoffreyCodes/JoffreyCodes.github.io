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
                <Button href="./media/Resume2022-JoffreyInocencio.pdf" variant="primary" size="lg">Resume</Button>
        </div>        
    )
}

// const text = document.querySelector('.headline-text')
// const strText = text.textContent;
// const splitText = strText.split("");
// text.textContent= ""
// for (let i = 0; i < splitText.length; i++){
//     text.innerHTML += "<span>"+ splitText[i] +'</span>'
// }

// let char = 0
// let timer = setInterval(onTick, 50);

// function onTick() {
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++
//     if (char === splitText.length) {
//         complete();
//         return
//     }
// }

// function complete() {
//     clearInterval(timer);
//     timer = null;
// }

export default Pagetop