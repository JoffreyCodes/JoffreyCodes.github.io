import React from 'react'
function SocialButtons(props) {
    const buttonLoc = props.buttonLoc
    const buttons = [
        {
            "name": "email",
            "src": "./media/logo-email.png",
            "url": "mailto:inocejoff@gmail.com"
        },
        {
            "name": "github",
            "src": "./media/logo-github.png",
            "url": "https://github.com/JoffreyCodes"
        },
        {
            "name": "linkedin",
            "src": "./media/logo-linkedin.png",
            "url": "https://www.linkedin.com/in/joff-rey/"
        },
        {
            "name": "observablehq",
            "src": "./media/logo-observablehq.png",
            "url": "https://observablehq.com/@joffreycodes"
        },
    ]
    return (
        <div className='button-group'>
            {buttons.map((button, index) =>
                <a href={button.url} key={index}>
                    <img key={index} src={button.src} alt={button.name} className={buttonLoc}></img>
                </a>
            )}    
        </div>        
    )
}

export default SocialButtons