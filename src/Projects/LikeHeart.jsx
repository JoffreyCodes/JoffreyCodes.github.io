import React from 'react';
import { useState }  from 'react';
import { RiHeartLine, RiHeartFill } from 'react-icons/ri'

function LikeHeart() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const path = click? "heart filled" : "heart unfilled"
  return (click ?
    <>
      <RiHeartFill className="heart filled" onClick={handleClick}/>
    </>
    :
    <>
      <RiHeartLine className="heart unfilled" onClick={handleClick}/>
    </>
      
  )
}

export default LikeHeart