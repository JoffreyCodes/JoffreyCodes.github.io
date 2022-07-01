import React from 'react'
import { useState }  from 'react';
import { Card, Container, Form } from 'react-bootstrap'

const skillsList = [
    { name: "bootstrap", displayTitle: "bootstrap"},
    { name: "css3", displayTitle: "css3" },
    { name: "d3js", displayTitle: "d3.js" },
    { name: "docker", displayTitle: "docker" },
    { name: "git", displayTitle: "git" },
    { name: "gradle", displayTitle: "gradle" },
    { name: "heroku", displayTitle: "heroku" },
    { name: "html5", displayTitle: "html5" },
    { name: "javascript", displayTitle: "javascript" },
    { name: "java", displayTitle: "java" },
    { name: "mongodb", displayTitle: "mongodb" },
    { name: "mysql", displayTitle: "mysql" },
    { name: "nodejs", displayTitle: "nodejs" },     
    { name: "pandas", displayTitle: "pandas" },     
    { name: "python", displayTitle: "python" },     
    { name: "react", displayTitle: "react" }          
]

function SkillCard(skill, idx) {
    const [color, setColor] = useState(false);
    const [isClicked, setIsClicked] = useState(color)
  const path = "devicon-".concat(skill.name)
  const ext = color ?  "-plain colored" : "-plain"
  const res = path.concat(ext)
  const handleMouseOut = isClicked ? true : false
  const handleMouseOver = isClicked ? false : true
  return (
    <div key={idx}>
      <Card className="text-center skillCard" style={{ width: '10rem' }}
        onMouseOver={()=> setColor(handleMouseOver)}
        onMouseOut={() => setColor(handleMouseOut)}
        onClick={() => setIsClicked(!isClicked)}
      >
      <i className={res} key={idx} />
          <Card.Title>
              {skill.displayTitle.toUpperCase()}
          </Card.Title>
      </Card>
      </div>
  )
}

function Skills() {
  return (
    <>    
            
      <Container>
        <div className="skills flex-container">
          <h1>SKILLS</h1>
          <div className="line-break" />          
            { skillsList.map((skill, idx)=>
                SkillCard(skill, idx)
            )}          
        </div>
      </Container>
    </>
  )
}

export default Skills