import React from 'react'
import SocialButtons from '../SocialButtons/SocialButtons'
const jokes = "One hundred little bugs in the code; one hundred little bugs. Patch a bug, compile the code. One hundred and twenty one little bugs in the code." 
function Footer() {
  return (
    <>
      <div className="footer flex-container">
        <SocialButtons buttonLoc="footer-buttons" />
        <div className="footer-quote">
          <p>{jokes}</p>
        </div>
      </div>

    </>
  )
}

export default Footer