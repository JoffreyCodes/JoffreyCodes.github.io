import React from 'react'
import SocialButtons from '../SocialButtons/SocialButtons';
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
function ContactInfoColumn() {
  return (
    <>
      <h1>CONTACT</h1>
      <p>Please do not hesitate to reach me. I would love to chat!</p>
      <div className='button-group'>
        <a className="contact-links" href="mailto:inocejoff@gmail.com">
          <img key="email" src="./media/logo-email.png" alt="email" className="footer-buttons" />
          inocejoff@gmail.com
        </a>
        <br/>
        <a className="contact-links" href="https://www.linkedin.com/in/joff-rey/">
          <img key="linkedin" src="./media/logo-linkedin.png" alt="linkedin" className="footer-buttons"></img>
          linkedin.com/in/joff-rey
        </a>
      </div> 
    </>
  )
}

export default ContactInfoColumn